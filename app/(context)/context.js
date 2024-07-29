import React, { createContext, useState } from "react";

const Context = createContext();

const Provider = ({ children }) => {
  const [pricingState, setPricingState] = useState(0);

  return (
    <Context.Provider value={{ pricingState, setPricingState }}>
      {children}
    </Context.Provider>
  );
};

export { Context, Provider };
