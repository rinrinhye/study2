import {Provider} from "jotai";
import Button from "../../Common/Button";
import FilterBox from "./FilterBox";
import LayerFilter from "./LayerFilter";
import {useState} from "react";

const AtomArea = () => {
	const [isOpen, setOpen] = useState(false);

	const onClose = () => {
		setOpen((p) => !p);
	};

	return (
		<Provider>
			<div className='w-1/3'>
				<p className='text-2xl py-4 mb-4 font-semibold border-b border-gray-400'>atomtArea</p>
				<Button text={"openLayer"} onClick={onClose} />
				<FilterBox />
				<LayerFilter isOpen={isOpen} onClose={onClose} />
			</div>
		</Provider>
	);
};

export default AtomArea;
