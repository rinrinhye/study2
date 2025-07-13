const Dimmed = ({ handleClick }) => {
  return (
    <div
      className="fixed inset-0 bg-black/20 pointer-events-auto"
      onClick={handleClick}
      aria-hidden="true"
      tabIndex={-1}
    ></div>
  );
};

export default Dimmed;
