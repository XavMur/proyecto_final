import React from "react";
import MainViewItemComponent from "../components/MainViewItemComponent";

const MainView = () => {
  return (
    <div>
      <div className="main">
        <div className="row" style={{ maxWidth: "99%" }}>
          <MainViewItemComponent />
          <MainViewItemComponent />
          <MainViewItemComponent />
          <MainViewItemComponent />
          <MainViewItemComponent />
          <MainViewItemComponent />
          <MainViewItemComponent />
          <MainViewItemComponent />
        </div>
      </div>
    </div>
  );
};

export default MainView;
