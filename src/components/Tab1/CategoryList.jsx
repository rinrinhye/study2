import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { GrNext, GrPrevious } from "react-icons/gr";
import CategoryItem from "../Tab1/CategoryItem";

const navBtnClasses = `absolute top-1/2 -translate-y-1/2 z-10 [&.swiper-button-disabled]:hidden hidden lg:block`;

const swiperConfig = {
	modules: [Navigation],
	navigation: {
		prevEl: ".prev-button",
		nextEl: ".next-button",
	},
	slidesPerView: "auto",
	spaceBetween: 4,
	breakpoints: {
		1024: {
			spaceBetween: 20,
			navigation: {
				prevEl: ".prev-button",
				nextEl: ".next-button",
			},
		},
	},
};

export default function CategoryList({ categories, curGroupCode }) {
	return (
		<div className='category-slide relative py-4 lg:mx-auto lg:max-w-[952px]'>
			<button
				className={`${navBtnClasses} -left-10 prev-button`}
				type='button'
			>
				<GrPrevious size={20} color='gray' />
			</button>
			<button
				className={`${navBtnClasses} -right-10 next-button`}
				type='button'
			>
				<GrNext size={20} color='gray' />
			</button>
			<Swiper className=' category-slide' {...swiperConfig}>
				{categories.map((item) => (
					<SwiperSlide key={item.groupCode}>
						<CategoryItem {...item} curGroupCode={curGroupCode} />
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	);
}
