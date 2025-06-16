import { useState } from "react";
import { GoHeart, GoHeartFill } from "react-icons/go";

export default function WishButton() {
	const [isLike, setLike] = useState(false);

	const handleWishButton = () => {
		setLike((prev) => !prev);
	};

	return (
		<button type="button" onClick={handleWishButton}>
			{isLike ? <GoHeartFill size={20} /> : <GoHeart size={20} />}
		</button>
	);
}
