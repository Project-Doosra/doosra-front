// interface AuthContainerProps {
//   children: React.ReactNode;
// }

// export const AuthContainer: React.FC<AuthContainerProps> = ({ children }) => {
//   return (
//     <div className="flex flex-col min-h-screen bg-white">
//       <div className="flex-1 w-full max-w-md mx-auto p-4 flex flex-col">
//         {children}
//       </div>
//     </div>
//   );
// };

// interface AuthHeaderProps {
//   title: string;
// }

// export const AuthHeader: React.FC<AuthHeaderProps> = ({ title }) => {
//   return (
//     <div className="flex flex-col items-center mb-6">
//       <div className="bg-blue-700 w-full py-4 mb-8 flex justify-center rounded-md">
//         <h1 className="text-white text-2xl font-medium">Doosra</h1>
//       </div>
//       <h2 className="text-gray-800 text-lg font-medium mb-4">{title}</h2>
//     </div>
//   );
// };

// interface InputFieldProps {
//   type: string;
//   placeholder: string;
//   name: string;
//   value: string;
//   onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
//   className?: string;
// }

// export const InputField: React.FC<InputFieldProps> = ({
//   type,
//   placeholder,
//   name,
//   value,
//   onChange,
//   className = "",
// }) => {
//   return (
//     <input
//       type={type}
//       placeholder={placeholder}
//       name={name}
//       value={value}
//       onChange={onChange}
//       className={`w-full px-3 py-2 border border-gray-300 rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500 ${className}`}
//     />
//   );
// };

// import React, { useEffect, useRef, useState } from "react";

// interface ButtonProps {
//   text: string;
//   onClick?: () => void;
//   type?: "button" | "submit" | "reset";
//   className?: string;
// }

// export const Button: React.FC<ButtonProps> = ({
//   text,
//   onClick,
//   type = "button",
//   className = "",
// }) => {
//   return (
//     <button
//       type={type}
//       onClick={onClick}
//       className={`w-full bg-blue-700 text-white font-medium py-2 px-4 rounded-md hover:bg-blue-800 transition duration-200 ${className}`}
//     >
//       {text}
//     </button>
//   );
// };

// interface OtpInputProps {
//   length: number;
//   onChange: (otp: string) => void;
// }

// export const OtpInput: React.FC<OtpInputProps> = ({ length, onChange }) => {
//   const [otp, setOtp] = useState<string[]>(Array(length).fill(""));
//   const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

//   useEffect(() => {
//     if (inputRefs.current[0]) {
//       inputRefs.current[0].focus();
//     }
//   }, []);

//   const handleChange = (
//     e: React.ChangeEvent<HTMLInputElement>,
//     index: number
//   ) => {
//     const value = e.target.value;
//     if (isNaN(Number(value))) return;

//     const newOtp = [...otp];
//     // Only take the last character if multiple were pasted
//     newOtp[index] = value.substring(value.length - 1);
//     setOtp(newOtp);

//     // Move to next input if current field is filled
//     if (value && index < length - 1) {
//       inputRefs.current[index + 1]?.focus();
//     }

//     onChange(newOtp.join(""));
//   };

//   const handleKeyDown = (
//     e: React.KeyboardEvent<HTMLInputElement>,
//     index: number
//   ) => {
//     if (e.key === "Backspace" && !otp[index] && index > 0) {
//       // Move to previous input on backspace if current input is empty
//       inputRefs.current[index - 1]?.focus();
//     }
//   };

//   // Handle paste event
//   const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
//     e.preventDefault();
//     const pastedData = e.clipboardData.getData("text");
//     if (!/^\d+$/.test(pastedData)) return;

//     const newOtp = [...otp];
//     for (let i = 0; i < Math.min(length, pastedData.length); i++) {
//       newOtp[i] = pastedData[i];
//       if (inputRefs.current[i]) {
//         inputRefs.current[i]!.value = pastedData[i];
//       }
//     }

//     setOtp(newOtp);
//     onChange(newOtp.join(""));

//     // Focus on the next empty input or the last input
//     const focusIndex = Math.min(pastedData.length, length - 1);
//     inputRefs.current[focusIndex]?.focus();
//   };

//   return (
//     <div className="flex justify-between mb-6 gap-2">
//       {Array.from({ length }, (_, index) => (
//         <input
//           key={index}
//           type="text"
//           maxLength={1}
//           ref={(ref) => {
//             if (ref) {
//               inputRefs.current[index] = ref;
//             }
//           }}
//           value={otp[index]}
//           onChange={(e) => handleChange(e, index)}
//           onKeyDown={(e) => handleKeyDown(e, index)}
//           onPaste={index === 0 ? handlePaste : undefined}
//           className="w-12 h-12 text-center text-lg border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//         />
//       ))}
//     </div>
//   );
// };

