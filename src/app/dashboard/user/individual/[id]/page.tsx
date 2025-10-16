"use client";
import React from "react";
import { MoveLeft } from "lucide-react";
import { useParams } from "next/navigation";
import Image from "next/image";
import img from "@/assets/vendor/profile.png";
const navigated = () => {
  const params = useParams();
  const userId = params.id;
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
            Back
          </button>
        </div>
      </div>
      <div className="lg:flex ml-8  border-b-2 pb-3 justify-between  lg:mx-6">
        <div className="font-bold text-2xl flex">
          <h1>User Id </h1> #{userId}
        </div>
        <div>
          <p>Created 21 April, 2025 14:30 GMT</p>
        </div>
      </div>

      <div className="w-[350px] md:w-[500px] lg:w-[800px] bg-white ml-6 mt-5 p-8 rounded-lg">
        <div className="lg:flex justify-between">
          
          <div className="leading-relaxed">
            
            <Image src={img} width={80} height={100} alt="" />
            <p className="mt-4 opacity-55">Name</p>
            <p className="font-semibold">Henry Cavil</p>
            <p className="opacity-55">Email</p>
            <p className="font-semibold">example@gmail.com</p>
            <p className="opacity-55">Phone Number </p>
            <p className="font-semibold">+1 (232)123-234</p>
            <p className="opacity-55">Role</p>
            <p className="font-semibold">Buyer</p>
          </div>
        </div>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full mt-5 justify-around">
            <div className=" text-center w-50 border borer-[#D2D2D2] rounded-md p-5 grid gap-5">
                    <h1>Total Product</h1>
                    <p className="font-semibold text-2xl">120</p>
            </div>
            <div className=" text-center w-50 border borer-[#D2D2D2] rounded-md p-5 grid gap-5">
                    <h1>Total Buy</h1>
                    <p className="font-semibold text-2xl">$60000</p>
            </div>
            <div className=" text-center w-50 border borer-[#D2D2D2] rounded-md p-2 py-5  grid gap-5">
                    <h1>Completed Order</h1>
                    <p className="font-semibold text-2xl">12</p>
            </div>
            


        </div>
        <div className="border-b pb-3 mt-10">
          <div>Promo</div>
          <div className="flex items-center gap-3">
            <div>
              <svg
                width="36"
                height="36"
                viewBox="0 0 36 36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.25 16.5C15.4926 16.5 16.5 15.4926 16.5 14.25C16.5 13.0074 15.4926 12 14.25 12C13.0074 12 12 13.0074 12 14.25C12 15.4926 13.0074 16.5 14.25 16.5Z"
                  fill="#252525"
                />
                <path
                  d="M24 21.75C24 22.9926 22.9926 24 21.75 24C20.5074 24 19.5 22.9926 19.5 21.75C19.5 20.5074 20.5074 19.5 21.75 19.5C22.9926 19.5 24 20.5074 24 21.75Z"
                  fill="#252525"
                />
                <path
                  d="M22.0607 16.0607C22.6464 15.4749 22.6464 14.5251 22.0607 13.9393C21.4749 13.3536 20.5251 13.3536 19.9393 13.9393L13.9393 19.9393C13.3536 20.5251 13.3536 21.4749 13.9393 22.0607C14.5251 22.6464 15.4749 22.6464 16.0607 22.0607L22.0607 16.0607Z"
                  fill="#252525"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M6 6C4.34315 6 3 7.34315 3 9V13.7575C3 14.1553 3.15804 14.5368 3.43934 14.8181L4.4999 15.8787C5.67148 17.0503 5.67148 18.9497 4.4999 20.1213L3.43934 21.1819C3.15804 21.4632 3 21.8447 3 22.2425V27C3 28.6569 4.34314 30 6 30L30 30C31.6569 30 33 28.6569 33 27V22.2425C33 21.8287 32.8299 21.4426 32.5439 21.1653L31.4999 20.1213C30.3283 18.9497 30.3283 17.0503 31.4999 15.8787L32.5439 14.8347C32.8299 14.5574 33 14.1713 33 13.7575V9C33 7.34315 31.6569 6 30 6H6ZM29.3786 22.2426L30 22.8641V27H6V22.8639L6.62122 22.2426C8.96437 19.8995 8.96437 16.1005 6.62122 13.7574L6 13.1361V9L30 9V13.1359L29.3786 13.7574C27.0354 16.1005 27.0354 19.8995 29.3786 22.2426Z"
                  fill="#252525"
                />
              </svg>
            </div>
            <div>
              <p>20% OFF</p>
              <p>Promo: GOOD20</p>
            </div>
          </div>
        </div>
        <div>
            <h1 className="font-semibold">Store Rating</h1>
            <h1>4.3⭐ (300+) <span className="text-[#FFE135]">See Reviews</span></h1>
        </div>
        <div className="flex gap-3 justify-end mt-10">
           
            <button className="bg-[#FFFCEB] text-[#F93827] border border-[#F93827] px-5 py-2 font-semibold rounded-lg">Accept Vendor</button>
        </div>
      </div>
    </div>
  );
};

export default navigated;
