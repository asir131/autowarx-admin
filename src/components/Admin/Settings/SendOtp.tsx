"use client"
import { MoveLeft } from 'lucide-react'
import React, { useState, useRef } from 'react'
import Link from "next/link"

const VerifyOtp = () => {
  const [otp, setOtp] = useState<string[]>(["", "", "", "", "", ""])
  const inputRefs = useRef<(HTMLInputElement | null)[]>([])

  const handleChange = (index: number, value: string) => {
    if (value.length > 1) {
      value = value.slice(0, 1)
    }

    if (!/^\d*$/.test(value)) {
      return
    }

    const newOtp = [...otp]
    newOtp[index] = value
    setOtp(newOtp)

    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus()
    }
  }

  const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus()
    }
  }

  const handlePaste = (e: React.ClipboardEvent) => {
    e.preventDefault()
    const pastedData = e.clipboardData.getData('text').slice(0, 6)
    if (!/^\d+$/.test(pastedData)) {
      return
    }

    const newOtp = [...otp]
    pastedData.split('').forEach((char, index) => {
      if (index < 6) {
        newOtp[index] = char
      }
    })
    setOtp(newOtp)

    const nextIndex = Math.min(pastedData.length, 5)
    inputRefs.current[nextIndex]?.focus()
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("OTP:", otp.join(""))
  }

  const handleResend = () => {
    console.log("Resending OTP...")
  }

  return (
    <div className="min-h-screen">
      <div className="p-4 sm:p-6 flex flex-col gap-6">
        <div className="flex items-center gap-2">
          <MoveLeft className="cursor-pointer" onClick={() => window.history.back()} />
          <button
            onClick={() => window.history.back()}
            className="px-2 py-2 font-medium text-sm sm:text-base"
          >
            Setting
          </button>
        </div>
      </div>

      <div className='bg-white flex flex-col items-center justify-center mx-4 sm:mx-5 py-12 sm:py-20 px-4 sm:px-8 lg:px-20'>
        <div className='w-full max-w-md sm:max-w-2xl'>
          <h1 className='font-medium text-2xl sm:text-[32px] mb-4 text-center sm:text-left'>
            Verify OTP
          </h1>
          <p className='text-gray-500 text-sm mb-6 sm:mb-8 text-center sm:text-left'>
            We'll send a verification code to your email. Check your inbox and enter the code here.
          </p>

          <form onSubmit={handleSubmit}>
            <div className='flex gap-2 sm:gap-3 md:gap-4 mb-6 sm:mb-8 justify-center sm:justify-center'>
              {otp.map((digit, index) => (
                <input
                  key={index}
                  ref={(el) => {
                    inputRefs.current[index] = el
                  }}
                  type="text"
                  inputMode="numeric"
                  maxLength={1}
                  value={digit}
                  onChange={(e) => handleChange(index, e.target.value)}
                  onKeyDown={(e) => handleKeyDown(index, e)}
                  onPaste={handlePaste}
                  className="w-6 h-6 sm:w-10 sm:h-10 md:w-24 md:h-24 text-center text-xl sm:text-2xl font-medium border-b-2 border-gray-300 focus:border-[#FFE135] focus:outline-none transition-colors"
                />
              ))}
            </div>

            <button
              type="submit"
              className="w-full bg-[#FFE135] hover:bg-[#ffd700] text-black font-semibold py-3 rounded-md transition-colors duration-200 mb-6 text-sm sm:text-base"
            >
              Verify
            </button>

            <div className='flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-0 text-sm'>
              <span className='text-gray-600 text-center sm:text-left'>Didn't receive code?</span>
              <button
                type="button"
                onClick={handleResend}
                className='text-black font-medium hover:underline text-sm sm:text-base'
              >
                Resend
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default VerifyOtp