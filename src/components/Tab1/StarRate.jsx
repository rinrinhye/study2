export default function StarRate({ avgStarPoint, reviewCount }) {
	return (
		<div className="box__rating">
			<img
				src="https://script.gmarket.co.kr/starro/mobile/images/single/best/gds-star-fill.svg"
				alt=""
			/>
			<span>{avgStarPoint}</span>
			<span className="text__count">({reviewCount})</span>
		</div>
	);
}