// export const SocialLogin: React.FC = () => {
//   return (
//     <div className="mt-4">
//       <div className="flex items-center my-4">
//         <div className="flex-grow border-t border-gray-300"></div>
//         <span className="px-3 text-sm text-gray-500">or Sign in with</span>
//         <div className="flex-grow border-t border-gray-300"></div>
//       </div>
//       <div className="flex justify-center space-x-4">
//         <button className="w-10 h-10 flex items-center justify-center border border-gray-300 rounded-full">
//           <svg
//             width="20"
//             height="20"
//             viewBox="0 0 24 24"
//             fill="none"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <path
//               d="M12 2C6.477 2 2 6.477 2 12C2 17.523 6.477 22 12 22C17.523 22 22 17.523 22 12C22 6.477 17.523 2 12 2Z"
//               stroke="#1877F2"
//               strokeWidth="1.5"
//             />
//             <path
//               d="M15.5 12H13V14.5H11V12H8.5V10H11V7.5H13V10H15.5V12Z"
//               fill="#1877F2"
//             />
//           </svg>
//         </button>
//         <button className="w-10 h-10 flex items-center justify-center border border-gray-300 rounded-full">
//           <svg
//             width="20"
//             height="20"
//             viewBox="0 0 24 24"
//             fill="none"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <path
//               d="M21.8055 10.0415H21V10H12V14H17.6515C16.827 16.3285 14.6115 18 12 18C8.6865 18 6 15.3135 6 12C6 8.6865 8.6865 6 12 6C13.5295 6 14.921 6.577 15.9805 7.5195L18.809 4.691C17.023 3.0265 14.634 2 12 2C6.4775 2 2 6.4775 2 12C2 17.5225 6.4775 22 12 22C17.5225 22 22 17.5225 22 12C22 11.3295 21.931 10.675 21.8055 10.0415Z"
//               fill="#FFC107"
//             />
//             <path
//               d="M3.15283 7.3455L6.43833 9.755C7.32733 7.554 9.48033 6 11.9998 6C13.5293 6 14.9208 6.577 15.9803 7.5195L18.8088 4.691C17.0228 3.0265 14.6338 2 11.9998 2C8.15883 2 4.82783 4.1685 3.15283 7.3455Z"
//               fill="#FF3D00"
//             />
//           </svg>
//         </button>
//         <button className="w-10 h-10 flex items-center justify-center border border-gray-300 rounded-full">
//           <svg
//             width="20"
//             height="20"
//             viewBox="0 0 24 24"
//             fill="none"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <path
//               d="M12 2C6.477 2 2 6.477 2 12C2 17.523 6.477 22 12 22C17.523 22 22 17.523 22 12C22 6.477 17.523 2 12 2Z"
//               stroke="#000000"
//               strokeWidth="1.5"
//             />
//             <path
//               d="M16.5 12.75L12.5 16.75H11L12 13.75H9.5L8 16.75H7L11 8.75H12L11 11.75H13.5L14.5 8.75H15.5L14.5 11.75H17L16.5 12.75Z"
//               fill="#000000"
//             />
//           </svg>
//         </button>
//       </div>
//     </div>
//   );
// };

// interface AuthFooterProps {
//   children: React.ReactNode;
// }

// export const AuthFooter: React.FC<AuthFooterProps> = ({ children }) => {
//   return (
//     <div className="text-center mt-6 text-sm text-gray-600">{children}</div>
//   );
// };

// export const validateEmail = (email: string): boolean => {
//   const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//   return re.test(email);
// };

// export const validatePassword = (password: string): boolean => {
//   return password.length >= 8;
// };

// export const validatePhone = (phone: string): boolean => {
//   const re = /^\d{10}$/;
//   return re.test(phone);
// };

interface AuthInputProps {
  label: string;
  type: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const AuthInput: React.FC<AuthInputProps> = ({
  label,
  type,
  value,
  onChange,
}) => {
  return (
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-700">{label}</label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        className="w-full p-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
};

interface AuthButtonProps {
  children: React.ReactNode;
}

export const AuthButton: React.FC<any> = ({ children, className }: any) => {
  return (
    <button
      className={`w-full px-4 text-center center py-2 mt-4 text-black bg-white border-2 border-black rounded ${className}`}
    >
      {children}
    </button>
  );
};

import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";

export const OAuthButtons: React.FC = () => {
  const handleGoogleSignIn = () => {
    // Implement Google OAuth logic
  };

  const handleAppleSignIn = () => {
    // Implement Apple OAuth logic
  };

  return (
    <div className="flex flex-col gap-2 mt-4">
      <button
        onClick={handleGoogleSignIn}
        className="flex items-center justify-center w-full p-2 border rounded-lg hover:bg-gray-100 transition-all"
      >
        <FcGoogle className="mr-2 text-xl" />
        Continue with Google
      </button>
      <button
        onClick={handleAppleSignIn}
        className="flex items-center justify-center w-full p-2 border rounded-lg hover:bg-gray-100 transition-all"
      >
        <FaApple className="mr-2 text-xl" />
        Continue with Apple
      </button>
    </div>
  );
};

interface OTPInputProps {
  value: string;
  onChange: (value: string) => void;
}

export const OTPInput: React.FC<OTPInputProps> = ({ value, onChange }) => {
  const [otp, setOtp] = useState(value);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newOtp = e.target.value.replace(/\D/g, "").slice(0, 4); // Only numbers, max 4 digits
    setOtp(newOtp);
    onChange(newOtp);
  };

  return (
    <div className="flex justify-center gap-2 mt-4">
      {Array(4)
        .fill("")
        .map((_, i) => (
          <input
            key={i}
            type="text"
            maxLength={1}
            value={otp[i] || ""}
            onChange={handleChange}
            className="w-12 h-12 text-xl text-center border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        ))}
    </div>
  );
};
