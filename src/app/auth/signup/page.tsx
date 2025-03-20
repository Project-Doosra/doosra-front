// pages/signup/index.js
"use client";
import { useState } from "react";
import AuthLayout from "../../components/AuthLayout"; // Adjust path if needed
import { AuthButton } from "@/app/components/auth/AuthContainer";

export default function SignUpPhone() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    // Add your signup logic here (e.g., using next-auth credentials provider or a custom API).
    // Handle password matching, API calls, etc.
    console.log("Signing up with phone", {
      phoneNumber,
      password,
      confirmPassword,
    });

    // Example (replace with your actual logic):
    try {
      const response = await fetch("/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ phoneNumber, password }),
      });

      if (response.ok) {
        // Signup successful, redirect or show a success message.
        console.log("Signup successful!");
      } else {
        // Handle errors (e.g., display an error message).
        console.error("Signup failed");
      }
    } catch (error) {
      console.error("Error during signup:", error);
    }
  };

  return (
    <AuthLayout>
      <h2 className="text-2xl font-semibold text-black mb-4 w-full text-center center font-">
        Get started free.
      </h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="phoneNumber"
          >
            Phone Number
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="phoneNumber"
            type="text"
            placeholder="0566877102"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="confirm-password"
          >
            Confirm Password
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="confirm-password"
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        <button
          className="bg-doosra-blue hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full  px-auto"
          type="submit"
        >
          Get Started
        </button>
      </form>

      <div className="mt-4 text-center text-black">
        <hr />
        <p className="text-black/40 mx-4">or sign up with</p>
        <div className="flex items-center justify-center space-x-4 mt-2">
          <AuthButton className=" ">
            <img src="/google.png" alt="Google" className="h-6 mx-auto  w-6" />
          </AuthButton>
          <AuthButton className="w-full">
            <img
              src="/apple.png"
              alt="Apple"
              className="h-6 w-6 center text-center mx-auto "
            />
          </AuthButton>
        </div>
      </div>
      <a href="/signupmail" className="mt-4 text-center">
        <AuthButton className="text-sm text-gray-600 hover:underline">
          Continue with email
        </AuthButton>
      </a>
    </AuthLayout>
  );
}
