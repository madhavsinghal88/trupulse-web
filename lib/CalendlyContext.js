"use client";
import { createContext, useContext, useState } from "react";

const CalendlyContext = createContext();

export const CalendlyProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openCalendly = () => setIsOpen(true);
  const closeCalendly = () => setIsOpen(false);

  return (
    <CalendlyContext.Provider value={{ isOpen, openCalendly, closeCalendly }}>
      {children}
    </CalendlyContext.Provider>
  );
};

export const useCalendly = () => useContext(CalendlyContext);
