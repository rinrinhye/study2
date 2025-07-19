import { createContext, useContext, useEffect, useRef, useState } from "react";
import Toast from "./Toast";
import { createPortal } from "react-dom";

const ToastContext = createContext();

export const ToastProvider = ({ children }) => {
  const rootRef = useRef(null);
  const [toasts, setToasts] = useState([]);

  useEffect(() => {
    if (rootRef.current && toasts.length === 0) {
      // 0개 된 순간 한 번만
      const timer = setTimeout(() => {
        // 여전히 0개면 제거
        if (rootRef.current && toasts.length === 0) {
          rootRef.current.remove();
          rootRef.current = null;
        }
      }, 400); // exit duration (Toast exit transition보다 살짝 길게)

      return () => clearTimeout(timer); // ✅ cleanup 함수
    }
  }, [toasts]);

  const createRoot = () => {
    if (!rootRef.current) {
      const root = document.createElement("div");
      root.id = "toast-root";
      root.className = `fixed z-200 pointer-events-none`;
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
        createPortal(
          <div className="fixed top-8 right-8 flex flex-col gap-4 z-200 items-end">
            {toasts.map((t) => (
              <Toast
                key={t.id}
                id={t.id}
                message={t.message}
                onClose={() => closeToast(t.id)}
              />
            ))}
          </div>,
          rootRef.current
        )}

      {/* 
      // 오류코드
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
        )} */}
    </ToastContext.Provider>
  );
};

export const useToastContext = () => useContext(ToastContext);
