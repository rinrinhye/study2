import {useState} from "react";
import Button from "../../Common/Button";
import FilterBox from "./FilterBox";
import LayerFilter from "./LayerFilter";
import {FilterContextProvider} from "../context/filterContext";

const ContextArea = () => {
	const [isOpen, setOpen] = useState(false);

	const onClose = () => {
		setOpen((p) => !p);
	};

	return (
		<FilterContextProvider>
			{(filters) => (
				<div className='w-1/3'>
					<p className='text-2xl py-4 mb-4 font-semibold border-b border-gray-400'>contextArea</p>
					<Button text='openLayer' onClick={onClose} />
					<FilterBox filters={filters} />
					<LayerFilter isOpen={isOpen} onClose={onClose} filters={filters} />
				</div>
			)}
		</FilterContextProvider>
	);
};

export default ContextArea;
