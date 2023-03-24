import React from "react";
import Common from "./Common";
import web from "../src/Images/img2.svg";

const Home = () => {
  return (
    <>
      <Common
        name="Grow Your Business With"
        imgsrc={web}
        visit="/service"
        btnname="Get Started"
      />
    </>
  );
};

export default Home;
