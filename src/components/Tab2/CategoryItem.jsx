import styled from "styled-components";

export default function CategoryItem({
	sdBrandName,
	updateCategoryName,
	brandLogoImage,
	curCategory,
}) {
	return (
		<li>
			<Button
				type="button"
				onClick={() => updateCategoryName(sdBrandName)}
				curCategory={curCategory}
				sdBrandName={sdBrandName}
			>
				<img src={brandLogoImage} alt={sdBrandName} />
			</Button>
		</li>
	);
}

const Button = styled.button`
	height: 48px;
	padding: 8px 24px;
	border: 1px solid #eee;
	border-radius: 24px;

	${({ curCategory, sdBrandName }) => {
		if (curCategory === sdBrandName) {
			return `background:#00c400;`;
		}
	}}

	img {
		height: 24px;
	}
`;
