"use client";
import React from "react";

const AuthLayout = ({ children }: any) => {
  return (
    <div className="min-h-screen bg-doosra-blue flex flex-col items-center justify-start pt-">
      <h1 className="text-white bg-doosra-blue text-3xl my-[80px] font-bold">Doosra</h1>
      <div className="bg-white rounded-t-3xl p-8 w-full min-h-full max-w-md">{children}</div>
    </div>
  );
};

export default AuthLayout;