import checkAnimation from "../../../check.json";
import { useRef, useState } from "react";
import CartButton from "../../Tab2/CartButton";
import ModalPortal from "../../Common/ModalPortal";
import Lottie from "lottie-react";

const LottieBox = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isFinished, setIsFinished] = useState(false);
  const lottieRef = useRef();

  // const handleButtonClick = () => {
  //   setIsVisible(true);
  //   setIsFinished(false);

  //   lottieRef.current?.goToAndPlay(0, true);
  // };

  const handleButtonClick = () => {
    // 1. 애니메이션 끝나고도 setVisible이 false된 상태에서 다시 true가 되도록 강제 리셋
    setIsVisible(false);
    setIsFinished(false);

    // 2. 한 프레임 쉬고 다시 보여주기 (unmount → mount)
    setTimeout(() => {
      setIsVisible(true);
      requestAnimationFrame(() => {
        lottieRef.current?.goToAndPlay(0, true);
      });
    }, 10); // 아주 짧은 시간 (10~20ms)
  };

  // const handleLottieComplete = () => {
  //   setIsFinished(true);
  //   setTimeout(() => {
  //     setIsVisible(false);
  //     setIsFinished(false);
  //   }, 300);
  // };

  const handleLottieComplete = () => {
    setIsFinished(true);

    // 사라지는 애니메이션 주고 제거
    setTimeout(() => {
      setIsVisible(false); // Unmount
      setIsFinished(false); // 상태 초기화
    }, 300); // 트랜지션 시간과 맞춰줌
  };

  return (
    <>
      <div className=" relative w-[500px] mx-auto bg-blue-50 h-[400px]">
        <CartButton handleClick={handleButtonClick} />
      </div>
      {isVisible && (
        <Lottie
          lottieRef={lottieRef}
          animationData={checkAnimation}
          loop={false}
          autoplay={false}
          className={`absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 top-1/2   ${
            isFinished
              ? "opacity-0 translate-x-[80%] translate-y-[-200%] scale-0 transition-all duration-300 ease-in-out"
              : "-translate-x-1/2 -translate-y-1/2"
          }`}
          onComplete={handleLottieComplete}
        />
      )}
    </>
  );
};

export default LottieBox;
