import { IoMdClose } from "react-icons/io";
import Dimmed from "./Dimmed";
import { useEffect } from "react";

const layerStyles = `absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white w-[423px] min-h-[300px] h-auto rounded-xl shadow-[0_14px_28px_rgba(0,0,0,0.05),_0_10px_10px_rgba(0,0,0,0.04)] border border-[#eeeeee] pointer-events-auto`;

const Layer = ({ title, onClose, children, className }) => {
	useEffect(() => {
		const body = document.querySelector("body");
		const root = document.createElement("div");
		root.id = "modal-root";
		body.appendChild(root);

		return root.remove();
	}, []);

	return createPortal(
		<>
			<Dimmed />
			<div className={`${layerStyles} ${className}`}>
				{title && (
					<div className='text-center'>
						<h3>{title}</h3>
					</div>
				)}
				{children}
				<button
					className='absolute top-4 right-4'
					type='button'
					onClick={onClose}
				>
					<IoMdClose size={24} />
				</button>
			</div>
		</>,
		containerRef.current
	);
};

export default Layer;
