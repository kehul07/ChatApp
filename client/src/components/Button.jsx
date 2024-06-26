import { type } from "@testing-library/user-event/dist/type";
import React from "react";

export default function Button({
  label = "Button",
  type = "button",
  className = "",
  disabled = false,
}) {
  return (
    <>
      <button
        type={type}
        className={`text-white bg-primary hover:bg-primary focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center ${className} `}
        disabled={disabled}
      >
        {label}
      </button>
    </>
  );
}
