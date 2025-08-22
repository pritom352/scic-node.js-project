import Link from "next/link";

export default function ProductHighlights({ products }) {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h2 className="text-3xl font-bold mb-12 text-center text-gray-900 dark:text-white">
        Featured Products
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <div
            key={product._id}
            className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl shadow-md hover:shadow-xl transition transform hover:-translate-y-1 duration-300"
          >
            <div className="p-6 space-y-3">
              <h3 className="font-semibold text-lg text-gray-900 dark:text-white">
                {product.name}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm line-clamp-2">
                {product.description}
              </p>
              <p className="mt-2 font-bold text-blue-600 dark:text-blue-400 text-lg">
                ${product.price}
              </p>

              {/* Dynamic Link to Details Page */}
              <Link
                href={`/all-products/${product._id.toString()}`}
                className="block w-full mt-4 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg text-center transition"
              >
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
