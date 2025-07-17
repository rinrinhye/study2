import styled from "styled-components";
import Tag from "./Tag";

export default function ImageBox({ imageUrl, tagLabels }) {
	return (
		<ProductImage>
			<img src={imageUrl} alt='' />
			{tagLabels?.length > 0 && <Tag text={tagLabels[0].text} />}
		</ProductImage>
	);
}

const ProductImage = styled.div`
	position: relative;
	border-radius: 8px;
	color: white;
	overflow: hidden;
	max-width: 224px;

	img {
		width: 100%;
		object-fit: contain;
	}

	span {
		position: absolute;
		top: 0;
		left: 0;
		border-bottom-right-radius: 8px;
		background: #00c400d5;
		color: white;
		padding: 12px;
		font-size: 14px;
	}
`;
