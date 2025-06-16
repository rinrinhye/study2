import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import ProductCard from "./ProductCard";
import { Navigation } from "swiper/modules";

export default function ProductList({ products }) {
	const swiperConfig = {
		slidesPerView: 5,
		spaceBetween: 12,
		modules: [Navigation],
	};

	return (
		<Swiper {...swiperConfig}>
			{products.map((product) => (
				<SwiperSlide>
					<ProductCard product={product} />
				</SwiperSlide>
			))}
		</Swiper>
	);
}
