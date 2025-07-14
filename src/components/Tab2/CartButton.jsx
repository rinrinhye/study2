import { IoCartOutline } from "react-icons/io5";

const CartButton = ({ handleClick }) => {
	return (
		<button
			type='button'
			onClick={handleClick}
			className='bg-yellow-400 px-6 py-2 rounded-2xl'
		>
			<IoCartOutline size={20} color='#fff' />
		</button>
	);
};

export default CartButton;
