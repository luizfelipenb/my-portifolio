import React from "react";

interface IAppDataContext {
  showModal: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const ModalHhandlersContext = React.createContext({} as IAppDataContext);

export const ProviderModalHandlers: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [showModal, setShowModal] = React.useState(false);

  return (
    <ModalHhandlersContext.Provider value={{ showModal, setShowModal }}>
      {children}
    </ModalHhandlersContext.Provider>
  );
};

export const useModalHandlers = () => React.useContext(ModalHhandlersContext);
