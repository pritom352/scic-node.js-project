import clientPromise from "@/lib/mongodb";

export async function GET(req) {
  try {
    const client = await clientPromise;
    const db = client.db("techgadgets");
    const products = await db
      .collection("products")
      .find({})
      .limit(8)
      .toArray();

    return new Response(JSON.stringify(products), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}

export async function POST(req) {
  try {
    const data = await req.json();
    const { name, description, price } = data;

    // if (!name || !description || !price) {
    //   return new Response(
    //     JSON.stringify({ error: "Name, description and price are required" }),
    //     { status: 400, headers: { "Content-Type": "application/json" } }
    //   );
    // }

    const client = await clientPromise;
    const db = client.db("techgadgets");
    const result = await db.collection("products").insertOne({
      name,
      description,
      price: parseFloat(price),
      createdAt: new Date(),
    });

    return new Response(
      JSON.stringify({
        message: "Product added",
        productId: result.insertedId,
      }),
      { status: 201, headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
