import clientPromise from "@/lib/mongodb";

import Hero from "./components/Hero";
import ProductHighlights from "./components/ProductHighlights";

export default async function HomePage() {
  const client = await clientPromise;
  const db = client.db("techgadgets"); // তোমার ডাটাবেস নাম
  const products = await db.collection("products").find({}).toArray();

  return (
    <main>
      <Hero />
      <ProductHighlights products={products} />
    </main>
  );
}
