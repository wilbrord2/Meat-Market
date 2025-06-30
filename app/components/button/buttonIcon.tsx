import React, { ReactElement } from "react";

const ButtonIcon = ({ title, icon }: { title: string; icon: ReactElement }) => {
  return (
    <div className="text-nowrap border border-default-black px-4 py-2 flex items-center justify-center gap-2 bg-default-white transition-colors hoverStyle rounded-full">
      <span>{icon}</span>
      <span>{title}</span>
    </div>
  );
};

export default ButtonIcon;
