"use client";

import { useState } from "react";
import { MoveLeft } from "lucide-react";
import { useRouter } from 'next/navigation';

interface Product {
  id: number;
  name: string;
  productId: string;
  category: string;
  bidId: string;
  offerValue: string;
  date: string;
  image: string;
  hasAccept: boolean;
}

const productNames = [
  "2020 Honda Civic LX",
  "2021 Toyota Camry SE",
  "2019 Ford Mustang GT",
  "2022 Tesla Model 3",
  "2020 BMW 3 Series",
  "2021 Mercedes-Benz C-Class",
];
const categories = ["Sedan", "SUV", "Truck", "Coupe"];

const generateProductData = (): Product[] => {
  return Array.from({ length: 50 }, (_, i) => ({
    id: i + 1,
    name: productNames[i % productNames.length],
    productId: `#${434232 + i}`,
    category: categories[i % categories.length],
    bidId: `#${434232 + i}`,
    offerValue: "$200",
    date: "6 April,2025",
    image:
      "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=80&h=60&fit=crop",
    hasAccept: true,
  }));
};

export default function Running() {
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("Newest");
  const [selectedCategory, setSelectedCategory] =
    useState("Select Category");
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [productData, setProductData] = useState<Product[]>(
    generateProductData()
  );

  const sortOptions = ["Newest", "Oldest", "Name: A to Z", "Name: Z to A"];
  const categoryOptions = ["Select Category", "Sedan", "SUV", "Truck", "Coupe"];

  const filteredData = productData.filter((product) => {
    const matchesSearch =
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.productId.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.bidId.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesCategory =
      selectedCategory === "Select Category" ||
      product.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentData = filteredData.slice(startIndex, endIndex);

  const goToPage = (page: number) => {
    if (page >= 1 && page <= totalPages) setCurrentPage(page);
  };

  const handleApplyFilter = () => setCurrentPage(1);

  const handleViewProduct = (productId: number) => {
    router.push(`/dashboard/auction/running/${productId}`);
  };

  return (
    <div className="min-h-screen">
      <div className="p-4 sm:p-6 flex flex-col gap-6">
        {/* Header */}
        <div className="flex items-center gap-2">
          <MoveLeft
            className="cursor-pointer"
            onClick={() => window.history.back()}
          />
          <button
            onClick={() => window.history.back()}
            className="px-2 py-2 rounded-3xl font-medium"
          >
            Auction
          </button>
        </div>

        {/* Filters */}
        <div className="flex flex-col md:flex-row bg-white p-4 sm:p-5 md:py-8 gap-4 md:gap-5 rounded-lg">
          <div className="relative flex-1 min-w-[200px]">
            <svg
              className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            <input
              type="text"
              placeholder="Search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#FFE135] focus:border-transparent"
            />
          </div>

          <div className="relative flex-1 min-w-[200px]">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="w-full opacity-80 px-4 py-2.5 border border-gray-300 rounded appearance-none bg-white focus:outline-none focus:ring-2 focus:ring-[#FFE135]"
            >
              {sortOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
            <svg
              className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>

          <button
            onClick={handleApplyFilter}
            className="px-6 py-2.5 bg-[#FFFCEB] border-2 border-[#FFE135] rounded-full font-medium hover:bg-[#FFE135] transition-colors w-full md:w-auto"
          >
            Apply Filter
          </button>
        </div>

        {/* Table */}
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm min-w-[800px]">
              <thead className="bg-white border-b">
                <tr>
                  {[
                    "Product Name",
                    "Product ID",
                    "Category",
                    "Bid ID",
                    "Offer Value",
                    "Date",
                    "Action",
                  ].map((h) => (
                    <th
                      key={h}
                      className="px-4 sm:px-6 py-4 text-left font-medium text-gray-600"
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {currentData.map((product) => (
                  <tr key={product.id} className="hover:bg-gray-50">
                    <td className="px-4 sm:px-6 py-3">
                      <div className="flex items-center gap-3">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-12 h-9 sm:w-14 sm:h-10 rounded object-cover"
                        />
                        <span className="font-medium text-gray-900">
                          {product.name}
                        </span>
                      </div>
                    </td>
                    <td className="px-4 sm:px-6 py-3">{product.productId}</td>
                    <td className="px-4 sm:px-6 py-3">{product.category}</td>
                    <td className="px-4 sm:px-6 py-3">{product.bidId}</td>
                    <td className="px-4 sm:px-6 py-3">{product.offerValue}</td>
                    <td className="px-4 sm:px-6 py-3">{product.date}</td>
                    <td className="px-4 sm:px-6 py-3">
                      <div className="flex flex-wrap gap-2">
                        {/* Only View button with consistent styling */}
                        <button
                          onClick={() => handleViewProduct(product.id)}
                          className="px-4 py-1.5 bg-[#FFE135] text-gray-900 hover:bg-[#ffd700] text-sm rounded transition-colors"
                        >
                          View
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="border-t border-gray-200 px-4 sm:px-6 py-4 flex flex-col lg:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <span>Showing</span>
              <select
                value={itemsPerPage}
                onChange={(e) => {
                  setItemsPerPage(Number(e.target.value));
                  setCurrentPage(1);
                }}
                className="border border-gray-300 rounded px-3 py-1 focus:outline-none focus:ring-2 focus:ring-[#FFE135]"
              >
                {[10, 20, 50].map((n) => (
                  <option key={n} value={n}>
                    {n}
                  </option>
                ))}
              </select>
              <span>of {filteredData.length}</span>
            </div>

            <div className="flex flex-wrap justify-center items-center gap-1">
              <button
                onClick={() => goToPage(currentPage - 1)}
                disabled={currentPage === 1}
                className="px-3 py-1 text-gray-600 bg-gray-100 hover:bg-gray-200 rounded disabled:opacity-50"
              >
                &lt;
              </button>
              {[...Array(Math.min(5, totalPages))].map((_, i) => {
                const pageNum = i + 1;
                return (
                  <button
                    key={pageNum}
                    onClick={() => goToPage(pageNum)}
                    className={`px-3 py-1 rounded ${
                      currentPage === pageNum
                        ? "bg-[#FFE135] text-gray-900 font-medium"
                        : "text-gray-600 bg-gray-100 hover:bg-gray-200"
                    }`}
                  >
                    {pageNum}
                  </button>
                );
              })}
              <button
                onClick={() => goToPage(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="px-3 py-1 text-gray-600 bg-gray-100 hover:bg-gray-200 rounded disabled:opacity-50"
              >
                &gt;
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}