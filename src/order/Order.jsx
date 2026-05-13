import React, { useState } from 'react'

const orders = [
  { id: "1", phone: "+234 7069****05", customer: "Moshood Adeoti",     amount: 12145120, status: "Delivered" },
  { id: "2", phone: "+234 9050****01", customer: "Oladimeji Hassan",   amount: 7790785,  status: "Pending" },
  { id: "3", phone: "+234 8023****16", customer: "Dawodu Gbolahan",    amount: 9456200,  status: "Cancelled" },
  { id: "4", phone: "+234 8134****56", customer: "Abdulraheem Badmus", amount: 2286340,  status: "Delivered" },
  { id: "5", phone: "+234 8067****78", customer: "Bola Ahmed Tinubu",  amount: 2908595,  status: "Pending" },
  { id: "6", phone: "+234 9035****15", customer: "Ruth Olaoye",        amount: 5400000,  status: "Delivered" },
  { id: "7", phone: "+234 7034****89", customer: "Chukwuemeka Obi",    amount: 3200000,  status: "Cancelled" },
  { id: "8", phone: "+234 9012****44", customer: "Aisha Musa",         amount: 8750000,  status: "Pending" },
]

const statusStyle = {
  Delivered: "bg-green-100 text-green-700",
  Pending:   "bg-yellow-100 text-yellow-700",
  Cancelled: "bg-red-100 text-red-700",
}

const filters = ["All", "Delivered", "Pending", "Cancelled"]

const Orders = () => {
  const [activeFilter, setActiveFilter] = useState("All")

  const filtered = orders.filter((order) =>
    activeFilter === "All" ? true : order.status === activeFilter
  )

  return (
    <div className="px-2 md:px-0 pb-10">

      {/* Header */}
      <div className="bg-blue-900 text-white p-6 rounded-2xl">
        <h1 className="text-2xl font-bold">Orders 📦</h1>
        <p className="text-sm mt-2">Manage and track all your orders</p>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
        <div className="bg-blue-900 text-white p-4 rounded-xl text-center">
          <p className="text-sm">Total Orders</p>
          <p className="text-2xl font-bold">{orders.length}</p>
        </div>
        <div className="bg-green-100 text-green-700 p-4 rounded-xl text-center">
          <p className="text-sm font-semibold">Delivered</p>
          <p className="text-2xl font-bold">
            {orders.filter(o => o.status === "Delivered").length}
          </p>
        </div>
        <div className="bg-yellow-100 text-yellow-700 p-4 rounded-xl text-center">
          <p className="text-sm font-semibold">Pending</p>
          <p className="text-2xl font-bold">
            {orders.filter(o => o.status === "Pending").length}
          </p>
        </div>
        <div className="bg-red-100 text-red-700 p-4 rounded-xl text-center">
          <p className="text-sm font-semibold">Cancelled</p>
          <p className="text-2xl font-bold">
            {orders.filter(o => o.status === "Cancelled").length}
          </p>
        </div>
      </div>

      {/* Filter Buttons */}
      <div className="flex flex-wrap gap-3 mt-6">
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`px-5 py-2 rounded-full font-semibold text-sm transition duration-300
              ${activeFilter === filter
                ? "bg-blue-900 text-white"
                : "bg-gray-100 text-blue-900 hover:bg-blue-100"
              }`}
          >
            {filter}
          </button>
        ))}
      </div>

      {/* Orders Table */}
      <div className="bg-blue-900 rounded-2xl px-4 md:px-10 mt-6 py-6">
        <h2 className="text-xl font-bold text-white mb-4">
          {activeFilter === "All" ? "All Orders" : `${activeFilter} Orders`}
        </h2>

        <div className="overflow-x-auto w-full">
          <table className="bg-white w-full rounded-lg overflow-hidden min-w-[600px]">
            <thead className="text-blue-900 font-semibold text-[16px] text-center bg-gray-200">
              <tr>
                <th className="p-3">Order ID</th>
                <th className="p-3">Phone Number</th>
                <th className="p-3">Customer Name</th>
                <th className="p-3">Order Amount</th>
                <th className="p-3">Status</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((order) => (
                <tr
                  key={order.id}
                  className="border-t border-gray-100 hover:bg-gray-50 transition duration-200"
                >
                  <td className="border border-blue-900 p-2 text-center font-semibold text-blue-900">
                    {order.id}
                  </td>
                  <td className="border border-blue-900 p-2 text-center">
                    {order.phone}
                  </td>
                  <td className="border border-blue-900 p-2 text-center">
                    {order.customer}
                  </td>
                  <td className="border border-blue-900 p-2 text-center">
                    ₦{order.amount.toLocaleString()}
                  </td>
                  <td className="border border-blue-900 p-2 text-center">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${statusStyle[order.status]}`}>
                      {order.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>

    </div>
  )
}

export default Orders