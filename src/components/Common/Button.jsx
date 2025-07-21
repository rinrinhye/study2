const Button = ({ id, onClick, text, ref, isExpanded, ariaControls }) => {
  return (
    <button
      className="btn bg-fuchsia-300 text-white"
      type="button"
      ref={ref}
      onClick={onClick}
      id={id}
      aria-haspopup="dialog"
      aria-expanded={isExpanded}
      aria-controls={ariaControls}
    >
      {text}
    </button>
  );
};

export default Button;
