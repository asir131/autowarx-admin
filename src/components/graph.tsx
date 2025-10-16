"use client"
import { useState } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const userData = [
  { day: 'Sat', value: 3800 },
  { day: 'Sun', value: 2200 },
  { day: 'Mon', value: 3200 },
  { day: 'Tue', value: 6000 },
  { day: 'Wed', value: 2800 },
  { day: 'Thu', value: 4500 },
  { day: 'Fri', value: 5800 },
];

const vendorData = [
  { day: 'Sat', value: 3800 },
  { day: 'Sun', value: 2000 },
  { day: 'Mon', value: 2500 },
  { day: 'Tue', value: 5800 },
  { day: 'Wed', value: 3200 },
  { day: 'Thu', value: 4800 },
  { day: 'Fri', value: 6200 },
];

const UserActivityChart = () => {
  const [userTimeframe, setUserTimeframe] = useState('Weekly');
  const [vendorTimeframe, setVendorTimeframe] = useState('Weekly');

  // Find the maximum value across both datasets to set consistent Y-axis
  const maxUserValue = Math.max(...userData.map(item => item.value));
  const maxVendorValue = Math.max(...vendorData.map(item => item.value));
  const maxValue = Math.max(maxUserValue, maxVendorValue);
  const yAxisTicks = [0, 1000, 2000, 3000, 4000, 5000, 6000, 7000];

  return (
    <div className="grid gap-5  lg:flex mx-4 lg:mx-6 lg:gap-5">
      <div className="bg-white rounded-md shadow-sm p-6 w-full max-w-4xl">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold text-gray-800">User Activity</h2>
        <div className="relative">
          <select
            value={userTimeframe}
            onChange={(e) => setUserTimeframe(e.target.value)}
            className="appearance-none bg-white border border-gray-200 rounded-lg px-4 py-2 pr-10 text-gray-600 text-sm focus:outline-none focus:border-gray-300 cursor-pointer"
          >
            <option>Weekly</option>
            <option>Monthly</option>
            <option>Yearly</option>
          </select>
          <svg
            className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>

      <ResponsiveContainer width="100%" height={300}>
        <AreaChart
          data={userData}
          margin={{ top: 10, right: 10, left: -20, bottom: 0 }}
        >
          <defs>
            <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#FFF6C0" stopOpacity={0.3} />
              <stop offset="100%" stopColor="#FFE135" stopOpacity={0.8} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="0" stroke="#f0f0f0" vertical={false} />
          <XAxis
            dataKey="day"
            axisLine={false}
            tickLine={false}
            tick={{ fill: '#9ca3af', fontSize: 12 }}
            dy={10}
          />
          <YAxis
            axisLine={false}
            tickLine={false}
            tick={{ fill: '#9ca3af', fontSize: 12 }}
            domain={[0, maxValue + 1000]}
            ticks={yAxisTicks}
            tickFormatter={(value) => value.toLocaleString()}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: 'white',
              border: '1px solid #e5e7eb',
              borderRadius: '8px',
              padding: '8px 12px',
            }}
            labelStyle={{ color: '#374151', fontWeight: 600 }}
            itemStyle={{ color: '#6b7280' }}
          />
          <Area
            type="linear"
            dataKey="value"
            stroke="#FFE135"
            strokeWidth={2}
            fill="url(#colorValue)"
            dot={{
              fill: '#FFE135',
              strokeWidth: 2,
              r: 4,
              stroke: 'white',
            }}
            activeDot={{
              r: 6,
              fill: '#FFE135',
              stroke: 'white',
              strokeWidth: 2,
            }}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>

      <div className="bg-white shadow-sm rounded-md  p-6 w-full max-w-4xl">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold text-gray-800">Vendor Activity</h2>
        <div className="relative">
          <select
            value={vendorTimeframe}
            onChange={(e) => setVendorTimeframe(e.target.value)}
            className="appearance-none bg-white border border-gray-200 rounded-lg px-4 py-2 pr-10 text-gray-600 text-sm focus:outline-none focus:border-gray-300 cursor-pointer"
          >
            <option>Weekly</option>
            <option>Monthly</option>
            <option>Yearly</option>
          </select>
          <svg
            className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>

      <ResponsiveContainer width="100%" height={300}>
        <AreaChart
          data={vendorData}
          margin={{ top: 10, right: 10, left: -20, bottom: 0 }}
        >
          <defs>
            <linearGradient id="colorVendor" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#E5E7EB" stopOpacity={0.3} />
              <stop offset="100%" stopColor="#6B7280" stopOpacity={0.8} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="0" stroke="#f0f0f0" vertical={false} />
          <XAxis
            dataKey="day"
            axisLine={false}
            tickLine={false}
            tick={{ fill: '#9ca3af', fontSize: 12 }}
            dy={10}
          />
          <YAxis
            axisLine={false}
            tickLine={false}
            tick={{ fill: '#9ca3af', fontSize: 12 }}
            domain={[0, maxValue + 1000]}
            ticks={yAxisTicks}
            tickFormatter={(value) => value.toLocaleString()}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: 'white',
              border: '1px solid #e5e7eb',
              borderRadius: '8px',
              padding: '8px 12px',
            }}
            labelStyle={{ color: '#374151', fontWeight: 600 }}
            itemStyle={{ color: '#6b7280' }}
          />
          <Area
            type="linear"
            dataKey="value"
            stroke="#6B7280"
            strokeWidth={2}
            fill="url(#colorVendor)"
            dot={{
              fill: '#6B7280',
              strokeWidth: 2,
              r: 4,
              stroke: 'white',
            }}
            activeDot={{
              r: 6,
              fill: '#6B7280',
              stroke: 'white',
              strokeWidth: 2,
            }}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
    </div>
  );
};

export default UserActivityChart;