const Button = ({ id, onClick, text, ref, isExpanded, ariaControls }) => {
	return (
		<button
			className='px-4 py-2 rounded-sm border-1'
			ref={ref}
			id={id}
			type='button'
			onClick={onClick}
			aria-haspopup='dialog'
			aria-expanded={isExpanded}
			aria-controls={ariaControls}
		>
			{text}
		</button>
	);
};

export default Button;
