import { createContext, useContext, useEffect, useRef, useState } from "react";
import Toast from "./Toast";
import { createPortal } from "react-dom";

const ToastContext = createContext();

export const ToastProvider = ({ children }) => {
  const rootRef = useRef(null);
  const [toasts, setToasts] = useState([]);

  useEffect(() => {
    if (rootRef.current && toasts.length === 0) {
      console.log("0개?");
      rootRef.current.remove();
      rootRef.current = null;
    }
  }, [toasts]);

  const createRoot = () => {
    if (!rootRef.current) {
      const root = document.createElement("div");
      root.id = "toast-root";
      root.className = `fixed top-8 right-8 flex flex-col gap-4 z-200 items-end pointer-events-none`;
      rootRef.current = root;
      document.body.appendChild(rootRef.current);
    }
  };

  const addToast = (message) => {
    createRoot();
    const newToast = { id: Date.now(), message };
    setToasts((prev) => [...prev, newToast]);
  };

  const closeToast = (id) => {
    setToasts((prev) => prev.filter((p) => p.id !== id));
  };

  const clearToasts = () => {
    setToasts([]);
  };
  return (
    <ToastContext.Provider value={{ addToast, clearToasts }}>
      {children}

      {rootRef.current &&
        toasts.map((toast) =>
          createPortal(
            <Toast
              key={toast.id}
              {...toast}
              onClose={() => closeToast(toast.id)}
            />,
            rootRef.current
          )
        )}
    </ToastContext.Provider>
  );
};

export const useToastContext = () => useContext(ToastContext);
