"use client";
import PropTypes from "prop-types";
import { useState, useEffect, useCallback } from "react";

const InstrumentTabs = ({
  instrumentData,
  setInstrumentData,
  selectedTab,
  setSelectedTab,
  instrumentMappings,
  tabStyle,
}) => {
  // const [screenWidth, setScreenWidth] = useState(window.innerWidth); // state variable to store the screen width
  const [screenWidth, setScreenWidth] = useState(0); // state variable to store the screen width
  const [isOpen, setIsOpen] = useState(false); // state variable to track the menu status
  const isMobile = screenWidth <= 1440;

  const handleMenuClick = () => {
    setIsOpen(!isOpen); // toggle the menu status
  };

  const handleTabClick = (tabName) => {
    setSelectedTab(tabName);

    // create a copy of the tabs array
    const newTabs = [...instrumentData];
    // loop through the tabs and update the isActive property
    for (let tab of newTabs) {
      // if the tab name matches the clicked tab, set isActive to true
      if (tab.tabName === tabName) {
        tab.isActive = true;
      } else {
        // otherwise, set isActive to false
        tab.isActive = false;
      }
    }

    // console.log(newTabs, "newTabs");
    // update the state with the new tabs array
    setInstrumentData(newTabs);
    setIsOpen(false);
  };

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    handleResize();

    // add the event listener
    window.addEventListener("resize", handleResize);

    // Open first tab
    if (selectedTab === "") {
      // If tab has no name, open the first tab which is automatically given the name "Tab0"
      handleTabClick(instrumentMappings[0]?.tabName ?? "Tab0");
    }
  }, [selectedTab, instrumentData]);

  return (
    <>
      {/* Hide tabs if there is only one table */}
      <div
        className={
          "flex gap-x-2 " +
          (instrumentData.length <= 1 ? "hidden " : "") +
          (tabStyle === "flat" ? "mb-6" : "mb-10")
        }
      >
        {tabStyle === "default" && (
          <>
            {isMobile ? ( // if mobile, render a drop down menu
              <div className="relative z-20 w-full xs:w-[268px]">
                <button
                  className="flex w-full justify-between rounded-lg bg-navy-100 px-4 py-3 text-left text-xs font-semibold text-white shadow-lg"
                  onClick={handleMenuClick}
                >
                  <span>{selectedTab}</span>
                  <svg
                    width="14"
                    height="15"
                    viewBox="0 0 14 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11.0834 5.34668L7.00002 9.43001L2.91669 5.34668"
                      stroke="white"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
                {isOpen && ( // if menu is open, render the menu items
                  <div className="absolute left-0 right-0 mt-0.5 rounded-lg bg-white shadow">
                    {instrumentData.map((tab, index) => (
                      <button
                        className={
                          "block w-full px-4 py-3 text-left text-xs font-semibold text-navy-100 " +
                          (tab.isActive ? "bg-navy-100 text-white" : "") +
                          (index === 0 ? " rounded-t-lg" : "")
                        }
                        key={tab.tabName}
                        onClick={() => handleTabClick(tab.tabName)}
                        disabled={tab.isActive}
                      >
                        {tab.tabName}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              // if not mobile, render the original code
              instrumentData.map((tab) => (
                <button
                  className={
                    "rounded-lg px-4 py-3 text-xs font-semibold text-navy-100 drop-shadow-lg " +
                    (tab.isActive
                      ? "bg-navy-100 text-white"
                      : "bg-white text-navy-100 hover:bg-white-85")
                  }
                  key={tab.tabName}
                  onClick={() => handleTabClick(tab.tabName)}
                  disabled={tab.isActive}
                >
                  {tab.tabName}
                </button>
              ))
            )}
          </>
        )}

        {tabStyle === "flat" && (
          <>
            {instrumentData.map((tab) => (
              <button
                className={
                  "w-full py-1 text-xs font-semibold text-navy-100 " +
                  (tab.isActive
                    ? "border-t-4 border-t-navy-100 text-navy-100"
                    : "border-t border-t-navy-20 text-navy-20")
                }
                key={tab.tabName}
                onClick={() => handleTabClick(tab.tabName)}
              >
                {tab.tabName}
              </button>
            ))}
          </>
        )}
      </div>
    </>
  );
};

InstrumentTabs.propTypes = {
  instrumentData: PropTypes.array.isRequired,
  setInstrumentData: PropTypes.func.isRequired,
  selectedTab: PropTypes.any.isRequired,
  setSelectedTab: PropTypes.func.isRequired,
  instrumentMappings: PropTypes.array,
  tabStyle: PropTypes.string,
};

export default InstrumentTabs;
