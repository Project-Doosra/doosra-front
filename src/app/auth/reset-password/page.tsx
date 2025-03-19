"use client";
import { useState } from "react";
import { useRouter } from "next/router";
import AuthLayout from "../../components/AuthLayout";

export default function ResetPassword() {
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    console.log("Resetting password with:", {
      newPassword,
      confirmNewPassword,
    });

    try {
      // Retrieve the token from the URL query
      //   const { token } = router.query;

    //   const response = await fetch("/api/auth/reset-password", {
    //     method: "POST",
    //     headers: { "Content-Type": "application/json" },
    //     body: JSON.stringify({
    //       newPassword,
    //       confirmNewPassword,
    //       resetToken: "token", // Send the token to the backend
    //     }),
    //   });

    //   if (response.ok) {
    //     console.log("Password reset successfully!");
    //     // Redirect to login page or show success message
    //     // router.push("/login"); // Example redirect
    //   } else {
    //     console.error("Failed to reset password");
    //     // Show error message
    //   }
    } catch (error) {
      console.error("Error resetting password:", error);
    }
  };

  return (
    <AuthLayout>
      <h2 className="text-2xl font-semibold text-black mb-4 w-full text-center center ">Forgot Password.</h2>
      <form onSubmit={handleSubmit} className="h-[50vh] flex flex-col center text-black">
        <div className="mb-4 ">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="newPassword"
          >
            Enter New Password
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="newPassword"
            type="password"
            placeholder="New Password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="confirmNewPassword"
          >
            Confirm New Password
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="confirmNewPassword"
            type="password"
            placeholder="Confirm New Password"
            value={confirmNewPassword}
            onChange={(e) => setConfirmNewPassword(e.target.value)}
          />
        </div>
        <button
          className="bg-doosra-blue hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
        >
          Login
        </button>
      </form>
    </AuthLayout>
  );
}
