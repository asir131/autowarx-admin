"use client";

import type React from "react";

import Image from "next/image";
import { useState } from "react";
import singupImg from "@/assets/vendor/vendorSingupImg.png";
import logo from "@/assets/vendor/vendorlogo.png";
import Link from "next/link";
import { Eye } from "lucide-react";
import { EyeOff } from "lucide-react";
export default function ResetPassword() {
  
  const [showPassword, setShowPassword] = useState(false);
  const [confirmPassword,setConfirmPassword] = useState(false);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here (e.g., API call)
   
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
            Reset Password
          </h2>
          <p className="text-gray-600">
            Please enter the new password to linked your account.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="w-full max-w-md space-y-4">
          
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-semibold text-gray-700 mb-1"
            >
              New Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#FFE135] focus:ring-offset-2 transition duration-200 pr-10"
                placeholder="Password"
                required
              />
              <button
                type="button"
                className="absolute inset-y-0 right-0 pr-3 flex items-center"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <Eye className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                ) : (
                  <EyeOff className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                )}
              </button>
            </div>


            
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-semibold text-gray-700 mb-1"
            >
              Confirm Password
            </label>
            <div className="relative">
              <input
                type={confirmPassword ? "text" : "password"}
                id="password"
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#FFE135] focus:ring-offset-2 transition duration-200 pr-10"
                placeholder="Password"
                required
              />
              <button
                type="button"
                className="absolute inset-y-0 right-0 pr-3 flex items-center"
                onClick={() => setConfirmPassword(!confirmPassword)}
              >
                {confirmPassword ? (
                  <Eye className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                ) : (
                  <EyeOff className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                )}
              </button>
            </div>


            
          </div>

                
          <Link href="/">
            <button
              type="submit"
              className="w-full mt-5 bg-[#FFE135] hover:bg-[#f8d926]  font-medium py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FFE135] focus:ring-offset-2 transition duration-200"
            >
             Reset Password
            </button>
          </Link>
          <div className="text-center text-sm">
            <p>Remember your password ? <Link href="/" className="text-[#FFE135] cursor-pointer">Log in</Link> </p>
          </div>
        </form>
      </div>
    </div>
  );
}
