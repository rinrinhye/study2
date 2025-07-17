import { useEffect, useState } from "react";
import CategoryList from "../../components/Tab1/CategoryList";
import "./category-slide.css";
import { useLocation, useSearchParams } from "react-router";
import ProductList from "../../components/Tab1/ProductList";

/* 

async await 코드로 바꿔보기
스타일 수정?
로딩중, 에러 상태 관리?

*/

export default function Tab1() {
	const [loading, setLoading] = useState(true);
	const [categories, setCategories] = useState([]);
	const [products, setProducts] = useState([]);

	// const { search } = useLocation();
	// const params = new URLSearchParams(search);
	// const curGroupCode = params.get("groupCode") || "100000000";

	const [searchParams] = useSearchParams();
	const curGroupCode = searchParams.get("groupCode") || "100000000";

	useEffect(() => {
		setLoading(true); // 요청 시작

		Promise.all([
			fetch("/tab1/categoryData.json").then((res) => res.json()),
			fetch("/tab1/itemData.json").then((res) => res.json()),
		])
			.then(([categoryRes, productRes]) => {
				setCategories(categoryRes.categoryData);
				setProducts(productRes);
			})
			.catch((error) => {
				console.error("데이터 로딩 중 오류 발생:", error);
			})
			.finally(() => {
				setLoading(false);
			});
	}, []);

	if (loading) {
		return <div>로딩 중...</div>;
	}

	const curProducts = products[curGroupCode] || products[100000000];

	return (
		<div className='tab1'>
			<header className='py-4 text-center text-xl font-semibold border-y-1 border-[#e0e0e0] text-gray-800'>
				베스트
			</header>
			<CategoryList categories={categories} curGroupCode={curGroupCode} />
			<ProductList curProducts={curProducts} />
		</div>
	);
}
