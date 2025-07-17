import ProductItem from "./ProductItem";

const ProductList = ({ curProducts }) => {
	return (
		<ul className='py-4 px-5 grid grid-cols-2 gap-2 border-gray-400 md:grid-cols-4 md:max-w-[744px] md:mx-auto md:gap-4'>
			{curProducts.map((items) => (
				<ProductItem products={items} key={items.goodsCode} />
			))}
		</ul>
	);
};

export default ProductList;
