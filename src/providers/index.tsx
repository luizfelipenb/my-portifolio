import { ProviderModalHandlers } from "./ModalHandlers";
import React from "react";

const Providers: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <ProviderModalHandlers>{children}</ProviderModalHandlers>;
};

export default Providers;
