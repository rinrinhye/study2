import CartBox from "./CartBox";
import NameBox from "./NameBox";
import PriceBox from "./PriceBox";
import ImageBox from "./ImageBox";
import RatingBox from "./RatingBox";
import styled from "styled-components";
import CouponBadge from "./CouponBadge";

export default function ProductCard({ product }) {
	const {
		itemName,
		imageUrl,
		buyCount,
		reviewPoint,
		itemPrice,
		sellPrice,
		discountRate,
		tagLabels,
		couponDiscount,
	} = product;

	const priceInfo = { itemPrice, discountRate, sellPrice };

	return (
		<Card>
			<a href=""></a>
			<ImageBox imageUrl={imageUrl} tagLabels={tagLabels} />
			<CartBox />
			<NameBox itemName={itemName} />
			<PriceBox {...priceInfo} />
			<RatingBox reviewPoint={reviewPoint} buyCount={buyCount} />
			{couponDiscount && <CouponBadge text={couponDiscount?.discountRate} />}
		</Card>
	);
}

const Card = styled.div`
	max-width: 224px;
`;
