import {useState} from "react";
import Button from "../../Common/Button";
import FilterBox from "./FilterBox";
import LayerFilter from "./LayerFilter";
import {FilterContextProvider} from "./filterContext";

const ContextArea = () => {
	const [isOpen, setOpen] = useState(false);

	const onClose = () => {
		setOpen((p) => !p);
	};

	return (
		<FilterContextProvider>
			<div className='w-1/3'>
				<p className='text-2xl py-4 mb-4 font-semibold border-b-1 border-gray-400'>contextArea</p>
				<Button text={"openLayer"} onClick={onClose} />
				<FilterBox />
				<LayerFilter isOpen={isOpen} onClose={onClose} />
			</div>
		</FilterContextProvider>
	);
};

export default ContextArea;
