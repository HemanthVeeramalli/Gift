import React, { useState } from "react";
import "./ProfilePage.css";
import SingleBanner from "../components/Banners/SingleBanner";
import ProfileImage from '../Properties/Profile.png';
import OrderLists from "../components/Orders/OrderLists";
import AccountSettingsWithAddresses from "../components/AccountSettingsWithAddresses/AccountSettingsWithAddresses";
import Hello from "../components/Hello/Hello.js";


function ProfilePage() {

  const [activeOption, setActiveOption] = useState("orders");
  const renderContent = () => {
  
    switch (activeOption) {
      case "orders":
        return <div >
          <OrderLists/>
        </div>;
      case "accountSettings":
        return (
          <div>
            <AccountSettingsWithAddresses/>
          </div>
        );
      case "payments":
        return (
          <div>
            <h4>Payments</h4>
            <ul>
              <li>Gift Cards: ₹0</li>
              <li>Saved UPI</li>
              <li>Saved Cards</li>
            </ul>
          </div>
        );
      case "stuff":
        return (
          <div>
            <h4>My Stuff</h4>
            <ul>
              <li>My Coupons</li>
              <li>My Reviews & Ratings</li>
              <li>All Notifications</li>
              <li>My Wishlist</li>
            </ul>
          </div>
        );
      case "frequentlyVisited":
        return (
          <div>
            <h4>Frequently Visited</h4>
            <ul>
              <li>Track Order</li>
              <li>Help Center</li>
            </ul>
          </div>
        );
      default:
        return <div>Select an option to view details.</div>;
    }
  };

  return (
    <div className="profile-page-container">
      {/* SingleBanner Component */}
      <SingleBanner 
            heading="My Profile"
           bannerimage={ProfileImage}
        />
      {/* Sidebar and Content */}
      <div className="profile-page-content">
        <div className="profile-sidebar">
          <ul>
             <div>
             <Hello/>
             </div>
            <li
              className={`menu-item ${
                activeOption === "orders" ? "active" : ""
              }`}
              onClick={() => setActiveOption("orders")}
            >
              My Orders
            </li>
            <li
              className={`menu-item ${
                activeOption === "accountSettings" ? "active" : ""
              }`}
              onClick={() => setActiveOption("accountSettings")}
            >
              Account Settings
            </li>
            <li
              className={`menu-item ${
                activeOption === "payments" ? "active" : ""
              }`}
              onClick={() => setActiveOption("payments")}
            >
              Payments
            </li>
            <li
              className={`menu-item ${
                activeOption === "stuff" ? "active" : ""
              }`}
              onClick={() => setActiveOption("stuff")}
            >
              My Stuff
            </li>
            <li
              className={`menu-item ${
                activeOption === "frequentlyVisited" ? "active" : ""
              }`}
              onClick={() => setActiveOption("frequentlyVisited")}
            >
              Frequently Visited
            </li>
          </ul>
        </div>
        <div className="profile-content">{renderContent()}</div>
      </div>
    </div>
  );
}

export default ProfilePage;
