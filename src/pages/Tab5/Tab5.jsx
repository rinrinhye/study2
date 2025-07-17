import { useRef } from "react";
import Button from "../../components/Common/Button";
import useModal from "../../hooks/useModal";
import LayerSearch from "../../components/Tab5/LayerSearch";

export default function Tab5() {
	const buttonRefs = useRef([]);
	const activeButtonRef = useRef(null);
	const modal = useModal();

	const openLayer = (e) => {
		activeButtonRef.current = e.currentTarget;
		modal.open();
	};

	const closeLayer = () => {
		modal.close();
		// 모달 닫힐 때 포커스 복귀
		setTimeout(() => {
			activeButtonRef.current?.focus();
		}, 0);
	};

	return (
		<>
			<div className='mx-auto w-[500px] my-20 flex justify-between gap-20'>
				{["open layer 1", "open layer 2", "open layer 3"].map(
					(label, idx) => {
						const id = `button-${idx}`;
						const isExpanded =
							modal.isOpen && activeButtonRef.current.id === id;

						return (
							<Button
								key={id}
								id={id}
								text={label}
								onClick={openLayer}
								ariaControls='modal-search'
								isExpanded={isExpanded}
								ref={(el) => {
									buttonRefs.current[idx] = el;
								}}
							/>
						);
					}
				)}
			</div>

			{modal.isOpen && (
				<LayerSearch id='modal-search' closeLayer={closeLayer} />
			)}
		</>
	);
}
