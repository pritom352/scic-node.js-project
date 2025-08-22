// /app/all-products/[id]/page.jsx
import clientPromise from "@/lib/mongodb";
import { ObjectId } from "mongodb";
import Link from "next/link";

export default async function ProductDetails({ params }) {
  const { id } = params;
  const client = await clientPromise;
  const db = client.db("techgadgets");
  const product = await db
    .collection("products")
    .findOne({ _id: new ObjectId(id) });

  if (!product) {
    return (
      <p className="text-center mt-10 text-red-500 text-lg">
        Product not found
      </p>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      {/* Breadcrumb */}
      <nav className="text-sm text-gray-500 dark:text-gray-400">
        <Link href="/" className="hover:underline">
          Home
        </Link>{" "}
        /{" "}
        <Link href="/all-products" className="hover:underline">
          All Products
        </Link>{" "}
        / <span className="text-gray-900 dark:text-white">{product.name}</span>
      </nav>

      {/* Product Title */}
      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
        {product.name}
      </h1>

      {/* Product Details */}
      <div className="space-y-4">
        <p className="text-gray-700 dark:text-gray-300 text-lg">
          {product.description}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="flex justify-between font-semibold text-gray-900 dark:text-white">
            <span>Price:</span>{" "}
            <span className="text-blue-600 dark:text-blue-400">
              ${product.price}
            </span>
          </div>

          <div className="flex justify-between font-semibold text-gray-900 dark:text-white">
            <span>Category:</span> <span>{product.category || "N/A"}</span>
          </div>

          <div className="flex justify-between font-semibold text-gray-900 dark:text-white">
            <span>Brand:</span> <span>{product.brand || "N/A"}</span>
          </div>

          <div className="flex justify-between font-semibold text-gray-900 dark:text-white">
            <span>Stock:</span> <span>{product.stock || "N/A"}</span>
          </div>
        </div>

        {/* Buy Now Button */}
        <button className="w-full md:w-auto px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition">
          Buy Now
        </button>
      </div>
    </div>
  );
}
