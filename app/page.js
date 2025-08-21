import Image from "next/image";

export default function Hero() {
  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white leading-tight">
            Elevate Your Tech <br />
            <span className="text-blue-600 dark:text-blue-400">Experience</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-md">
            Discover the latest gadgets, smart devices, and accessories designed
            to simplify your life and keep you ahead of the curve.
          </p>

          <div className="flex items-center space-x-4 mt-6">
            <a
              href="/products"
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-lg transition duration-300"
            >
              Shop Now
            </a>
            <a
              href="/products"
              className="px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-200 font-medium rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition"
            >
              Learn More
            </a>
          </div>
        </div>

        {/* Right Content */}
        <div className="flex justify-center md:justify-end">
          <div className="relative w-80 md:w-96 h-80 md:h-96 rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src="/hero-gadget.jpg"
              alt="Tech Gadget"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
