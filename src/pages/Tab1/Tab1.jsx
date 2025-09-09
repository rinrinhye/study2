import {use} from "react";
import CategoryList from "../../components/Tab1/CategoryList";
import "./category-slide.css";
import {useSearchParams} from "react-router";
import ProductList from "../../components/Tab1/ProductList";

const dataPromise = Promise.all([fetch("/tab1/categoryData.json").then((r) => r.json()), fetch("/tab1/itemData.json").then((r) => r.json()), new Promise((resolve) => setTimeout(resolve, 3000))]).then(([categoryRes, productRes]) => ({
	categories: categoryRes.categoryData,
	products: productRes,
}));

export default function Tab1() {
	// 👇 캐시된(모듈 스코프) Promise를 읽기 → Suspense가 정상 동작
	const {categories, products} = use(dataPromise);
	const [searchParams] = useSearchParams();
	const curGroupCode = searchParams.get("groupCode") || "100000000";

	const curProducts = products[curGroupCode] ?? products[100000000] ?? [];

	return (
		<div className='tab1'>
			<header className='py-4 text-center text-xl font-semibold border-y-1 border-[#e0e0e0] text-gray-800'>베스트</header>
			<CategoryList categories={categories} curGroupCode={curGroupCode} />
			<ProductList curProducts={curProducts} />
		</div>
	);
}

// export default function Tab1() {
// 	const [loading, setLoading] = useState(true);
// 	const [categories, setCategories] = useState([]);
// 	const [products, setProducts] = useState([]);

// 	// const { search } = useLocation();
// 	// const params = new URLSearchParams(search);
// 	// const curGroupCode = params.get("groupCode") || "100000000";

// 	const [searchParams] = useSearchParams();
// 	const curGroupCode = searchParams.get("groupCode") || "100000000";

// 	useEffect(() => {
// 		setLoading(true); // 요청 시작

// 		Promise.all([fetch("/tab1/categoryData.json").then((res) => res.json()), fetch("/tab1/itemData.json").then((res) => res.json())])
// 			.then(([categoryRes, productRes]) => {
// 				setCategories(categoryRes.categoryData);
// 				setProducts(productRes);
// 			})
// 			.catch((error) => {
// 				console.error("데이터 로딩 중 오류 발생:", error);
// 			})
// 			.finally(() => {
// 				setLoading(false);
// 			});
// 	}, []);

// 	if (loading) {
// 		return <div>로딩 중...</div>;
// 	}

// 	const curProducts = products[curGroupCode] || products[100000000];

// 	return (
// 		<div className='tab1'>
// 			<header className='py-4 text-center text-xl font-semibold border-y-1 border-[#e0e0e0] text-gray-800'>베스트</header>
// 			<CategoryList categories={categories} curGroupCode={curGroupCode} />
// 			<ProductList curProducts={curProducts} />
// 		</div>
// 	);
// }
