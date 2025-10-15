"use client";

import type React from "react";

import Image from "next/image";
import { useState } from "react";
import singupImg from "@/assets/vendor/vendorSingupImg.png";
import logo from "@/assets/vendor/vendorlogo.png";
import Link from "next/link";
import { Eye } from "lucide-react";
import { EyeOff } from "lucide-react";
export default function VerifyEmail() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here (e.g., API call)
    console.log({ firstName, lastName, email });
  };

  return (
    <div className="flex flex-col  md:flex-row bg-gray-100">
      {/* Left Side: Background Image with Overlay */}
      <div className="md:w-1/2 h-64 md:h-screen relative flex items-center justify-center bg-gradient-to-br from-gray-200 via-gray-300 to-gray-400">
        {/* Optional overlay for better contrast */}
        <div className="absolute inset-0 bg-black/10"></div>
        {/* Car Image - Replace with your actual image */}
        <Image
          src={singupImg || "/placeholder.svg"}
          alt="Green classic car"
          className="w-full h-full object-cover drop-shadow-lg"
        />
        {/* Optional: Add subtle lines or clouds as SVG if needed */}
        <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-48 h-1 bg-gray-300"></div>
        <div className="absolute top-8 left-1/4 w-32 h-1 bg-gray-300"></div>
      </div>

      {/* Right Side: Form */}
      <div className="md:w-1/2  flex flex-col items-start justify-center p-8 md:p-36 bg-white py-8 md:py-12">
        <div className="mb-8">
          <Image
            src={logo || "/placeholder.svg"}
            height={100}
            width={200}
            alt=""
          />
          <h2 className="text-lg md:text-2xl font-semibold text-gray-700 mb-4">
            Verify OTP
          </h2>
          <p className="text-gray-600 opacity-65">
            We'll send a verification code to your email. <br /> Check your inbox and enter the code here.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="w-full max-w-md space-y-4">
          
            <div className="OTP">
  <div className="flex justify-center space-x-3 mb-8">
    {[0, 1, 2, 3, 4, 5].map((index) => (
      <input
        key={index}
        type="text"
        maxLength={1}
        className="w-10 lg:w-12 h-10 lg:h-12 text-center text-xl font-semibold bg-[#FFFCEB] border-2 border-[#FFE135] rounded-md focus:outline-none focus:ring-2 focus:ring-[#FFE135] focus:border-[#FFE135]"
        onChange={(e) => {
          // Auto-focus next input
          if (e.target.value.length === 1 && index < 5) {
            const nextInput = document.querySelectorAll<HTMLInputElement>('.OTP input')[index + 1];
            if (nextInput) nextInput.focus();
          }
        }}
        onKeyDown={(e) => {
          // Handle backspace to focus previous input
          if (e.key === 'Backspace' && e.currentTarget.value === '' && index > 0) {
            const prevInput = document.querySelectorAll<HTMLInputElement>('.OTP input')[index - 1];
            if (prevInput) prevInput.focus();
          }
        }}
      />
    ))}
  </div>
</div>
          <Link href="/reset-password">
            <button
              type="submit"
              className="w-full  bg-[#FFE135] hover:bg-[#f8d926]  font-medium py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FFE135] focus:ring-offset-2 transition duration-200"
            >
             Verify 
            </button>
          </Link>
          <div className="flex justify-between">
             <h1 className="opacity-60">Don’t Receive Code ?</h1>
             <h1 className="font-semibold cursor-pointer">
              Resend Code
             </h1>
          </div>
        </form>
      </div>
    </div>
  );
}
