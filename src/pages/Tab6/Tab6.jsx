import useModal from "../../hooks/useModal";
import Layer from "../../components/Tab6/Layer";
import CartButton from "../../components/Tab2/CartButton";
import ModalPortal from "../../components/Common/ModalPortal";
import Lottie from "lottie-react";
import checkAnimation from "../../check.json";
import { useRef, useState } from "react";

export default function Tab6() {
	const modal = useModal();
	const lottieRef = useRef();
	const [isVisible, setIsVisible] = useState(false);

	return (
		<>
			<div className='relative py-8'>
				<button
					className='rounded-sm px-4 py-6 border mx-auto w-16 block'
					type='button'
					aria-haspopup='dialog'
					aria-controls='tab6-modal'
					aria-expanded={`${modal.isOpen ? true : false}`}
					onClick={modal.toggle}
				>
					버튼
				</button>
				{modal.isOpen && <Layer modal={modal} />}
			</div>
			<div className='w-[500px] mx-auto bg-blue-50 h-[400px]'>
				<CartButton />
			</div>
			<ModalPortal containerId='modal-root'>
				<Lottie
					lottieRef={lottieRef}
					animationData={checkAnimation}
					loop={false}
					autoplay={false}
				/>
			</ModalPortal>
		</>
	);
}
