import checkAnimation from "../../../check.json";
import { useEffect, useRef, useState } from "react";
import CartButton from "../../Tab2/CartButton";
import Lottie from "lottie-react";
import { createPortal } from "react-dom";

const LottieBox = () => {
  // 'idle' → 아무것도 안 보여줌
  // 'playing' → 중앙에서 재생
  // 'exiting' → 사라지는 중
  const [animationState, setAnimationState] = useState("idle");
  const lottieRef = useRef();
  const rootRef = useRef(null);

  const createRoot = () => {
    if (!rootRef.current) {
      const root = document.createElement("div");
      root.id = "lottie-root";
      root.className = `fixed inset-0 z-100`;
      rootRef.current = root;
      document.body.appendChild(rootRef.current);
    }
  };

  const handleButtonClick = () => {
    // 이미 재생 중일 때 무시하고싶다면 ?
    // if (animationState === "playing") return;

    createRoot();

    setAnimationState("playing");
    requestAnimationFrame(() => {
      lottieRef.current?.stop();
      lottieRef.current?.goToAndPlay(0, true);
    });
  };

  const handleLottieComplete = () => {
    setAnimationState("exiting");
  };

  const handleTransitionEnd = (e) => {
    if (animationState === "exiting" && e.propertyName === "translate") {
      setAnimationState("idle");
      document.body.removeChild(rootRef.current);
      rootRef.current = null;
    }
  };

  return (
    <>
      <div className="text-center mt-4">
        <CartButton handleClick={handleButtonClick} />
      </div>

      {rootRef.current &&
        createPortal(
          <div
            onTransitionEnd={handleTransitionEnd}
            className={`
    absolute left-1/2 top-1/2 w-32 h-32 pointer-events-none
    transform transition-all duration-300 ease-in-out
    ${
      animationState === "idle"
        ? "-translate-x-1/2 -translate-y-1/2 scale-0 opacity-0"
        : animationState === "playing"
        ? "-translate-x-1/2 -translate-y-1/2 scale-100 opacity-100"
        : /* exiting */
          "translate-x-[80%] translate-y-[-200%] scale-0 opacity-0"
    }
          `}
          >
            <Lottie
              lottieRef={lottieRef}
              animationData={checkAnimation}
              loop={false}
              autoplay={false}
              onComplete={handleLottieComplete}
            />
          </div>,
          rootRef.current
        )}
    </>
  );
};

export default LottieBox;
