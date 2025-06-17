import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import ProductCard from "./ProductCard";
import { Navigation } from "swiper/modules";
import styled from "styled-components";
import { GrPrevious, GrNext } from "react-icons/gr";

export default function ProductList({ products }) {
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
			<PrevButton type="button" className="button__prev">
				<GrPrevious />
			</PrevButton>
			<NextButton type="button" className="button__next">
				<GrNext />
			</NextButton>
			<Swiper {...swiperConfig}>
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

	> button {
		position: absolute;
		top: 80px;
		width: 42px;
		height: 42px;
		border: 1px solid #888;
		border-radius: 50%;
		z-index: 10;
		background-color: #fff;
	}
`;

const PrevButton = styled.button`
	left: -21px;
`;
const NextButton = styled.button`
	right: -21px;
`;
