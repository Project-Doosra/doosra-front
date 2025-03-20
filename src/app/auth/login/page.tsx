"use client";
import { useState } from "react";
import { signIn } from "next-auth/react";
import AuthLayout from "@/app/components/AuthLayout";
import { AuthButton } from "@/app/components/auth/AuthContainer";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    // Logic to log in with email and password
    console.log("Logging in with email:", email, "password:", password);
  };

  return (
    <AuthLayout>
      <h2 className="text-2xl font-semibold text-black mb-4 w-full text-center center ">
        Welcome Back.
      </h2>
      <div className="flex text-black flex-col items-center justify-center h-[50vh]  bg-white">
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
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border rounded p-2 mb-4 w-80"
        />
        <button
          onClick={handleLogin}
          className="bg-doosra-blue text-white rounded p-2 mb-4 w-80"
        >
          Login
        </button>
        <div className="text-sm mb-4">Forgot Password?</div>
        <div className="flex w-full items-center justify-center space-x-4 mt-2">
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
    </AuthLayout>
  );
}
