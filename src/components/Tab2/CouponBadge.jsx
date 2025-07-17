import styled from "styled-components";
import { BsFillTagFill } from "react-icons/bs";

export default function CouponBadge({ text }) {
	return (
		<Badge className='badge'>
			<BsFillTagFill size={12} color='#00c400' /> {text}% 쿠폰
		</Badge>
	);
}

const Badge = styled.div`
	margin-top: 6px;
	border-radius: 16px;
	border: 1px solid #eeeeee;
	font-size: 12px;
	width: fit-content;
	padding: 4px 8px;

	svg {
		margin-bottom: -2px;
		display: inline;
	}
`;
