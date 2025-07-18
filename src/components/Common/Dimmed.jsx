const Dimmed = ({ onClick }) => {
	return (
		<div
			className='fixed inset-0 bg-black/20 pointer-events-auto'
			onClick={onClick}
			aria-hidden='true'
			tabIndex={-1}
		></div>
	);
};

export default Dimmed;
