import React from "react";

const MobileOpenBtn = (props: any) => {
  return (
    <button onClick={props.onClick} className={"ml-2 lg:hidden " + (props.isVisible ? "block" : "hidden")} id="mobileMegamenuBtnOpen" type="button">
      <svg
        id="mobileMegamenuBtnOpen"
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M5.33337 8H26.6667M5.33337 16H26.6667M5.33337 24H26.6667"
          stroke="#101626"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
};

export default MobileOpenBtn;
