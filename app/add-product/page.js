import AddProductForm from "./AddProductForm";

export default function AddProductPage() {
  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
        Add New Product
      </h1>
      <AddProductForm />
    </div>
  );
}
