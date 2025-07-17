import { Swiper, SwiperSlide } from "swiper/react";
import ProductCard from "./ProductCard";
import { Navigation } from "swiper/modules";
import styled from "styled-components";
import { GrPrevious, GrNext } from "react-icons/gr";

export default function ProductList({ products, curCategory }) {
	const swiperConfig = {
		slidesPerView: 5,
		spaceBetween: 12,
		modules: [Navigation],
		navigation: {
			nextEl: ".button__next",
			prevEl: ".button__prev",
		},
		slidesPerGroup: 5,
		loop: true,
	};

	return (
		<ProductSlide>
			<button
				type='button'
				className='button__prev absolute top-[80px] -left-12 text-center p-2'
			>
				<GrPrevious className='inline' color='gray' size={24} />
			</button>
			<button
				type='button'
				className='button__next absolute top-[80px] -right-12 p-2'
			>
				<GrNext className='inline' color='gray' size={24} />
			</button>
			<Swiper {...swiperConfig} key={curCategory}>
				{products.map((product) => (
					<SwiperSlide>
						<ProductCard product={product} />
					</SwiperSlide>
				))}
			</Swiper>
		</ProductSlide>
	);
}

const ProductSlide = styled.div`
	position: relative;

}
`;
