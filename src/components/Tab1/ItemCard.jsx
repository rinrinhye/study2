import useDeviceType from "../../hooks/useDeviceType";
import Badge from "./Badge";
import Price from "./Price";
import ProductImage from "./ProductImage";
import StarRate from "./StarRate";

export default function ItemCard({ products }) {
	const {
		goodsCode,
		goodsName,
		imageUrl,
		rank,
		price,
		discountPrice,
		discountRate,
		hasCoupon,
		avgStarPoint,
		reviewCount,
		lmos,
	} = products;

	const priceInfo = {
		hasCoupon,
		price,
		discountPrice,
		discountRate,
	};

	const device = useDeviceType();

	return (
		<li
			className={`box__product${rank === 1 ? " is-rank1" : ""}`}
			key={goodsCode}
		>
			<ProductImage imageUrl={imageUrl} rank={rank} />
			<div className="box__product-info">
				<Price {...priceInfo} />
				<p className="text__name">{goodsName}</p>
				{avgStarPoint && (
					<StarRate avgStarPoint={avgStarPoint} reviewCount={reviewCount} />
				)}
				{device !== "desktop" && lmos[0] && <Badge lmos={lmos} />}
			</div>
		</li>
	);
}
