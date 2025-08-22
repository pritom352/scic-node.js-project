"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            href="/"
            className="text-2xl font-bold text-blue-600 dark:text-blue-400"
          >
            TechGadget
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            <Link href="/" className="hover:text-blue-500 transition-colors">
              Home
            </Link>

            <Link
              href="/add-product"
              className="hover:text-blue-500 transition-colors"
            >
              Add Product
            </Link>
            <Link
              href="/all-products"
              className="hover:text-blue-500 transition-colors"
            >
              All Products
            </Link>
            <Link
              href="/login"
              className="hover:text-blue-500 transition-colors"
            >
              Login
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-700 dark:text-gray-200"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
          <div className="px-4 py-2 space-y-2">
            <Link
              href="/"
              className="block hover:text-blue-500 transition-colors"
            >
              Home
            </Link>

            <Link
              href="/add-product"
              className="block hover:text-blue-500 transition-colors"
            >
              Add Product
            </Link>
            <Link
              href="/all-products/page.js"
              className="block hover:text-blue-500 transition-colors"
            >
              All Products
            </Link>
            <Link
              href="/login"
              className="block hover:text-blue-500 transition-colors"
            >
              Login
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
