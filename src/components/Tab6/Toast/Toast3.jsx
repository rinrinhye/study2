import { useEffect, useRef, useState } from "react";

/* 

Context 활용


*/

const Toast = ({ message, onClose }) => {
  const [visible, setVisible] = useState(true);
  const [animation, setAnimation] = useState("idle");
  const animationRef = useRef("idle");
  const toastRef = useRef(null);

  useEffect(() => {
    animationRef.current = animation;
  }, [animation]);

  useEffect(() => {
    const toastEl = toastRef.current;
    if (!toastEl) return;

    const handleTransitionEnd = (e) => {
      if (animationRef.current === "out" && e.propertyName === "opacity") {
        setVisible(false);
        onClose?.(); // 부모에게 제거 요청
      }
    };

    toastEl.addEventListener("transitionend", handleTransitionEnd);

    const showTimer = setTimeout(() => setAnimation("in"), 10);
    const hideTimer = setTimeout(() => setAnimation("out"), 2500);

    return () => {
      clearTimeout(showTimer);
      clearTimeout(hideTimer);
      toastEl.removeEventListener("transitionend", handleTransitionEnd);
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      ref={toastRef}
      className={`transform
                        bg-blue-900 text-white rounded-2xl px-6 py-4 w-fit z-[9999]
                        transition-all duration-500 ease-in-out pointer-events-auto
                        ${animation === "in" ? "opacity-100 translate-y-0" : ""}
                        ${
                          animation === "out" || animation === "idle"
                            ? "opacity-0 translate-y-4"
                            : ""
                        }
                    `}
    >
      <p>{message}</p>
    </div>
  );
};

export default Toast;
