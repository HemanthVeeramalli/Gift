import React from "react";
import OrderLists from "../components/Orders/OrderLists";
import SingleBanner from "../components/Banners/SingleBanner";
// import OrderItem from "../components/Orders/OrderItem";
import ProfileImage from '../Properties/Profile.png';



function App() {
  return (
    <div className="bg-gray-100 min-h-screen p-6">
      {/* <h1 className="text-2xl font-bold mb-4">Welcome to Your Orders Dashboard</h1> */}
      <SingleBanner 
            heading="My Orders"
            bannerimage={ProfileImage}
        />
      <OrderLists/>
    </div>
  );
}

export default App;
