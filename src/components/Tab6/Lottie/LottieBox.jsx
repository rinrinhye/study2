import checkAnimation from "../../../check.json";
import { useRef, useState } from "react";
import CartButton from "../../Tab2/CartButton";
import Lottie from "lottie-react";

const LottieBox = () => {
	// 'idle' → 아무것도 안 보여줌
	// 'playing' → 중앙에서 재생
	// 'exiting' → 사라지는 중
	const [animationState, setAnimationState] = useState("idle");
	const lottieRef = useRef();

	const handleButtonClick = () => {
		// 이미 재생 중일 때 무시하고싶다면 ?
		// if (animationState === "playing") return;

		setAnimationState("playing");
		requestAnimationFrame(() => {
			lottieRef.current?.stop();
			lottieRef.current?.goToAndPlay(0, true);
		});
	};

	const handleLottieComplete = () => {
		setAnimationState("exiting");
	};

	const handleTransitionEnd = () => {
		if (animationState === "exiting") {
			setAnimationState("idle");
		}
	};

	return (
		<>
			<div className='text-center mt-4'>
				<CartButton handleClick={handleButtonClick} />
			</div>

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
			</div>
		</>
	);
};

export default LottieBox;
