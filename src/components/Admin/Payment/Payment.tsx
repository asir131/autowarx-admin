"use client";
import { useState } from "react";
import { MoveLeft, Download } from "lucide-react";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface Withdrawal {
  id: number;
  name: string;
  withdrawId: string;
  orderValue: string;
  date: string;
  image: string;
  isPaid: boolean;
}

// Extended interface for detailed withdrawal info
interface WithdrawalDetails {
  bankName: string;
  accountHolderName: string;
  accountNumber: string;
  amountWithdraw: string;
  withdraw: string;
  additionalNote: string;
}

const generateWithdrawalData = (): Withdrawal[] => {
  return Array.from({ length: 50 }, (_, i) => ({
    id: i + 1,
    name: "Abdur Khan",
    withdrawId: `#${434232 + i}`,
    orderValue: "$200",
    date: "6 April,2025",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop",
    isPaid: i % 3 === 0,
  }));
};

// Function to generate detailed withdrawal information
const generateWithdrawalDetails = (id: number): WithdrawalDetails => {
  return {
    bankName: "Islami Bank",
    accountHolderName: "Abdur Khan",
    accountNumber: "21702401",
    amountWithdraw: "5566",
    withdraw: "20005",
    additionalNote: "Hi please give me asp",
  };
};

const cardData = [
  {
    value: "$12002.00",
    label: "Total Earnings",
  },
  {
    value: "234",
    label: "Available Balance",
  },
  {
    value: "234",
    label: "Total Completed Order",
  },
  {
    value: "$10000.00",
    label: "Withdraw",
  },
];

