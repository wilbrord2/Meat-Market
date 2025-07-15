import React from "react";
import Titles from "../title/titles";
import ProductSlider from "./productSlider";

const Recommandation = ({ title }: { title: string }) => {
  return (
    <div className="w-full py-8">
      <Titles name={title} />
      <ProductSlider />
    </div>
  );
};

export default Recommandation;
