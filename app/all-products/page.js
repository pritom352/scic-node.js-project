// /app/all-products/page.jsx
import Link from "next/link";
import clientPromise from "@/lib/mongodb";

export const dynamic = "force-dynamic"; // প্রতিবার fresh data fetch করার জন্য

export default async function AllProductsPage() {
  try {
    const client = await clientPromise;
    const db = client.db("techgadgets");

    // MongoDB থেকে সব products fetch করা হচ্ছে
    const products = await db.collection("products").find({}).toArray();

    return (
      <div className="max-w-7xl mx-auto p-6">
        <h1 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white text-center">
          All Products
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product._id.toString()}
              className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl shadow-md hover:shadow-xl transition transform hover:-translate-y-1 duration-300 flex flex-col justify-between"
            >
              <div className="p-4 space-y-2">
                <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {product.name}
                </h2>
                <p className="text-gray-600 dark:text-gray-300 text-sm line-clamp-3">
                  {product.description}
                </p>
                <p className="mt-2 font-bold text-blue-600 dark:text-blue-400 text-lg">
                  ${product.price}
                </p>
              </div>
              <div className="p-4">
                <Link
                  href={`/all-products/${product._id.toString()}`}
                  className="block w-full text-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  } catch (error) {
    return (
      <div className="text-center text-red-500 mt-10">
        Failed to load products: {error.message}
      </div>
    );
  }
}
