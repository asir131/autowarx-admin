"use client"
import { MoveLeft } from 'lucide-react'
import React from 'react'
import { useState } from "react";
import Link from "next/link";
import { Eye } from "lucide-react";
import { EyeOff } from "lucide-react";

const ChangePassword = () => {
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

      <div className='bg-white mx-5 py-16 px-8'>
        <h1 className='font-medium text-[32px] mb-8'>
            Update Password
        </h1>

        <form onSubmit={handleSubmit} className='lg:w-[600px]'>
          <div className='mb-6'>
            <label
              htmlFor="old-password"
              className="block text-sm font-semibold text-gray-700 mb-2"
            >
             Enter old password
            </label>
            <div className="relative">
              <div className='absolute top-3 ml-2 z-10'>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M7.30627 7.75828L7.64933 10.8458L6.95511 10.9013C5.98701 10.9785 5.19651 11.7063 5.03958 12.6647C4.67789 14.8736 4.67789 17.1266 5.03958 19.3355C5.19651 20.2939 5.98701 21.0217 6.95511 21.0989L8.45124 21.2184C10.8134 21.407 13.1868 21.407 15.5489 21.2184L17.0451 21.0989C18.0132 21.0217 18.8037 20.2939 18.9606 19.3355C19.3223 17.1266 19.3223 14.8736 18.9606 12.6647C18.8037 11.7063 18.0132 10.9785 17.0451 10.9013L16.3507 10.8458L16.6938 7.75828C16.7342 7.3943 16.7342 7.02696 16.6938 6.66298L16.671 6.45809C16.4295 4.2847 14.7209 2.56504 12.5492 2.30953C12.1843 2.26661 11.8157 2.26661 11.4509 2.30953C9.27913 2.56504 7.57053 4.2847 7.32904 6.45809L7.30627 6.66298C7.26583 7.02696 7.26583 7.3943 7.30627 7.75828ZM12.3739 3.79926C12.1255 3.77004 11.8746 3.77004 11.6262 3.79926C10.1475 3.97322 8.98428 5.14402 8.81986 6.62373L8.7971 6.82863C8.76889 7.08252 8.76889 7.33875 8.7971 7.59263L9.1459 10.7318C11.0467 10.6099 12.9534 10.6099 14.8542 10.7318L15.203 7.59263C15.2312 7.33874 15.2312 7.08252 15.203 6.82863L15.1802 6.62373C15.0158 5.14402 13.8525 3.97322 12.3739 3.79926ZM12.0001 14.5001C11.1716 14.5001 10.5001 15.1717 10.5001 16.0001C10.5001 16.8285 11.1716 17.5001 12.0001 17.5001C12.8285 17.5001 13.5001 16.8285 13.5001 16.0001C13.5001 15.1717 12.8285 14.5001 12.0001 14.5001Z" fill="#252525"/>
                </svg>
              </div>
              <input
                type={showOldPassword ? "text" : "password"}
                id="old-password"
                value={oldPassword}
                onChange={(e) => setOldPassword(e.target.value)}
                className="w-full px-3 pl-10 py-3 border border-[#252525] rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-[#FFE135] pr-10 placeholder:text-sm"
                placeholder="Enter old password"
                required
              />
              <button
                type="button"
                className="absolute inset-y-0 right-0 pr-3 flex items-center"
                onClick={() => setShowOldPassword(!showOldPassword)}
              >
                {showOldPassword ? (
                  <Eye className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                ) : (
                  <EyeOff className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                )}
              </button>
            </div>

            
          </div>

          <div className='mb-6'>
            <label
              htmlFor="new-password"
              className="block text-sm font-semibold text-gray-700 mb-2"
            >
             New Password
            </label>
            <div className="relative">
              <div className='absolute top-3 ml-2 z-10'>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M7.30627 7.75828L7.64933 10.8458L6.95511 10.9013C5.98701 10.9785 5.19651 11.7063 5.03958 12.6647C4.67789 14.8736 4.67789 17.1266 5.03958 19.3355C5.19651 20.2939 5.98701 21.0217 6.95511 21.0989L8.45124 21.2184C10.8134 21.407 13.1868 21.407 15.5489 21.2184L17.0451 21.0989C18.0132 21.0217 18.8037 20.2939 18.9606 19.3355C19.3223 17.1266 19.3223 14.8736 18.9606 12.6647C18.8037 11.7063 18.0132 10.9785 17.0451 10.9013L16.3507 10.8458L16.6938 7.75828C16.7342 7.3943 16.7342 7.02696 16.6938 6.66298L16.671 6.45809C16.4295 4.2847 14.7209 2.56504 12.5492 2.30953C12.1843 2.26661 11.8157 2.26661 11.4509 2.30953C9.27913 2.56504 7.57053 4.2847 7.32904 6.45809L7.30627 6.66298C7.26583 7.02696 7.26583 7.3943 7.30627 7.75828ZM12.3739 3.79926C12.1255 3.77004 11.8746 3.77004 11.6262 3.79926C10.1475 3.97322 8.98428 5.14402 8.81986 6.62373L8.7971 6.82863C8.76889 7.08252 8.76889 7.33875 8.7971 7.59263L9.1459 10.7318C11.0467 10.6099 12.9534 10.6099 14.8542 10.7318L15.203 7.59263C15.2312 7.33874 15.2312 7.08252 15.203 6.82863L15.1802 6.62373C15.0158 5.14402 13.8525 3.97322 12.3739 3.79926ZM12.0001 14.5001C11.1716 14.5001 10.5001 15.1717 10.5001 16.0001C10.5001 16.8285 11.1716 17.5001 12.0001 17.5001C12.8285 17.5001 13.5001 16.8285 13.5001 16.0001C13.5001 15.1717 12.8285 14.5001 12.0001 14.5001Z" fill="#252525"/>
                </svg>
              </div>
              <input
                type={showNewPassword ? "text" : "password"}
                id="new-password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                className="w-full px-3 pl-10 py-3 border border-[#252525] rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-[#FFE135] pr-10 placeholder:text-sm"
                placeholder="Enter new Password"
                required
              />
              <button
                type="button"
                className="absolute inset-y-0 right-0 pr-3 flex items-center"
                onClick={() => setShowNewPassword(!showNewPassword)}
              >
                {showNewPassword ? (
                  <Eye className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                ) : (
                  <EyeOff className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                )}
              </button>
            </div>
          </div>

          <div className='mb-6'>
            <label
              htmlFor="confirm-password"
              className="block text-sm font-semibold text-gray-700 mb-2"
            >
             Confirm Password
            </label>
            <div className="relative">
              <div className='absolute top-3 ml-2 z-10'>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M7.30627 7.75828L7.64933 10.8458L6.95511 10.9013C5.98701 10.9785 5.19651 11.7063 5.03958 12.6647C4.67789 14.8736 4.67789 17.1266 5.03958 19.3355C5.19651 20.2939 5.98701 21.0217 6.95511 21.0989L8.45124 21.2184C10.8134 21.407 13.1868 21.407 15.5489 21.2184L17.0451 21.0989C18.0132 21.0217 18.8037 20.2939 18.9606 19.3355C19.3223 17.1266 19.3223 14.8736 18.9606 12.6647C18.8037 11.7063 18.0132 10.9785 17.0451 10.9013L16.3507 10.8458L16.6938 7.75828C16.7342 7.3943 16.7342 7.02696 16.6938 6.66298L16.671 6.45809C16.4295 4.2847 14.7209 2.56504 12.5492 2.30953C12.1843 2.26661 11.8157 2.26661 11.4509 2.30953C9.27913 2.56504 7.57053 4.2847 7.32904 6.45809L7.30627 6.66298C7.26583 7.02696 7.26583 7.3943 7.30627 7.75828ZM12.3739 3.79926C12.1255 3.77004 11.8746 3.77004 11.6262 3.79926C10.1475 3.97322 8.98428 5.14402 8.81986 6.62373L8.7971 6.82863C8.76889 7.08252 8.76889 7.33875 8.7971 7.59263L9.1459 10.7318C11.0467 10.6099 12.9534 10.6099 14.8542 10.7318L15.203 7.59263C15.2312 7.33874 15.2312 7.08252 15.203 6.82863L15.1802 6.62373C15.0158 5.14402 13.8525 3.97322 12.3739 3.79926ZM12.0001 14.5001C11.1716 14.5001 10.5001 15.1717 10.5001 16.0001C10.5001 16.8285 11.1716 17.5001 12.0001 17.5001C12.8285 17.5001 13.5001 16.8285 13.5001 16.0001C13.5001 15.1717 12.8285 14.5001 12.0001 14.5001Z" fill="#252525"/>
                </svg>
              </div>
              <input
                type={showConfirmPassword ? "text" : "password"}
                id="confirm-password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full px-3 pl-10 py-3 border border-[#252525] rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-[#FFE135] pr-10 placeholder:text-sm"
                placeholder="Confirm New Password"
                required
              />
              <button
                type="button"
                className="absolute inset-y-0 right-0 pr-3 flex items-center"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                {showConfirmPassword ? (
                  <Eye className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                ) : (
                  <EyeOff className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                )}
              </button>
            </div>
          </div>

          <div className='mt-3 mb-6 mx-1 text-sm opacity-65'>
            <Link href="/dashboard/settings/forget-password" className="underline cursor-pointer hover:text-gray-900">
              Forget password?
            </Link>
          </div>

          <button
            type="submit"
            className="w-full bg-[#FFE135] hover:bg-[#ffd700] text-black font-semibold py-3 rounded-md transition-colors duration-200"
          >
            Update Password
          </button>
        </form>
      </div>
    </div>
  )
}

export default ChangePassword
