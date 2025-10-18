"use client"
import { MoveLeft } from 'lucide-react'
import React from 'react'
import { useState } from "react";
import Link from "next/link";
import { Eye } from "lucide-react";
import { EyeOff } from "lucide-react";

const ForgetPassword = () => {
      const [oldPassword, setOldPassword] = useState("");
      const [newPassword, setNewPassword] = useState("");
      const [confirmPassword, setConfirmPassword] = useState("");
      const [rememberMe, setRememberMe] = useState(false);
      const [showOldPassword, setShowOldPassword] = useState(false);
      const [showNewPassword, setShowNewPassword] = useState(false);
      const [showConfirmPassword, setShowConfirmPassword] = useState(false);

      const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log({ oldPassword, newPassword, confirmPassword });
      };

  return (
    <div className="min-h-screen ">
      <div className="p-4 sm:p-6 flex flex-col gap-6">
        <div className="flex items-center gap-2">
          <MoveLeft />
          <button
            onClick={() => window.history.back()}
            className="px-2 py-2 rounded-3xl font-medium"
          >
            Setting
          </button>
        </div>
      </div>

      <div className='bg-white min-h-3xl flex flex-col items-center justify-center mx-5 py-32 pl-3 lg:px-8'>
        <h1 className='font-medium text-[32px] mb-5'>
            Forgot password
        </h1>
        <p className='opacity-50 mb-4'>Enter your email address to get a verification code for resetting your password.</p>

        <form onSubmit={handleSubmit} className='lg:w-[600px]'>
          <div className='mb-6'>
            <label
              htmlFor="old-password"
              className="block text-sm font-semibold text-gray-700 mb-2"
            >
             Email
            </label>
            <div className="relative">
              <div className='absolute top-3 ml-2 z-10'>
                <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M6.71181 4.4713C10.2303 4.1567 13.7699 4.1567 17.2885 4.4713L18.8058 4.60697C20.3182 4.74219 21.5401 5.89757 21.7598 7.39999C22.2543 10.7823 22.2543 14.2186 21.7598 17.6009C21.5401 19.1033 20.3182 20.2587 18.8058 20.3939L17.2885 20.5296C13.7699 20.8442 10.2303 20.8442 6.71181 20.5296L5.19447 20.3939C3.6821 20.2587 2.46015 19.1033 2.2405 17.6009C1.74601 14.2186 1.74601 10.7823 2.2405 7.39999C2.46015 5.89757 3.6821 4.74219 5.19447 4.60697L6.71181 4.4713ZM5.8557 7.3401C5.62327 7.21495 5.34216 7.22121 5.11553 7.35657C4.8889 7.49194 4.75012 7.73648 4.75012 8.00046V17.5005C4.75012 17.9147 5.08591 18.2505 5.50012 18.2505C5.91434 18.2505 6.25012 17.9147 6.25012 17.5005V9.25612L11.6445 12.1608C11.8665 12.2803 12.1337 12.2803 12.3557 12.1608L17.7501 9.25612V17.5005C17.7501 17.9147 18.0859 18.2505 18.5001 18.2505C18.9143 18.2505 19.2501 17.9147 19.2501 17.5005V8.00046C19.2501 7.73648 19.1113 7.49194 18.8847 7.35657C18.6581 7.22121 18.377 7.21495 18.1445 7.3401L12.0001 10.6486L5.8557 7.3401Z" fill="black"/>
</svg>

              </div>
              <input
                type={showOldPassword ? "text" : "password"}
                id="old-password"
                value={oldPassword}
                onChange={(e) => setOldPassword(e.target.value)}
                className="w-full px-3 pl-10 py-3 border border-[#252525] rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-[#FFE135] pr-10 placeholder:text-sm"
                placeholder="Enter your email"
                required
              />
              
            </div>

            
          </div>

         
<Link href="/dashboard/settings/otp">
          <button
            type="submit"
            className="w-full bg-[#FFE135] hover:bg-[#ffd700] text-black font-semibold py-3 rounded-md transition-colors duration-200"
          >
            Send OTP
          </button>
          </Link>
        </form>
      </div>
    </div>
  )
}

export default ForgetPassword
