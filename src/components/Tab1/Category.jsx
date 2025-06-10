import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { Link } from "react-router";
import "swiper/css";

export default function Category({ categories, curGroupCode }) {
	return (
		<div className="box__category">
			<button className="swiper-button-prev" type="button">
				&lt;
			</button>
			<button className="swiper-button-next" type="button">
				&gt;
			</button>
			<Swiper
				className="category-slide"
				modules={[Navigation]}
				slidesPerView={"auto"}
				spaceBetween={4}
				breakpoints={{
					1024: {
						spaceBetween: 20,
						navigation: {
							nextEl: ".swiper-button-next",
							prevEl: ".swiper-button-prev",
						},
					},
				}}
			>
				{categories.map((item) => {
					const { groupName, imageUrl, groupCode } = item;

					return (
						<SwiperSlide key={groupCode}>
							<Link
								to={`/tab1?groupCode=${groupCode}`}
								className={curGroupCode === groupCode ? "active" : ""}
							>
								<img src={imageUrl} alt="" />
								<span>{groupName}</span>
							</Link>
						</SwiperSlide>
					);
				})}
			</Swiper>
		</div>
	);
}
