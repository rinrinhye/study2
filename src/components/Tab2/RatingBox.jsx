import styled from "styled-components";
import formatNumber from "../../util/formatNumber";

export default function RatingBox({ reviewPoint, buyCount }) {
	if (reviewPoint?.starPoint === 0 && buyCount === 0) return null;

	return (
		<Box>
			{reviewPoint.starPoint !== 0 && (
				<>
					<img
						className='inline-block'
						src='https://script.gmarket.co.kr/starro/mobile/images/single/best/gds-star-fill.svg'
						alt=''
					/>
					<span>{reviewPoint.starPoint}</span>(
					<span>{formatNumber(reviewPoint.reviewCount)}</span>) ·
				</>
			)}
			{buyCount !== 0 && <span>구매 {formatNumber(buyCount)}</span>}
		</Box>
	);
}

const Box = styled.div`
	margin-top: 6px;
	font-size: 13px;

	img {
		margin-bottom: -3px;
	}
`;
