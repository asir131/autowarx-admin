"use client";
import React from "react";
import { MoveLeft } from "lucide-react";
import { useParams } from "next/navigation";
import Image from "next/image";
import img from "@/assets/vendor/profile.png";
import car from "@/assets/vendor/car.png"
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

      <div className="w-[350px] lg:w-[800px] bg-white ml-6 mt-5 p-8 rounded-lg">
        <div className="lg:flex justify-between">
          <div>
            <p className="text-sm opacity-65 mb-5">Product Information</p>
            <p>Name: Abdur Rahman</p>
            <p>Category: Sedan</p>
            <p>User ID: USR-#888</p>
            <p>Created: 6 April 2023</p>
          </div>
          <div className="leading-relaxed">
            <p className="text-sm opacity-60 mb-5">Business Information</p>
            <Image src={img} width={80} height={100} alt="" />
            <p className="mt-4">Business Name: Fresh Market</p>
            <p>Business Category: Hybrid</p>
            <p>Address: New York, America</p>
            <p>Business Hour: 10 AM-11 PM </p>
            <p>Phone Number: 01322424</p>
          </div>
        </div>
        <div className="border-b pb-3 mt-10">
          <div>Photo</div>
          
        </div>
        <div>
            <div className="mt-5 grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
                <Image className="rounded-xl" src={car} height={100} width={150} alt=""/>
                <Image className="rounded-xl" src={car} height={100} width={150} alt=""/>
                <Image className="rounded-xl" src={car} height={100} width={150} alt=""/>
                <Image className="rounded-xl" src={car} height={100} width={150} alt=""/>
            </div>
            <div className="lg:flex justify-between w-4/5 mt-5">
                <div>
                    <p className="font-bold">Overview</p>
                    <p>Exterior Color: Blue</p>
                    <p>Interior Color: Gray</p>
                    <p>Vin: 5TELU42N87Z328956</p>
                    <p>Mileage: 54,456</p>
                    <p>Stock: 328956</p>
                    <p>Drive Type: 4WD</p>
                    <p>Engine: 4L V6</p>
                    <p>Transmission: Manual</p>
                    <p>Fuel: Manual</p>
                    <p>MPG Highway: 20 MPG</p>
                    <p>MPG City: 16 MPG</p>
                </div>
                <div>
                    <p className="font-bold">Features</p>
                    <p>Exterior: Upgrade Paint</p>
                    <p>Vehicle Segment: Compact Pickup</p>
                    <p>Infotainment: Premium Speakers</p>
                    <p>Safety & Driver Assist: Brake Assist</p>
                </div>
            </div>
        </div>
        <div className="flex gap-3 justify-end mt-10">
            
            <button className="bg-[#FFFCEB] text-[#F93827] border border-[#F93827] px-5 py-2 font-semibold rounded-lg">Delete</button>
            <button className="bg-[#FFE135] px-5 py-2 font-semibold rounded-lg">Accept</button>
        </div>
      </div>
    </div>
  );
};

export default navigated;
