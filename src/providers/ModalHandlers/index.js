import { createContext, useContext, useState } from "react";

const ModalHhandlersContext = createContext();

export const ProviderModalHandlers = ({ children }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <ModalHhandlersContext.Provider value={{ showModal, setShowModal }}>
      {children}
    </ModalHhandlersContext.Provider>
  );
};

export const useModalHandlers = () => useContext(ModalHhandlersContext);
