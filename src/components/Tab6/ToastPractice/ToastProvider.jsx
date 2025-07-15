import { createContext, useContext, useState } from "react";
import ModalPortal from "../../Common/ModalPortal";
import Toast from "./Toast";

const ToastContext = createContext();

export const ToastProvider = ({ children }) => {
  const [toasts, setToasts] = useState([]);

  const addToast = (message) => {
    const newToast = { id: Date.now(), message };

    return setToasts((prev) => [...prev, newToast]);
  };

  const closeToast = (id) =>
    setToasts((prev) => prev.filter((p) => p.id !== id));

  const clearToasts = () => setToasts([]);

  return (
    <ToastContext.Provider value={{ addToast, clearToasts }}>
      {children}
      <ModalPortal containerId="toast-root">
        {toasts.map((t) => (
          <Toast
            key={t.id}
            message={t.message}
            onClose={() => closeToast(t.id)}
          />
        ))}
      </ModalPortal>
    </ToastContext.Provider>
  );
};

export const useToastContext = () => useContext(ToastContext);
