import { IoChevronDownOutline, IoChevronUpOutline } from "react-icons/io5";

const ToggleButton = ({ isOpen, handleDescBox }) => {
	return (
		<button type="button" onClick={handleDescBox}>
			{isOpen === true ? (
				<>
					간단히 <IoChevronUpOutline />
				</>
			) : (
				<>
					자세히 <IoChevronDownOutline />
				</>
			)}
		</button>
	);
};

export default ToggleButton;
