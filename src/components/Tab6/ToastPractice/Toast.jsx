import { useEffect, useState } from "react";

const Toast = ({ message, onClose }) => {
  // state 값 :  idle | in | out
  const [animation, setAnimation] = useState("idle");

  useEffect(() => {
    let startTimer = setTimeout(() => {
      setAnimation("in");
    }, 10);

    let endTimer = setTimeout(() => {
      setAnimation("out");
    }, 2500);

    return () => {
      clearTimeout(startTimer);
      clearTimeout(endTimer);
    };
  }, []);

  return (
    <div
      onTransitionEnd={(e) => {
        if (animation === "out" && e.propertyName === "opacity") {
          setAnimation("idle");
          onClose();
        }
      }}
      className={`bg-blue-900 text-white rounded-2xl px-6 py-4 w-fit transition-all duration-500 ease-in-out pointer-events-auto
				${animation === "in" ? "translate-y-0 opacity-100" : ""}}
				${animation === "out" ? "translate-y-6 opacity-0" : ""}
				${animation === "idle" ? "translate-y-6 opacity-0" : ""}
				`}
    >
      <p>{message}</p>
    </div>
  );
};

export default Toast;
