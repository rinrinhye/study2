import useDeviceType from "../../hooks/useDeviceType";
import Badge from "./Badge";
import Price from "./Price";
import ProductImage from "./ProductImage";
import StarRate from "./StarRate";

export default function ProductItem({ products }) {
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

	const rankTopStyles = ``;

	return (
		<li
			className={`box__product${
				rank === 1
					? " col-span-2 max-w-[70%] justify-self-center md:col-span-4 lg:col-span-1 lg:max-w-full"
					: ""
			}`}
			key={goodsCode}
		>
			<ProductImage imageUrl={imageUrl} rank={rank} />
			<div className='box__product-info'>
				<Price {...priceInfo} />
				<p className='text-sm leading-5 line-clamp-2'>{goodsName}</p>
				{avgStarPoint && (
					<StarRate
						avgStarPoint={avgStarPoint}
						reviewCount={reviewCount}
					/>
				)}
				{device !== "desktop" && lmos[0] && <Badge lmos={lmos} />}
			</div>
		</li>
	);
}
