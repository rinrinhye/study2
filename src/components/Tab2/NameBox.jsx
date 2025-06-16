import styled from "styled-components";
import WishButton from "./WishButton";

export default function NameBox({ itemName }) {
	return (
		<Box>
			<span>{itemName}</span>
			<WishButton />
		</Box>
	);
}

const Box = styled.div`
	display: flex;
	flex-wrap: nowrap;
	justify-content: space-between;
	align-items: flex-start;
	word-break: keep-all;
	font-size: 15px;
	line-height: 24px;
	margin-bottom: 4px;

	button {
		flex-basis: 32px;
	}
`;
