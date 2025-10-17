"use client"
import { MoveLeft } from 'lucide-react';
import React from "react";
import { ChevronRight } from 'lucide-react';
import Link from 'next/link';
const Income = () => {
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
      <div className='mx-6'>
        <Link href="/dashboard/income/ads" style={{ boxShadow: '0px 0px 8px 4px rgba(1, 1, 1, 0.1)' }} className='border flex items-center justify-between px-5 py-4 rounded-lg  bg-white mb-5  border-[#FFE135]'>
          <p>Ads </p><ChevronRight />
        </Link>
        <Link href="/dashboard/income/package" className='border flex items-center justify-between px-5 py-4 rounded-lg bg-[#FFFCEB] '>
          <p>Package </p><ChevronRight />
        </Link>
      </div>
    </div>
  );
};

export default Income;
