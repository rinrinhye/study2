import { useEffect, useState } from "react";
import CategoryList from "../../components/Tab2/CategoryList";
import ProductList from "../../components/Tab2/ProductList";

const categories = [];

export default function Tab2() {
	const [isLoading, setLoading] = useState(true);
	const [categories, setCategories] = useState([]);
	const [curCategory, setCurCategory] = useState("");

	const updateCategory = (category) => {
		setCurCategory(category);
	};

	useEffect(() => {
		setLoading(true);

		const fetchData = async () => {
			try {
				const res = await fetch("/tab2/data.json");
				const data = await res.json();
				setCategories(data.catalogs);
				console.log(categories);
				setCurCategory(data.catalogs[0]?.sdBrandName);
			} catch (error) {
				console.log(error);
			}
		};

		fetchData();

		setLoading(false);
	}, []);

	const filteredProducts = categories.find(
		(category) => category.sdBrandName === curCategory
	);

	console.log(filteredProducts);

	return (
		<div>
			<CategoryList updateCategory={updateCategory} categories={categories} />
			<ProductList products={filteredProducts} />
		</div>
	);
}
