import { useEffect, useState } from "react";
import Category from "../../components/Tab1/Category";
import "./Tab1.css";
import { useLocation } from "react-router";
import ItemCard from "../../components/Tab1/ItemCard";

export default function Tab1() {
	const [categories, setCategories] = useState([]);
	const [loading, setLoading] = useState(true);
	const [products, setProducts] = useState([]);

	const { search } = useLocation();
	const params = new URLSearchParams(search);
	const curGroupCode = params.get("groupCode") || "100000000";

	useEffect(() => {
		setLoading(true); // 요청 시작

		Promise.all([
			fetch("/categoryData.json").then((res) => res.json()),
			fetch("/itemData.json").then((res) => res.json()),
		]).then(([categoryRes, productRes]) => {
			setCategories(categoryRes.categoryData);
			setProducts(productRes);

			setLoading(false);
		});
	}, []);

	if (loading) {
		return <div>로딩 중...</div>;
	}

	const curProducts = products[curGroupCode] || products[100000000];

	return (
		<div className="tab1">
			<header className="header">베스트</header>
			<Category categories={categories} curGroupCode={curGroupCode} />
			<ul className="list__product">
				{curProducts.map((items) => (
					<ItemCard products={items} key={items.goodsCode} />
				))}
			</ul>
		</div>
	);
}
