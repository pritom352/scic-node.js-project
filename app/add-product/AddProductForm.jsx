"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AddProductForm() {
  const router = useRouter();

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [brand, setBrand] = useState("");
  const [stock, setStock] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch("/api/products", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name,
        description,
        price,
        category,
        brand,
        stock,
      }),
    });

    const data = await res.json();

    if (res.ok) {
      alert("Product added successfully!");
      router.push("/all-products");
    } else {
      alert(data.error || "Something went wrong");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Product Name"
        className="w-full border rounded-lg p-2"
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
        className="w-full border rounded-lg p-2"
      />
      <input
        type="number"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        placeholder="Price"
        className="w-full border rounded-lg p-2"
      />
      <input
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        placeholder="Category"
        className="w-full border rounded-lg p-2"
      />
      <input
        value={brand}
        onChange={(e) => setBrand(e.target.value)}
        placeholder="Brand"
        className="w-full border rounded-lg p-2"
      />
      <input
        type="number"
        value={stock}
        onChange={(e) => setStock(e.target.value)}
        placeholder="Stock Quantity"
        className="w-full border rounded-lg p-2"
      />
      <button
        type="submit"
        className="w-full px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg"
      >
        Add Product
      </button>
    </form>
  );
}
