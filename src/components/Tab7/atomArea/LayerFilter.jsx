import {useEffect, useRef} from "react";
import {createPortal} from "react-dom";
import LayerFilterList from "./LayerFilterList";
import {resetFilterAtom} from "../atoms/filters";
import {useSetAtom} from "jotai";

const LayerFilter = ({isOpen, onClose}) => {
	const containerRef = useRef(null);
	const reset = useSetAtom(resetFilterAtom);

	if (!containerRef.current && typeof document !== "undefined") {
		containerRef.current = document.createElement("div");
		containerRef.current.id = "modal-root";
	}

	useEffect(() => {
		if (!containerRef.current) return;
		if (isOpen) document.body.appendChild(containerRef.current);
		else containerRef.current.remove();
		return () => containerRef.current.remove();
	}, [isOpen]);

	return createPortal(
		<div className={`relative inset-0 w-full bg-amber-100 h-full`}>
			<div className='fixed inset-0 bg-black/60' onClick={onClose}></div>
			<div className='fixed bg-white w-80 h-full right-0 top-0'>
				<header className='border-b border-gray-300 py-2 px-6 flex justify-between'>
					<div className='flex gap-2'>
						<h2 className='text-lg font-[500]'>필터(Atom)</h2>
						<button type='button' className='text-xs border-1 border-gray-300 px-2 rounded-2xl' onClick={reset}>
							reset
						</button>
					</div>
					<button type='button' onClick={onClose}>
						X
					</button>
				</header>
				<LayerFilterList />
			</div>
		</div>,
		containerRef.current
	);
};

export default LayerFilter;
