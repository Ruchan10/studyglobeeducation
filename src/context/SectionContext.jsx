// src/context/SectionContext.js
import React, { createContext, useContext, useRef } from 'react';

// Create a context with default values
const SectionContext = createContext();

// Create a provider component
export const SectionProvider = ({ children }) => {
  // Create refs for different sections
  const aboutUsSection = useRef(null);
  const contactUsSection = useRef(null);
  const servicesSection = useRef(null);
  const homeSection = useRef(null);

  return (
    <SectionContext.Provider value={{ aboutUsSection, homeSection, contactUsSection, servicesSection }}>
      {children}
    </SectionContext.Provider>
  );
};

// Create a custom hook to use the SectionContext
export const useSectionContext = () => useContext(SectionContext);
