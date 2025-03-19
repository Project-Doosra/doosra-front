"use client";
import { useState } from "react";
import AuthLayout from "../../components/AuthLayout";

export default function ForgotPassword() {
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    console.log("Sending reset link to:", phoneNumber);

    try {
      const response = await fetch("/api/auth/forgot-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ phoneNumber }),
      });

      if (response.ok) {
        console.log("Reset link sent successfully!");
        // Show success message
      } else {
        console.error("Failed to send reset link");
        // Show error message
      }
    } catch (error) {
      console.error("Error sending reset link:", error);
    }
  };

  return (
    <AuthLayout>
      <h2 className="text-2xl font-semibold text-black mb-4 w-full text-center center ">
        Forgot Password.
      </h2>
      <form
        onSubmit={handleSubmit}
        className="flex text-black flex-col h-[41vh] bg-white"
      >
        <div className="mb-4 ">
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
        <button
          className="bg-doosra-blue hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
        >
          Send Link
        </button>
      </form>
      <div className="mt-4 text-center text-black text-sm">
        Click the Link Sent on your Email/ Phone To Generate New Password
      </div>
    </AuthLayout>
  );
}
