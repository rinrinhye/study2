import { useEffect, useState, useRef } from "react";
import ModalPortal from "../../Common/ModalPortal";

/* 

setTimeout만 사용

*/

const Toast = ({ showToast, message, onClose }) => {
	const [isVisible, setIsVisible] = useState(false); // 실제 표시 여부
	const [animateIn, setAnimateIn] = useState(false);
	const [animateOut, setAnimateOut] = useState(false);

	useEffect(() => {
		/*
          showToast가 true일 때:
          isVisible = true → 토스트 표시
          animateIn = true → 서서히 뜨기 시작
          2.5초 후 → animateIn = false, animateOut = true → 서서히 사라지기 시작
          3초 후 → isVisible = false → 언마운트
          showToast가 false일 때:
          바로 animateOut = true → 서서히 사라짐
          0.5초 후 → isVisible = false → 언마운트
  */
		let timerIn;
		let timerOut;

		if (showToast) {
			setIsVisible(true);
			setAnimateIn(false);
			setAnimateOut(false);

			setTimeout(() => {
				setAnimateIn(true);
			}, 0);

			timerIn = setTimeout(() => {
				setAnimateIn(false);
				setAnimateOut(true);
			}, 2500);

			timerOut = setTimeout(() => {
				setIsVisible(false);
				if (onClose) onClose();
			}, 3000);
		} else {
			setAnimateIn(false);
			setAnimateOut(true);

			timerOut = setTimeout(() => {
				setIsVisible(false);
				if (onClose) onClose();
			}, 500);
		}

		return () => {
			clearTimeout(timerIn);
			clearTimeout(timerOut);
		};
	}, [showToast]);

	if (!isVisible) return null;

	return (
		<ModalPortal containerId='toast-root'>
			<div
				className={`fixed bottom-10 left-1/2 transform -translate-x-1/2
    						bg-blue-900 text-white rounded-2xl px-6 py-4 w-fit z-[9999]
    						transition-all duration-500
      						${animateIn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
    						${animateOut ? "opacity-0 translate-y-6" : ""}
  						`}
			>
				<p>{message}</p>
			</div>
		</ModalPortal>
	);
};

export default Toast;
