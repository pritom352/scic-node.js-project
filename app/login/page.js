"use client";
import { signIn } from "next-auth/react";

export default function LoginPage() {
  return (
    <div className="flex justify-center items-center h-screen">
      <button
        onClick={() => signIn("google", { callbackUrl: "/all-products" })}
        className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg"
      >
        Sign in with Google
      </button>
    </div>
  );
}
