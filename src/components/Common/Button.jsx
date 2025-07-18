const Button = ({ id, onClick, text, ref, isExpanded, ariaControls }) => {
	return (
		<button
			className='px-4 py-2 rounded-2xl border-1'
			type='button'
			ref={ref}
			onClick={onClick}
			id={id}
			aria-haspopup='dialog'
			aria-expanded={isExpanded}
			aria-controls={ariaControls}
		>
			{text}
		</button>
	);
};

export default Button;
