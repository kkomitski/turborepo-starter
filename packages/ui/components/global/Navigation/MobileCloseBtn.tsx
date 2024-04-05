import React from "react";

const MobileCloseBtn = (props: any) => {
  return (
    <button
      onClick={props.onClick}
      className={"ml-2 lg:hidden " + (props.isVisible ? "block" : "hidden")}
      id="mobileMegamenuBtnClose"
      type="button"
    >
      <svg
        id="mobileMegamenuBtnClose"
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8 24L24 8M8 8L24 24"
          stroke="#101626"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
};

export default MobileCloseBtn;