export default function Payment() {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [withdrawalData, setWithdrawalData] = useState<Withdrawal[]>(
    generateWithdrawalData()
  );
  const [activeTab, setActiveTab] = useState<"completed" | "pending">("pending");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);
  const [selectedWithdrawal, setSelectedWithdrawal] = useState<WithdrawalDetails | null>(null);
  const [withdrawalForm, setWithdrawalForm] = useState({
    bankName: "",
    accountHolderName: "",
    accountNumber: "",
    amount: "",
    notes: "",
  });

  const filteredData = withdrawalData.filter((item) => {
    if (activeTab === "completed") {
      return item.isPaid;
    } else {
      return !item.isPaid;
    }
  });

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentData = filteredData.slice(startIndex, endIndex);

  const goToPage = (page: number) => {
    if (page >= 1 && page <= totalPages) setCurrentPage(page);
  };

  const handleMarkAsPaid = (id: number) => {
    setWithdrawalData((prev) =>
      prev.map((item) => (item.id === id ? { ...item, isPaid: true } : item))
    );
  };

  const handleView = (id: number) => {
    const details = generateWithdrawalDetails(id);
    setSelectedWithdrawal(details);
    setIsViewModalOpen(true);
  };

  const handleWithdrawalSubmit = () => {
    console.log("Withdrawal request:", withdrawalForm);
    setIsModalOpen(false);
    setWithdrawalForm({
      bankName: "",
      accountHolderName: "",
      accountNumber: "",
      amount: "",
      notes: "",
    });
  };

  const handleDownloadInvoice = () => {
    console.log("Downloading invoice for:", selectedWithdrawal);
    // Implement download functionality here
  };

  return (
    <div className="min-h-screen ">
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
            Back
          </button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {cardData.map((card, index) => (
            <Card
              key={index}
              className="border border-[#B1B1B1] rounded-lg py-8 text-center"
            >
              <CardHeader className="pb-2">
                <CardTitle className="text-3xl text-gray-900">
                  {card.value}
                </CardTitle>
                <CardDescription className="opacity-55 text-lg text-gray-500">
                  {card.label}
                </CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <button 
              onClick={() => setIsModalOpen(true)}
              className="bg-[#FFFCEB] border border-[#FFE135] px-5 py-2 rounded-lg font-semibold hover:bg-[#FFE135] transition-colors">
              + Request Withdraw
            </button>
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => {
                setActiveTab("completed");
                setCurrentPage(1);
              }}
              className={`border px-5 py-2 rounded-full font-semibold transition-colors ${
                activeTab === "completed"
                  ? "bg-[#FFE135] hover:bg-[#ffd700]"
                  : "bg-[#FFFCEB] border-[#FFE135] hover:bg-[#FFE135]"
              }`}
            >
              Completed Withdraw
            </button>
            <button
              onClick={() => {
                setActiveTab("pending");
                setCurrentPage(1);
              }}
              className={`border px-5 py-2 rounded-full font-semibold transition-colors ${
                activeTab === "pending"
                  ? "bg-[#FFE135] hover:bg-[#ffd700]"
                  : "bg-[#FFFCEB] border-[#FFE135] hover:bg-[#FFE135]"
              }`}
            >
              Pending
            </button>
          </div>
        </div>

        {/* Table */}
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm min-w-[800px]">
              <thead className="bg-white border-b">
                <tr>
                  {["Name", "Withdraw ID", "Order Value", "Date", "Action"].map((h) => (
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
                {currentData.map((item) => (
                  <tr key={item.id} className="hover:bg-gray-50">
                    <td className="px-4 sm:px-6 py-3">
                      <div className="flex items-center gap-3">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-10 h-10 rounded-full object-cover"
                        />
                        <span className="font-medium text-gray-900">
                          {item.name}
                        </span>
                      </div>
                    </td>
                    <td className="px-4 sm:px-6 py-3">{item.withdrawId}</td>
                    <td className="px-4 sm:px-6 py-3">{item.orderValue}</td>
                    <td className="px-4 sm:px-6 py-3">{item.date}</td>
                    <td className="px-4 sm:px-6 py-3">
                      <div className="flex flex-wrap gap-2">
                        {activeTab === "pending" && (
                          <button
                            onClick={() => handleMarkAsPaid(item.id)}
                            className="px-4 py-1.5 bg-[#FFFCEB] border border-[#FFE135] text-gray-900 hover:bg-[#FFE135] text-sm rounded transition-colors"
                          >
                            Mark as paid
                          </button>
                        )}
                        <button
                          onClick={() => handleView(item.id)}
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

      {/* Withdrawal Request Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg w-full max-w-xl relative">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute right-4 top-4 text-red-500 hover:text-red-700 text-2xl"
            >
              ⊗
            </button>
            
            <div className="p-6 mt-5">
              <div className="mb-6 flex justify-between ">
                <div className="font-semibold text-gray-600 mb-1">Available Balance</div>
                <div className="text-3xl font-bold">$12,458.00</div>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Bank Name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter Bank Name"
                    value={withdrawalForm.bankName}
                    onChange={(e) =>
                      setWithdrawalForm({ ...withdrawalForm, bankName: e.target.value })
                    }
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FFE135]"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Account Holder Name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter account holder name"
                    value={withdrawalForm.accountHolderName}
                    onChange={(e) =>
                      setWithdrawalForm({
                        ...withdrawalForm,
                        accountHolderName: e.target.value,
                      })
                    }
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FFE135]"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Account Number
                  </label>
                  <input
                    type="text"
                    placeholder="Enter account number"
                    value={withdrawalForm.accountNumber}
                    onChange={(e) =>
                      setWithdrawalForm({
                        ...withdrawalForm,
                        accountNumber: e.target.value,
                      })
                    }
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FFE135]"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Amount to Withdraw
                  </label>
                  <input
                    type="text"
                    placeholder="$ 0.00"
                    value={withdrawalForm.amount}
                    onChange={(e) =>
                      setWithdrawalForm({ ...withdrawalForm, amount: e.target.value })
                    }
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FFE135]"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Additional Notes (Optional)
                  </label>
                  <textarea
                    placeholder="Enter any additional"
                    value={withdrawalForm.notes}
                    onChange={(e) =>
                      setWithdrawalForm({ ...withdrawalForm, notes: e.target.value })
                    }
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FFE135] resize-none"
                  />
                </div>

                <button
                  onClick={handleWithdrawalSubmit}
                  className="w-full bg-[#FFE135] text-gray-900 font-semibold py-3 rounded-lg hover:bg-[#ffd700] transition-colors"
                >
                  Request
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* View Withdrawal Details Modal */}
      {isViewModalOpen && selectedWithdrawal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg w-full max-w-md relative">
            <button
              onClick={() => setIsViewModalOpen(false)}
              className="absolute right-4 top-4 text-red-500 hover:text-red-700 text-2xl"
            >
              ⊗
            </button>
            
            <div className="p-6 mt-5">
              

              <div className="space-y-4 mb-6">
                <div className="flex justify-between items-center py-2 border-b">
                  <span className="font-medium text-gray-600">Bank Name</span>
                  <span className="font-semibold">{selectedWithdrawal.bankName}</span>
                </div>

                <div className="flex justify-between items-center py-2 border-b">
                  <span className="font-medium text-gray-600">Account Holder Name</span>
                  <span className="font-semibold">{selectedWithdrawal.accountHolderName}</span>
                </div>

                <div className="flex justify-between items-center py-2 border-b">
                  <span className="font-medium text-gray-600">Account Number</span>
                  <span className="font-semibold">{selectedWithdrawal.accountNumber}</span>
                </div>

                <div className="flex justify-between items-center py-2 border-b">
                  <span className="font-medium text-gray-600">Amount Withdraw</span>
                  <span className="font-semibold">${selectedWithdrawal.amountWithdraw}</span>
                </div>

                <div className="flex justify-between items-center py-2 border-b">
                  <span className="font-medium text-gray-600">Withdraw</span>
                  <span className="font-semibold">${selectedWithdrawal.withdraw}</span>
                </div>

                <div className="py-2 border-b">
                  <span className="font-medium text-gray-600 block mb-2">Additional Note</span>
                  <p className="text-gray-800 bg-gray-50 p-3 rounded-lg">
                    {selectedWithdrawal.additionalNote}
                  </p>
                </div>
              </div>

              <button
                onClick={handleDownloadInvoice}
                className="w-full bg-[#FFE135] text-gray-900 font-semibold py-3 rounded-lg hover:bg-[#ffd700] transition-colors flex items-center justify-center gap-2"
              >
                <Download size={20} />
                Download Invoice
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}