"use client";

import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { useState } from "react";
import type React from "react";
import Settings from "@/components/Admin/Settings/Settings";
import { ChevronRight, MoveLeft } from "lucide-react";
import Link from "next/link";

const Setting: React.FC = () => {
  const [activeTab, setActiveTab] = useState("myDetails");

  const linkData = [
    { href: "/dashboard/settings/personal-information", text: "Personal Information" },
    { href: "/dashboard/settings/change-password", text: "Change Password" },
    { href: "/dashboard/income/package", text: "Privacy Policy" },
    { href: "/dashboard/income/package", text: "Terms and Condition" },
    { href: "/dashboard/income/package", text: "About us" },
  ];

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
            Settings
          </button>
        </div>
      </div>
      <div className='mx-6'>
        {linkData.map((link, index) => (
          <Link
            key={index}
            href={link.href}
            className="border flex items-center justify-between px-5 py-4 rounded-lg mb-5 bg-[#FFFCEB] border-gray-200 hover:bg-white hover:border-[#FFE135] hover:shadow-[0px_0px_8px_4px_rgba(1,1,1,0.1)] transition-all duration-200"
          >
            <p>{link.text}</p>
            <ChevronRight />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Setting;