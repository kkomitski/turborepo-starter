import React, { ReactNode, HTMLProps } from "react";
import { cn } from "@/lib/utils-shadcn";

const OneColumn = ({
  enableLeftLine = true,
  children,
  containerClassName,
  ...props
}: {
  enableLeftLine?: boolean;
  containerClassName?: string;
  children: ReactNode;
} & HTMLProps<HTMLElement>) => {
  return (
    <section {...props} className={`Module relative ${props.className ?? ""}`}>
      {enableLeftLine && (
        <div className="lines-container">
          <div className="relative h-full w-full">
            <div className="lines">
              <div className="left"></div>
            </div>
          </div>
        </div>
      )}
      <div className={cn("main-xl-container", containerClassName)}>
        {children}
      </div>
    </section>
  );
};

export default OneColumn;
