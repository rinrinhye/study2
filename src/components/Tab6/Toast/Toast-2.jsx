import { useEffect, useState, useRef } from "react";
import ModalPortal from "../../Common/ModalPortal";

/* 

onTransitionEnd 활용

*/

const Toast2 = ({ showToast, message, onClose }) => {
	const [isVisible, setIsVisible] = useState(false); // 실제 표시 여부
	const [animateOut, setAnimateOut] = useState(false);

	const toastRef = useRef(null);
	const timerRef = useRef(null);

	useEffect(() => {
		if (showToast) {
			setIsVisible(true);
			setAnimateOut(false);

			// 3초 후에 사라지는 애니메이션 시작
			timerRef.current = setTimeout(() => {
				setAnimateOut(true);
			}, 3000);
		} else {
			// showToast false면 즉시 애니메이션 시작
			clearTimeout(timerRef.current);
			setAnimateOut(true);
		}
	}, [showToast]);

	// transitionend 이벤트로 애니 종료 감지
	useEffect(() => {
		const handleTransitionEnd = (e) => {
			if (e.propertyName === "opacity" && animateOut) {
				setIsVisible(false); // 완전 숨기기
				if (onClose) onClose();
			}
		};

		const node = toastRef.current;
		if (node) {
			node.addEventListener("transitionend", handleTransitionEnd);
		}

		return () => {
			if (node) {
				node.removeEventListener("transitionend", handleTransitionEnd);
			}
		};
	}, [animateOut, onClose]);

	if (!isVisible) return null;

	return (
		<ModalPortal containerId='toast-root'>
			<div
				ref={toastRef}
				className={`fixed bottom-10 left-1/2 transform -translate-x-1/2
                    bg-blue-900 text-white rounded-2xl px-6 py-4 w-fit z-[9999]
                    transition-all duration-500
                    ${animateOut ? "opacity-0 translate-y-4" : ""}
                  `}
			>
				<p>{message}</p>
			</div>
		</ModalPortal>
	);
};

export default Toast2;
