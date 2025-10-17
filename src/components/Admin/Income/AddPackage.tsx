"use client";
import { MoveLeft, Plus } from "lucide-react";
import React, { useState, useRef, ChangeEvent } from "react";

const AddPackage: React.FC = () => {
  const [file, setFile] = useState<string | null>(null);
  const [area, setArea] = useState<string>("All");
  const [duration, setDuration] = useState<string>("7 days");
  const fileInputRef = useRef<HTMLInputElement | null>(null); // Reference for the file input

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      setFile(URL.createObjectURL(selectedFile));
    }
  };

  const handleDivClick = () => {
    fileInputRef.current?.click(); // Trigger the file input click if ref is set
  };

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
            Package 
          </button>
        </div>
      </div>
      <div className="bg-white mx-6 rounded-lg p-5 lg:p-20 flex items-center justify-center">
        <div className="flex flex-col justify-start">
          <div>
            <p className="font-medium text-3xl">Create Package </p>
            <p className="opacity-40 font-semibold ml-1 my-3">
              Enter package info to publish
            </p>
          </div>
          <div
            onClick={handleDivClick}  // Trigger file input when this div is clicked
            className="bg-[#F6F7F8] cursor-pointer lg:w-[600px] rounded-xl border border-[#9194A9] border-dashed lg:px-20 py-2 flex flex-col text-center items-center justify-center"
          >
            <div className="my-5">
              <svg
                width="24"
                height="16"
                viewBox="0 0 24 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M2.99902 9.33105C3.55131 9.33105 3.99902 9.62953 3.99902 9.99772V12.6644C3.99902 12.8412 4.10438 13.0108 4.29192 13.1358C4.47945 13.2608 4.73381 13.3311 4.99902 13.3311H18.999C19.2642 13.3311 19.5186 13.2608 19.7061 13.1358C19.8937 13.0108 19.999 12.8412 19.999 12.6644V9.99772C19.999 9.62953 20.4467 9.33105 20.999 9.33105C21.5513 9.33105 21.999 9.62953 21.999 9.99772V12.6644C21.999 13.1948 21.6829 13.7035 21.1203 14.0786C20.5577 14.4537 19.7947 14.6644 18.999 14.6644H4.99902C4.20337 14.6644 3.44031 14.4537 2.8777 14.0786C2.31509 13.7035 1.99902 13.1948 1.99902 12.6644V9.99772C1.99902 9.62953 2.44674 9.33105 2.99902 9.33105Z"
                  fill="#FFE135"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M11.2924 1.52729C11.6829 1.26694 12.3161 1.26694 12.7066 1.52729L17.7066 4.86063C18.0971 5.12098 18.0971 5.54309 17.7066 5.80344C17.3161 6.06379 16.6829 6.06379 16.2924 5.80344L11.9995 2.94151L7.70662 5.80344C7.31609 6.06379 6.68293 6.06379 6.2924 5.80344C5.90188 5.54309 5.90188 5.12098 6.2924 4.86063L11.2924 1.52729Z"
                  fill="#FFE135"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M11.9995 1.33203C12.5518 1.33203 12.9995 1.63051 12.9995 1.9987V9.9987C12.9995 10.3669 12.5518 10.6654 11.9995 10.6654C11.4472 10.6654 10.9995 10.3669 10.9995 9.9987V1.9987C10.9995 1.63051 11.4472 1.33203 11.9995 1.33203Z"
                  fill="#FFE135"
                />
              </svg>
            </div>

            <input
              type="file"
              className="hidden"
              id="file-upload"
              ref={fileInputRef} // Attach the ref to the file input
              onChange={handleFileChange}
            />
            <label htmlFor="file-upload" className="cursor-pointer">
              {file ? (
                <img
                  src={file}
                  alt="Uploaded file"
                  className="w-24 h-24 object-cover mx-auto"
                />
              ) : (
                <p>Click to upload or drag and drop</p>
              )}
            </label>
            <p>SVG, PNG, JPG or GIF</p>
            <p className="my-2">(max, 800 X 800px)</p>
          </div>

          <div>
            <div className="my-3">
              <label className="font-medium ml-1" htmlFor="url">
                Url
              </label>
              <div className="border border-[#9194A9] rounded-xl px-5 py-3">
                <input
                  id="url"
                  className="outline-none w-full"
                  type="text"
                  placeholder="Enter URL of the banner of ads if any"
                />
              </div>
            </div>

            <div className="my-3 flex gap-5 ">
              <div className="flex-1">
                <label className="font-medium ml-1" htmlFor="area">
                Title
              </label>
              <div className="border border-[#9194A9] rounded-xl px-5 py-3">
                <input
                  id="url"
                  className="outline-none w-full"
                  type="text"
                  placeholder="Enter title of the package"
                />
              </div>
              </div>
              <div className="flex-1">
                <label className="font-medium ml-1" htmlFor="area">
                Price
              </label>
              <div className="border border-[#9194A9] rounded-xl px-5 py-3">
                <input
                  id="url"
                  className="outline-none w-full"
                  type="text"
                  placeholder="Enter price for per month"
                />
              </div>
              </div>
              
            </div>

            <div className="my-3 flex gap-5 items-center">
              <div className="flex-1">
                <label className="font-medium ml-1" htmlFor="area">
                Facility
              </label>
              <div className="border border-[#9194A9] rounded-xl px-5 py-3">
                <input
                  id="url"
                  className="outline-none w-full"
                  type="text"
                  placeholder="Enter facility"
                />
              </div>
              </div>
              <div className="flex mt-5">
                <button className="flex items-center gap-2 border border-[#9194A9] rounded-xl px-5 py-3 ">
                <Plus />Add Facility
              </button>
              </div>
            </div>

            <div className="flex gap-5 mt-5">
              <button className="bg-[#FFFCEB] flex-1 py-3 rounded-lg border border-[#FFE135]">
                Cancel
              </button>
              <button className="bg-[#FFE135] rounded-lg flex-1">Publish</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddPackage;
