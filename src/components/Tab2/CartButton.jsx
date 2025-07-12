import { IoCartOutline } from 'react-icons/io5';

const CartButton = ({ handleClick }) => {
  return (
    <button type='button' onClick={handleClick}>
      <IoCartOutline size={20} color='#fff' />
    </button>
  );
};

export default CartButton;
