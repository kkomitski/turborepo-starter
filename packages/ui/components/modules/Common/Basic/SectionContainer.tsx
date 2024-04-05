/**
 * SectionContainer Component
 *
 * This file is used to encapsulate multiple sections into one component.
 * The main purpose is to pass a ref to the section so that it can be used
 * in the ScrollSpyAnchors component.
 *
 */

import React, { forwardRef, ReactNode } from "react";

interface SectionContainerProps {
  children: ReactNode;
  className?: string;
}

const SectionContainer = forwardRef<HTMLElement, SectionContainerProps>(
  ({ children, className }, ref) => {
    const sectionClassName = `Module ${className || ""}`;

    return (
      <section className={sectionClassName} ref={ref}>
        {children}
      </section>
    );
  }
);

SectionContainer.displayName = "SectionContainer";

export default SectionContainer;
