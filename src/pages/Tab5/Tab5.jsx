import { useState } from "react";
import useModal from "../../hooks/useModal";
import LayerSearch from "../../components/Tab5/LayerSearch";

export default function Tab5() {
	const [lastFocusedButton, setLastFocusedButton] = useState(null);
	const [triggerId, setTriggerId] = useState("");
	const modal = useModal();

	const openLayer = (e) => {
		setTriggerId(e.target.id);
		setLastFocusedButton(e.currentTarget);
		modal.open();
	};

	const closeLayer = () => {
		modal.close();
		setTimeout(() => {
			lastFocusedButton?.focus();
		}, 0);
	};

	return (
		<>
			<div className='mx-auto w-[500px] my-20 flex justify-between gap-20'>
				<button
					id='button-01'
					type='button'
					onClick={openLayer}
					className='px-4 py-2 rounded-sm border-1'
					aria-haspopup='dialog'
					aria-expanded={`${
						triggerId === "button-01" && modal.isOpen ? true : false
					}`}
					aria-controls='modal-practice'
				>
					열기1
				</button>
				<button
					id='button-02'
					type='button'
					onClick={openLayer}
					className='px-4 py-2 rounded-sm border-1'
					aria-haspopup='dialog'
					aria-expanded={`${
						triggerId === "button-02" && modal.isOpen ? true : false
					}`}
					aria-controls='modal-practice'
				>
					열기2
				</button>
				<button
					id='button-03'
					type='button'
					onClick={openLayer}
					className='px-4 py-2 rounded-sm border-1'
					aria-haspopup='dialog'
					aria-expanded={`${
						triggerId === "button-03" && modal.isOpen ? true : false
					}`}
					aria-controls='modal-practice'
				>
					열기3
				</button>
			</div>
			{modal.isOpen && <LayerSearch closeLayer={closeLayer} />}
		</>
	);
}
