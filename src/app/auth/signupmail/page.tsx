"use client";
import { useState } from "react";
import { signIn } from "next-auth/react";
import AuthLayout from "@/app/components/AuthLayout";

export default function SignupMail() {
  const [email, setEmail] = useState("");

  const handleSignup = async () => {
    // Logic to send email and proceed
    console.log("Signing up with email:", email);
    // You might want to implement email sending logic here
  };

  return (
    <AuthLayout>
      <div className="flex flex-col  justify-center  bg-white">
        <h2 className="text-2xl font-semibold text-black mb-4 w-full text-center center font-">
          Get started free.
        </h2>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border rounded p-2 mb-4 w-80"
        />
        <input
          type="password"
          placeholder="Password"
          className="border rounded p-2 mb-4 w-80"
        />
        <input
          type="password"
          placeholder="Confirm Password"
          className="border rounded p-2 mb-4 w-80"
        />
        <button
          onClick={handleSignup}
          className="bg-doosra-blue text-white rounded p-2 mb-4 w-80"
        >
          Get Started
        </button>
        <div className="flex justify-around w-80">
          <button
            onClick={() => signIn("google")}
            className="border rounded p-2"
          >
            Google
          </button>
          <button
            onClick={() => signIn("apple")}
            className="border rounded p-2"
          >
            Apple
          </button>
        </div>
        <div className="mt-4 text-sm">Confirm your email to continue.</div>
      </div>
    </AuthLayout>
  );
}
