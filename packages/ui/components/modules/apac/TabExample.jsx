import { useState } from "react";
import { TabGroup, TabGroupSelect } from "../complex/TabGroup";

export default function TabExample() {
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const tabs = ["Tab 1", "Tab 2", "Tab 3"];

  return (
    <section className="overflow-hidden py-12 md:py-20">
      <div className="mx-auto w-[1280px] max-w-full px-4 md:px-8">
        <TabGroupSelect
          tabs={tabs}
          activeTabIndex={activeTabIndex}
          setActiveTabIndex={setActiveTabIndex}
          classes={{}}
        />
        <div className="pt-2"></div>
        <TabGroup
          tabs={tabs}
          activeTabIndex={activeTabIndex}
          setActiveTabIndex={setActiveTabIndex}
          classes={{}}
        />
        <div>
          {activeTabIndex === 0 && <div>Tab 1 content</div>}
          {activeTabIndex === 1 && <div>Tab 2 content</div>}
          {activeTabIndex === 2 && <div>Tab 3 content</div>}
        </div>
      </div>
    </section>
  );
}
