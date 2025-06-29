const Card = ({ item, isActive }) => {
  const { title, desc, imageUrl } = item;

  return (
    <div
      className={`relative transition-all duration-200 ease-in-out rounded-lg overflow-hidden
      ${isActive ? 'h-[420px] z-10' : 'h-[360px] z-0'}
    `}
    >
      <div
        className={`absolute inset-0 bg-black ${
          isActive ? 'opacity-0' : 'opacity-30'
        }`}
      ></div>
      <img src={imageUrl} alt="" className="object-cover w-full h-full" />
      <div
        className={`
          absolute bottom-4 left-4 text-white transition-opacity duration-500  drop-shadow
          ${isActive ? 'opacity-100' : 'opacity-0'}
        `}
      >
        <strong>{title}</strong>
        <p>{desc}</p>
      </div>
    </div>
  );
};

export default Card;
