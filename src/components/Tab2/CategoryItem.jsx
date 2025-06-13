export default function CategoryItem({ sdBrandName, updateCategory }) {
	return (
		<button type="button" onClick={() => updateCategory(sdBrandName)}>
			{sdBrandName}
		</button>
	);
}
