"use client";
import { MoveLeft } from "lucide-react";
import React from "react";
import banner from "@/assets/vendor/image.png";
import Image from "next/image";
const Overview = () => {
  return (
    <div className="min-h-screen">
      <div className="p-4 sm:p-6 flex flex-col gap-6">
        <div className="flex items-center gap-2">
          <MoveLeft
            className="cursor-pointer"
            onClick={() => window.history.back()}
          />
          <button
            onClick={() => window.history.back()}
            className="px-2 py-2 rounded-3xl font-medium"
          >
            Ads
          </button>
        </div>
      </div>

      <div className="bg-white rounded-sm p-10 lg:w-3/6 mx-6">
        <div className="border-b pb-2">
            <p className="font-semibold">Ads</p>
        </div>
        <div className="mt-5">
            <Image src={banner} width={800} height={100} alt="" />
        </div>
        <div className="mt-5 leading-8">
            <p className="font-semibold">Overview</p>
            <p>Url: Http://dsvdhgsfsfbssdsgdshgfshgf</p>
            <p>Area: Washington dc</p>
            <p>Duration: 7 days</p>
        </div>
        <div className="flex justify-end mt-5">
            <button className="bg-[#FFFCEB] border border-[#F93827] px-5 py-2 rounded-lg text-[#F93827] font-semibold">Delete Ads</button>
        </div>
      </div>
    </div>
  );
};

export default Overview;
