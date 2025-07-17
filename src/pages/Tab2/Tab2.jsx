import { useEffect, useState } from "react";
import CategoryList from "../../components/Tab2/CategoryList";
import ProductList from "../../components/Tab2/ProductList";

export default function Tab2() {
	const [isLoading, setLoading] = useState(true);
	const [isError, setError] = useState(null);
	const [categories, setCategories] = useState([]);
	const [curCategory, setCurCategory] = useState("");

	useEffect(() => {
		setLoading(true);

		const fetchData = async () => {
			try {
				const res = await fetch("/tab2/data.json");
				const data = await res.json();
				setCategories(data.catalogs);
				setCurCategory(data.catalogs[0]?.sdBrandName);
			} catch (error) {
				console.log(error);
				setError(error.message);
			} finally {
				setLoading(false);
			}
		};

		fetchData();
	}, []);

	const updateCategoryName = (categoryName) => {
		setCurCategory(categoryName);
	};

	if (isLoading) return <div>Loading</div>;
	if (isError) return <div>오류 {isError}</div>;

	const filteredProducts =
		categories.find((category) => category.sdBrandName === curCategory)
			?.items || [];

	return (
		<div className='max-w-[1000px] mx-auto mt-10'>
			<CategoryList
				updateCategoryName={updateCategoryName}
				categories={categories}
				curCategory={curCategory}
			/>
			<ProductList
				products={filteredProducts}
				curCategory={curCategory}
			/>
		</div>
	);
}
