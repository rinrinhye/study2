function PriceSale({ discountRate, price }) {
	return (
		<div className={`box__price--sale ${discountRate > 0 ? "is-sale" : ""}`}>
			{discountRate > 0 && <span className="text__rate">{discountRate}%</span>}
			<strong className="text__sale-price">{price}</strong>
			<span className="text__unit">원</span>
		</div>
	);
}

export default function Price({
	hasCoupon,
	price,
	discountPrice,
	discountRate,
}) {
	return (
		<div className="box__price">
			{!hasCoupon && discountRate === 0 && (
				<PriceSale price={price} discountRate={discountRate} />
			)}
			{discountRate > 0 && (
				<>
					{hasCoupon && <span className="text__coupon">쿠폰적용가</span>}
					<del className="text__regular-price">
						<strong>{price}</strong>원
					</del>
					<PriceSale price={discountPrice} discountRate={discountRate} />
				</>
			)}
		</div>
	);
}
