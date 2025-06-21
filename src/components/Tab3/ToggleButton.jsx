import { IoChevronDownOutline, IoChevronUpOutline } from 'react-icons/io5';

const ToggleButton = ({ isOpen, handleDescBox }) => {
  return (
    <button
      type="button"
      className="text-xs text-gray-500 cursor-pointer"
      onClick={handleDescBox}
    >
      {isOpen === true ? (
        <>
          간단히 <IoChevronUpOutline className="inline mb-1" />
        </>
      ) : (
        <>
          자세히 <IoChevronDownOutline className="inline mb-1" />
        </>
      )}
    </button>
  );
};

export default ToggleButton;
