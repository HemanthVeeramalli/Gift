import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';


// import Navbar from "shoping/src/components/Nav/Navbar.js";
import OrderList from "./pages/OrderList";
import AddressManagement from "./pages/AddressManagement";
import Coupons from "./pages/Coupons";

import ProfilePage from "./pages/ProfilePage";
import NavScrollExample from "./components/Nav/NavScrollExample.js";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <NavScrollExample />
        <div className="p-4">
          <Routes>
            <Route path="/orders" element={<OrderList />} />
            <Route path ="/profile" element={<ProfilePage/>}/>
            <Route path="/addresses" element={<AddressManagement />} />
            <Route path="/coupons" element={<Coupons />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
