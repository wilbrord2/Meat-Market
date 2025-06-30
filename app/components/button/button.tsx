import Link from "next/link";
import React, { ReactElement } from "react";

const Button = ({ title, link }: { title: string; link: string }) => {
  return (
    <div className=" w-fit text-nowrap border border-default-black px-4 py-2 flex items-center justify-center gap-2 bg-default-white transition-colors hoverStyle rounded-full">
      <Link href={link} className="text-default-black">
        <span>{title}</span>
      </Link>
    </div>
  );
};

export default Button;
