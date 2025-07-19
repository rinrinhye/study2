import { IoMdClose } from "react-icons/io";
import Dimmed from "./Dimmed";
import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import useFocusTrap from "../../hooks/useFocusTrap";

const layerStyles = `absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white w-[423px] min-h-[300px] h-auto rounded-xl shadow-[0_14px_28px_rgba(0,0,0,0.05),_0_10px_10px_rgba(0,0,0,0.04)] border border-[#eeeeee] pointer-events-auto`;

const LayerContainer = ({ id, title, onClose, children, className = "" }) => {
  const modalRef = useRef(null);
  const rootRef = useRef(null);

  useFocusTrap(modalRef, onClose);

  // root 준비 (CSR 전제)
  if (typeof window !== "undefined" && !rootRef.current) {
    // 기존 것 제거 (단일 모달 전제)
    const old = document.getElementById("modal-root");
    if (old) old.remove();

    const root = document.createElement("div");
    root.id = "modal-root";
    root.className = "fixed inset-0 z-[100] flex items-center justify-center";
    document.body.appendChild(root);
    rootRef.current = root;
  }

  // 언마운트 시 정리 + (선택) 스크롤 락
  useEffect(() => {
    // 스크롤 잠그고 싶지 않다면 아래 두 줄 제거
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = prevOverflow;
      if (rootRef.current) {
        rootRef.current.remove();
        rootRef.current = null;
      }
    };
  }, []);

  // SSR 보호
  if (!rootRef.current) return null;

  return createPortal(
    <>
      <Dimmed onClick={onClose} />
      <div ref={modalRef} id={id} className={`${layerStyles} ${className}`}>
        {title && (
          <div className="text-center">
            <h3 className="h-8">{title}</h3>
          </div>
        )}
        {children}
        <button
          className="absolute top-4 right-4"
          type="button"
          onClick={onClose}
        >
          <IoMdClose size={24} />
        </button>
      </div>
    </>,
    rootRef.current
  );
};

export default LayerContainer;

/* 
딤드 처리 어떻게?
탭5 컴포넌트 변경
탭6 컴포넌트 변경


*/
