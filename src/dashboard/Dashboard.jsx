import React from 'react';
import { HiCurrencyDollar } from "react-icons/hi";
import { IoIosContact } from 'react-icons/io';
import { IoBagHandleSharp } from "react-icons/io5";


const orders = [
  { id: "1", phone: "+234 7069****05", customer: "Moshood Adeoti",      amount: 12145120, status: "Delivered" },
  { id: "2", phone: "+234 9050****01", customer: "Oladimeji Hassan",    amount: 7790785,  status: "Pending" },
  { id: "3", phone: "+234 8023****16", customer: "Dawodu Gbolahan",     amount: 9456200,  status: "Cancelled" },
  { id: "4", phone: "+234 8134****56", customer: "Abdulraheem Badmus",  amount: 2286340,  status: "Delivered" },
  { id: "5", phone: "+234 8067****78", customer: "Bola Ahmed Tinubu",   amount: 2908595,  status: "Pending" },
  { id: "6", phone: "+234 9035****15", customer: "Ruth Olaoye",        amount: 5400000,  status: "Delivered" },
  { id: "7", phone: "+234 7034****89", customer: "Chukwuemeka Obi",     amount: 3200000,  status: "Cancelled" },
  { id: "8", phone: "+234 9012****44", customer: "Aisha Musa",          amount: 8750000,  status: "Pending" },
]
const statusStyle = {
  Delivered: "bg-green-100 text-green-700",
  Pending:   "bg-yellow-100 text-yellow-700",
  Cancelled: "bg-red-100 text-red-700",
}


let totalSales = 0
for (let i = 0; i < orders.length; i++) {
  totalSales = totalSales + orders[i].amount
   
}






const Dashboard = () => {
  return (
    <div className="">
    <div className="bg-blue-900 text-white p-6 rounded-2xl">
  <h1 className="text-2xl font-bold">
    Welcome back, Moshood 👋
  </h1>

  <p className="text-sm mt-2">
    Here's what's happening today.
  </p>
  </div>

 <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 bg-blue-900 text-white p-6 rounded-2xl mt-6'>

  <div className='border-2 border-emerald-500 rounded-lg p-4 bg-white flex items-center gap-4 hover:bg-green-100 cursor-pointer transition duration-300 ease-in-out transform hover:scale-105'>
    <div className='flex gap-[15px] p-4 rounded-lg'>
      <HiCurrencyDollar className='text-[45px] text-emerald-600' />
      <div>
        <p className='text-[23px] font-semibold text-blue-900'>Total Sales</p>
        <p className='text-[26px] text-blue-900 font-bold'> ₦{totalSales.toLocaleString()}</p>
      </div>
    </div>
  </div>
 <div className='border-2 border-emerald-500 rounded-lg p-4 bg-white flex items-center gap-4 hover:bg-green-100 cursor-pointer transition duration-300 ease-in-out transform hover:scale-105'>
    <div className='flex gap-[15px] p-4 rounded-lg'>
      <IoBagHandleSharp className='text-[45px] text-emerald-600' />
      <div>
        <p className='font-semibold text-[23px] text-blue-900'>Total Orders</p>
        <p className='text-[26px] text-blue-900 font-bold'>1,240</p>
      </div>
    </div>
  </div>

  

   <div className='border-2 border-emerald-500 rounded-lg p-4 bg-white flex items-center gap-4 hover:bg-green-100 cursor-pointer transition duration-300 ease-in-out transform hover:scale-105'>
       <div  className='flex gap-[15px] p-4 rounded-lg'> 
         <IoIosContact  className='text-[45px] text-emerald-600'/> 
       <div>
        <p className='font-semibold text-[23px] text-blue-900'>Total Customers</p>
        <p className='text-[26px] text-blue-900 font-bold'>5,678</p>
       </div>
      
       </div>
    </div>

   </div>
   

   <div className='bg-blue-900 rounded-2xl px-4 md:px-10 mt-6 py-6 overflow-x-auto'>
      <h2 className='text-2xl font-bold mt-0.5 mb-4 text-white text-center   items-center'>Recent Orders</h2>

<div>
  <table className='bg-white w-full rounded-lg overflow-hidden'>
 <thead className='text-blue-900 font-semibold text-[16px] text-center bg-gray-200'>
  <tr>
<th>Order ID</th>
<th>Phone Number</th>
<th>Customer Name</th>
<th>Order Amount</th>
<th>Status</th></tr>

 </thead>
<tbody >
  {orders.map((order) =>(
    <tr className='rounded-lg'>
      <td className='border border-blue-900 p-2 text-center font-semibold text-blue-900'>{order.id}</td>
      <td className='border border-blue-900 p-2 text-center'>{order.phone}</td>
      <td className='border border-blue-900 p-2 text-center'> {order.customer}</td>
      <td className='border border-blue-900 p-2 text-center'>₦{order.amount.toLocaleString()}</td>
      <td className='border border-blue-900 p-2 text-center'>
        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${statusStyle[order.status]}`}> {order.status}</span>
        </td>
    </tr>
  ))}
</tbody>


  </table>
</div>

   </div>

</div>
 
 
  );
};

export default Dashboard;