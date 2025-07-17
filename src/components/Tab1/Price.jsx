function PriceSale({ discountRate, price }) {
	return (
		<div className={` ${discountRate > 0 ? "mb-1 text-[#da120d]" : ""}`}>
			{discountRate > 0 && (
				<span className='text-sm'>{discountRate}%</span>
			)}
			<strong>{price}</strong>
			<span>원</span>
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
		<div>
			{hasCoupon && (
				<span className='text-[#da120d] text-[11px] [&+del]:mt-0.5'>
					쿠폰적용가
				</span>
			)}
			{price !== discountPrice && (
				<del className='text-[11px] text-[#888]'>
					<strong>{price}</strong>원
				</del>
			)}
			<PriceSale price={discountPrice} discountRate={discountRate} />
		</div>
	);
}
