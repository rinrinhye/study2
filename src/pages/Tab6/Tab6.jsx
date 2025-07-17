import useModal from "../../hooks/useModal";
import Layer from "../../components/Tab6/Layer";
import LottieBox from "../../components/Tab6/Lottie/LottieBox";
import Button from "../../components/Common/Button";

export default function Tab6() {
	const modal = useModal();

	return (
		<>
			<div className='relative py-8'>
				<Button
					onClick={modal.toggle}
					text={"open Layer"}
					isExpanded={modal.isOpen ? true : false}
					ariaControls='tab6-modal'
				/>
				{modal.isOpen && <Layer modal={modal} />}
			</div>
			<LottieBox />
		</>
	);
}
