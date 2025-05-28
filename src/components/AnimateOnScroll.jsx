// src/components/AnimateOnScroll.jsx
import React from "react";

const AnimateOnScroll = ({ children, type = "fade-up", delay = 0 }) => {
  return (
    <div data-aos={type} data-aos-delay={delay}>
      {children}
    </div>
  );
};

export default AnimateOnScroll;
