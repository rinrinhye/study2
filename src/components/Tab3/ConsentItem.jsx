import {useCallback, useState} from "react";
import ToggleButton from "./ToggleButton";

const ConsentItem = ({inputId, name, title, desc, checked, handleCheckbox}) => {
	const [isOpen, setIsOpen] = useState(false);

	const handleDescBox = useCallback(() => {
		setIsOpen((prev) => !prev);
	}, []);

	return (
		<li className='py-1'>
			<div className='flex justify-between text-sm'>
				<div>
					<input type='checkbox' className='mr-1' name={name} id={inputId} checked={checked} onChange={() => handleCheckbox(inputId)} />
					<label htmlFor={inputId}>{title}</label>
				</div>
				<ToggleButton checked={checked} isOpen={isOpen} handleDescBox={handleDescBox} />
			</div>
			{isOpen && <div className='text-xs bg-gray-50 h-20 p-4 rounded-lg text-gray-600 mt-4'>{desc}</div>}
		</li>
	);
};

export default ConsentItem;
