import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-white">TechGadget</h2>
          <p className="text-gray-400">
            Discover the latest gadgets and electronics designed to make your
            life smarter.
          </p>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/" className="hover:text-blue-500">
                Home
              </Link>
            </li>
            <li>
              <Link href="/products" className="hover:text-blue-500">
                Products
              </Link>
            </li>
            <li>
              <Link href="/login" className="hover:text-blue-500">
                Login
              </Link>
            </li>
            <li>
              <Link
                href="/dashboard/add-product"
                className="hover:text-blue-500"
              >
                Add Product
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-4">Support</h3>
          <ul className="space-y-2">
            <li>Email Support</li>
            <li>Helpline: 01332-502004</li>
            <li>Helpdesk</li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <a
              href="https://www.facebook.com/pritom.proshad.2024"
              target="block"
              className="hover:text-blue-500"
            >
              Facebook
            </a>

            <a
              href="https://www.linkedin.com/in/pritom352/"
              className="hover:text-blue-500"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>

      <div className="mt-8 border-t border-gray-700 pt-6 text-center text-gray-500 text-sm">
        &copy; 2025 TechGadget. All rights reserved.
      </div>
    </footer>
  );
}
