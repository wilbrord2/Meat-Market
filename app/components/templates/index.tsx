import React, { ReactNode } from "react";
import Navbar from "../navbar/navbar";
import Footer from "../footer/footer";
import RightModal from "../model/rightSideModel";
import Box from "../model/boxSection";

const HomeTemplate = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <Navbar />
      <div className="w-full pt-16 lg:pt-28">
        <div>{children}</div>
        <RightModal children={<Box />} id={"box"} />
      </div>
      <Footer />
    </div>
  );
};

export default HomeTemplate;
