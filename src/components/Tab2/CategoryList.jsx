import CategoryItem from "./CategoryItem";

export default function CategoryList({ categories, updateCategory }) {
	return (
		<ul>
			{categories.map((cate) => (
				<CategoryItem />
			))}
		</ul>
	);
}
