import { createContext, useContext } from "react";
import useCookieFilter from "../hooks/useCookieFilter";

const myGlobalContext = createContext();

export function useMyState() {
  return useContext(myGlobalContext);
}

export function ContextGlobal({ children }) {
    const { showModal, handleClose, action, setAction, cookieExists, setShowModal } = useCookieFilter();

  return (
    <myGlobalContext.Provider value={{ showModal, handleClose, action, setAction, cookieExists, setShowModal }}>
      {children}
    </myGlobalContext.Provider>
  );
}
