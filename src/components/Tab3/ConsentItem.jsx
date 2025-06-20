import { useState } from "react";
import ToggleButton from "./ToggleButton";

const ConsentItem = ({
	inputId,
	name,
	title,
	desc,
	checked,
	handleCheckbox,
}) => {
	const [isOpen, setIsOpen] = useState(false);

	const handleDescBox = () => {
		setIsOpen((prev) => !prev);
	};

	return (
		<li>
			<input
				type="checkbox"
				name={name}
				id={inputId}
				checked={checked}
				onChange={() => handleCheckbox(inputId)}
			/>
			<label htmlFor={inputId}>{title}</label>
			<ToggleButton
				checked={checked}
				isOpen={isOpen}
				handleDescBox={handleDescBox}
			/>
			{isOpen && <div>{desc}</div>}
		</li>
	);
};

export default ConsentItem;
