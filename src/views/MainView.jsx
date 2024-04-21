import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import MainViewItemComponent from "../components/MainViewItemComponent";

const MainView = () => {
  return (
    <div>
      <Navbar />
      <div className="main">
        <div className="main-grid-container">
          <MainViewItemComponent />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MainView;
