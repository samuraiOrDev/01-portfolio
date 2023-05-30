import React from "react";
import { Logo } from "./";

export const LogoPulse = () => {
  return (
    <>
      <div className="relative">
        <div className="relative z-10 p-4">
          <Logo
            height="50"
            width="50"
            fill="#000"
            stroke="rgb(202 138 4 / 100%)"
          />
        </div>
      </div>
    </>
  );
};
