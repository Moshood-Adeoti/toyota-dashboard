import { BrowserRouter, Routes, Route } from "react-router-dom";
import DashboardLayout from './layout/DashboardLayout.jsx'
import Dashboard from './dashboard/Dashboard.jsx'
import Marketplace from './marketplace/MarketPlace.jsx'
import Tracking from './tracking/Tracking.jsx'
import TodoList from "./TodoList/TodoList.jsx";
import Orders from "./order/Order.jsx";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<DashboardLayout />}>   
          <Route index element={<Dashboard />} />
          <Route path='/marketplace' element={<Marketplace />} />
          <Route path='/todoList' element={<TodoList />} />
          <Route path='/order' element={ <Orders/>} />
          <Route path='/tracking' element={<Tracking />} />
          <Route path='/customers' element={<h1>Customers</h1>} />
          <Route path='/settings' element={<h1>Settings</h1>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}