import styled from "styled-components";
import CategoryItem from "./CategoryItem";

export default function CategoryList({
	categories,
	updateCategoryName,
	curCategory,
}) {
	return (
		<List>
			{categories.map((category) => {
				const { sdBrandName, sdBrandSeq, brandLogoImage } = category;
				return (
					<CategoryItem
						key={sdBrandSeq}
						sdBrandName={sdBrandName}
						updateCategoryName={updateCategoryName}
						brandLogoImage={
							curCategory === sdBrandName
								? brandLogoImage.onImageUrl
								: brandLogoImage.offImageUrl
						}
						curCategory={curCategory}
					/>
				);
			})}
		</List>
	);
}

const List = styled.ul`
	display: flex;
	gap: 12px;
	justify-content: center;
	margin-bottom: 40px;
`;
