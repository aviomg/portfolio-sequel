import React, { useState } from 'react';
import { Calendar, ChevronRight, Clock, Package } from 'lucide-react';

const Example = () => {
  // Dummy data for scheduled orders
  const scheduledOrders = [
    {
      id: 'SO-12345',
      customer: 'EyeCare Associates',
      products: ['Bausch+Lomb Ultra (24pk)', 'ReNu MultiPlus Solution'],
      scheduledDate: '2025-05-20',
      status: 'confirmed',
      total: 749.99
    },
    {
      id: 'SO-12346',
      customer: 'Vision Partners LLC',
      products: ['Biotrue ONEday (90pk)', 'Ocuvite Eye Vitamin'],
      scheduledDate: '2025-05-22',
      status: 'pending',
      total: 524.50
    },
    {
      id: 'SO-12347',
      customer: 'Clear Vision Center',
      products: ['Bausch+Lomb ULTRA for Astigmatism (6pk)', 'Soothe XP'],
      scheduledDate: '2025-05-25',
      status: 'cancelled',
      total: 329.75
    },
    {
      id: 'SO-12348',
      customer: 'OptiCare Clinic',
      products: ['PreserVision AREDS 2 Formula', 'Bausch+Lomb Biotrue Solution'],
      scheduledDate: '2025-05-27',
      status: 'confirmed',
      total: 892.25
    }
  ];

  // Status badge styling
  const getStatusBadge = (status) => {
    switch(status) {
      case 'confirmed':
        return (
          <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
            Confirmed
          </span>
        );
      case 'pending':
        return (
          <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
            Pending
          </span>
        );
      case 'cancelled':
        return (
          <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-red-100 text-red-800">
            Cancelled
          </span>
        );
      default:
        return (
          <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
            {status}
          </span>
        );
    }
  };

  // Format date to readable format
  const formatDate = (dateString) => {
    const options = { month: 'short', day: 'numeric', year: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden">
      {/* Widget Header */}
      <div className="flex justify-between items-center p-4 border-b border-gray-100">
        <div className="flex items-center">
          <div className="w-8 h-8 rounded-full flex items-center justify-center bg-teal-50 mr-3">
            <Calendar size={16} className="text-teal-700" />
          </div>
          <h2 className="text-base font-bold text-gray-800">Scheduled Orders</h2>
        </div>
        <div>
          <button className="text-xs font-medium text-teal-700 flex items-center hover:text-teal-800">
            View All <ChevronRight size={14} className="ml-1" />
          </button>
        </div>
      </div>

      {/* Widget Body */}
      <div className="p-4">
        <div className="flex justify-between mb-3">
          <div className="flex flex-col">
            <span className="text-2xl font-semibold text-teal-700">{scheduledOrders.length}</span>
            <span className="text-xs text-gray-500">Upcoming orders</span>
          </div>
          <div className="flex items-center">
            <button className="px-3 py-1 border border-teal-700 text-teal-700 rounded text-xs font-medium hover:bg-teal-50">
              Add New Order
            </button>
          </div>
        </div>

        {/* Orders List */}
        <div className="mt-4">
          {scheduledOrders.map((order) => (
            <div key={order.id} className="border-b border-gray-100 py-3 last:border-0">
              <div className="flex justify-between items-center mb-2">
                <div className="flex items-center">
                  <Package size={16} className="text-teal-700 mr-2" />
                  <span className="text-sm font-bold text-teal-700">{order.id}</span>
                </div>
                {getStatusBadge(order.status)}
              </div>
              <div className="ml-6">
                <div className="text-sm font-medium text-gray-800">{order.customer}</div>
                <div className="text-xs text-gray-500 mt-1">
                  {order.products.join(', ')}
                </div>
                <div className="flex justify-between items-center mt-2">
                  <div className="flex items-center text-xs text-gray-500">
                    <Clock size={12} className="mr-1" />
                    {formatDate(order.scheduledDate)}
                  </div>
                  <div className="text-sm font-bold">${order.total.toFixed(2)}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Widget Footer */}
      <div className="bg-gray-50 p-3 text-center">
        <button className="text-sm text-teal-700 font-medium hover:text-teal-800">
          Manage Scheduled Orders
        </button>
      </div>
    </div>
  );
};

export default Example;