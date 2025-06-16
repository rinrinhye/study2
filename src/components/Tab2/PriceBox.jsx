import styled from "styled-components";
import formatNumber from "../../util/formatNumber";

export default function PriceBox({ itemPrice, discountRate, sellPrice }) {
	return (
		<Box>
			<strong>{formatNumber(itemPrice)}</strong>
			<span>원</span>
			{discountRate > 0 && (
				<DiscountBox>
					<span>{discountRate}%</span>
					<del>
						<span>{formatNumber(sellPrice)}</span>
						<span>원</span>
					</del>
				</DiscountBox>
			)}
		</Box>
	);
}

const Box = styled.div`
	strong {
		font-weight: 700;
		font-size: 20px;
	}
`;

const DiscountBox = styled.div`
	margin-top: 4px;

	> span {
		font-size: 14px;
		color: #eb7c21;
	}

	del {
		font-size: 14px;
		margin-left: 4px;
		color: #888;

		span {
			color: inherit;
		}
	}
`;
