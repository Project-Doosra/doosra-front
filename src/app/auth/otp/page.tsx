"use client";
import AuthLayout from "@/app/components/AuthLayout";
import { useState } from "react";

export default function OTP() {
  const [otp, setOTP] = useState(["", "", "", ""]);

  const handleOTPChange = (index: number, value: string) => {
    const newOTP = [...otp];
    newOTP[index] = value;
    setOTP(newOTP);
  };

  const handleVerify = () => {
    // Logic to verify OTP
    console.log("Verifying OTP:", otp.join(""));
  };

  return (
    <AuthLayout>
      <h2 className="text-2xl font-semibold text-black mb-4 w-full text-center center font-">
        Get started free.
      </h2>
      <div className="text-black flex flex-col items-center justify-center h-[50vh] bg-white">
        <div className="text-xl mb-4 text-black">Verify OTP.</div>
        <div className="flex space-x-2 mb-4">
          {otp.map((digit, index) => (
            <input
              key={index}
              type="text"
              maxLength={1}
              value={digit}
              onChange={(e) => handleOTPChange(index, e.target.value)}
              className="border rounded text-black p-2 w-12 text-center"
            />
          ))}
        </div>
        <button
          onClick={handleVerify}
          className="bg-doosra-blue text-white rounded p-2 mb-4 w-80"
        >
          Verify
        </button>
        <div className="text-sm">Resend OTP</div>
      </div>
    </AuthLayout>
  );
}
