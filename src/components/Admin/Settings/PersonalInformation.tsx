"use client";
import { MoveLeft } from "lucide-react";
import React from "react";
import img from "@/assets/vendor/profile.png"
import Image from "next/image";
const PersonalInformation = () => {
    const edit = <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="17" cy="17" r="17" fill="#FFE135"/>
<path d="M10.7891 24.2362H12.2033L21.517 14.9225L20.1028 13.5083L10.7891 22.822V24.2362ZM26.7891 26.2362H8.78906V21.9935L22.2241 8.55852C22.6147 8.168 23.2478 8.168 23.6383 8.55852L26.4668 11.3869C26.8573 11.7775 26.8573 12.4106 26.4668 12.8012L15.0317 24.2362H26.7891V26.2362ZM21.517 12.0941L22.9312 13.5083L24.3454 12.0941L22.9312 10.6798L21.517 12.0941Z" fill="white"/>
</svg>

  return (
    <div className="min-h-screen ">
      <div className="p-4 sm:p-6 flex flex-col gap-6">
        {/* Header */}
        <div className="flex items-center gap-2">
          <MoveLeft />
          <button
            onClick={() => window.history.back()}
            className="px-2 py-2 rounded-3xl font-medium"
          >
            Personal Information
          </button>
        </div>
      </div>
      <div className="bg-white mx-5 p-10">
        <div className="flex items-center gap-5">
            <div className="relative ">
                    <Image src={img} width={100} height={100} alt="" />
                    <p className="absolute right-0 bottom-1">{edit}</p>
            </div>
            <div>
                <h1 className="font-medium text-3xl">Nana vai</h1>
                <p className="mt-5">Admin</p>

            </div>
        </div>

        
        <div className="mt-5">
            <div>
                <label htmlFor="" className="">Full name</label>
                <div className="border border-[#82868C] rounded-lg px-5 py-3 mt-2">
                    <input type="text" placeholder="Abdur Khan" />
                </div>
            </div>
            <div  className="mt-5">
                <label htmlFor="" className="">Email</label>
                <div className="border border-[#82868C] rounded-lg px-5 py-3 mt-2">
                    <input type="text" placeholder="emily@gmail.com" />
                </div>
            </div>
            <div className="mt-5">
                <label htmlFor="" className="">Contact number </label>
                <div className="border border-[#82868C] rounded-lg px-5 py-3 mt-2">
                    <input type="text" placeholder="+99-01846875456" />
                </div>
            </div>
            <div className="flex items-center bg-[#FFE135] text-center justify-center py-2 mt-6 rounded-lg">
                <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.75 18.25H8.81875L16.15 10.9188L15.0813 9.85L7.75 17.1813V18.25ZM6.25 19.75V16.5625L16.15 6.68125C16.3 6.54375 16.4656 6.4375 16.6469 6.3625C16.8281 6.2875 17.0188 6.25 17.2188 6.25C17.4188 6.25 17.6125 6.2875 17.8 6.3625C17.9875 6.4375 18.15 6.55 18.2875 6.7L19.3188 7.75C19.4688 7.8875 19.5781 8.05 19.6469 8.2375C19.7156 8.425 19.75 8.6125 19.75 8.8C19.75 9 19.7156 9.19063 19.6469 9.37188C19.5781 9.55313 19.4688 9.71875 19.3188 9.86875L9.4375 19.75H6.25ZM15.6063 10.3938L15.0813 9.85L16.15 10.9188L15.6063 10.3938Z" fill="#2B2B2B"/>
</svg>

                Edit
            </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalInformation;
