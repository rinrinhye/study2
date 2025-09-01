import {useState} from "react";
import Button from "../../Common/Button";
import FilterBox from "./FilterBox";
import LayerFilter from "./LayerFilter";
import {FilterContextProvider} from "../context/filterContext2";

const ContextArea2 = () => {
	const [isOpen, setOpen] = useState(false);

	const onClose = () => {
		setOpen((p) => !p);
	};

	return (
		<FilterContextProvider>
			{(filters) => (
				<div>
					<p className='text-2xl py-4 mb-4 font-semibold border-b border-gray-400'>contextArea2</p>
					<Button text='openLayer' onClick={onClose} />
					<FilterBox filters={filters} />
					<LayerFilter isOpen={isOpen} onClose={onClose} filters={filters} />
				</div>
			)}
		</FilterContextProvider>
	);
};

export default ContextArea2;
