import { createContext, useContext, useState } from "react";
import ModalPortal from "../../Common/ModalPortal";
import Toast3 from "./Toast3";

const ToastContext = createContext();

export const ToastProvider = ({ children }) => {
  const [toasts, setToasts] = useState([]);

  const addToast = (message) => {
    const id = Date.now();
    const newToast = { id, message };
    setToasts((prev) => [...prev, newToast]);
  };

  const clearToasts = () => setToasts([]);

  return (
    <ToastContext.Provider value={{ addToast, clearToasts }}>
      {children}
      <ModalPortal containerId={"toast-root"}>
        {toasts.map((toast) => (
          <Toast3
            {...toast}
            onClose={() =>
              setToasts((prev) => prev.filter((t) => t.id !== toast.id))
            }
          />
        ))}
      </ModalPortal>
    </ToastContext.Provider>
  );
};

export const useToastContext = () => useContext(ToastContext);
