import { Swiper, SwiperSlide } from "swiper/react";
import Card from "./Card";
import { useRef, useState } from "react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { GrPrevious, GrNext } from "react-icons/gr";
import "./slide01.css";
import TogglePlayButton from "./TogglePlayButton";

const slidesData = [
	{
		title: "햄스터",
		desc: "햄햄햄햄햄햄햄햄햄햄햄",
		imageUrl:
			"https://images.unsplash.com/photo-1425082661705-1834bfd09dca?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8JUVEJTk2JTg0JUVDJThBJUE0JUVEJTg0JUIwfGVufDB8fDB8fHww",
	},
	{
		title: "??",
		desc: "~~~~~~~~~~~~~",
		imageUrl:
			"https://media.istockphoto.com/id/1154370446/ko/%EC%82%AC%EC%A7%84/%ED%9D%B0%EC%83%89-%EB%B0%B0%EA%B2%BD%EC%97%90-%EA%B3%A0%EB%A6%BD-%EB%90%9C-%EB%B0%94%EC%9C%84-%EC%A0%9C%EC%8A%A4%EC%B2%98%EB%A5%BC-%EB%B3%B4%EC%97%AC%EC%A3%BC%EB%8A%94-%EB%85%B9%EC%83%89-%EC%84%A0%EA%B8%80%EB%9D%BC%EC%8A%A4%EC%97%90-%EC%9E%AC%EB%AF%B8-%EB%84%88%EA%B5%AC%EB%A6%AC.webp?a=1&b=1&s=612x612&w=0&k=20&c=onuIvbQ9itmcyw1iSPeclBxqS6JW2_oLFCe1pcDCk4k=",
	},
	{
		title: "눈",
		desc: "눈이다~!~!~!~!~!~!~!",
		imageUrl:
			"https://images.unsplash.com/photo-1470093851219-69951fcbb533?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fCVFRCU4RiVBQyVFQyU5QyVBMCVFQiU4RiU5OSVFQiVBQyVCQ3xlbnwwfHwwfHx8MA%3D%3D",
	},
	{
		title: "박춘봉",
		desc: "춘봉이다",
		imageUrl:
			"https://i.namu.wiki/i/w9ZO7n4LVotWfiYa7NQ54UFm7b0Ec4Pu9HmL9J1S2stXg9STcUvuE090ive2DaeoOPLDxKMfi-VOAXHZSH6I93KickZd-oj6CXD9aECoIidQAUzLfrEQbMVheCeUXqfcp-eIjR6bNnNFP0gmn7xVVyIHOgEC2dGwevEBAQ-IbR4.webp",
	},
	{
		title: "김첨지",
		desc: "첨지다",
		imageUrl:
			"https://i.namu.wiki/i/w9ZO7n4LVotWfiYa7NQ54Y7xEwrzgOQna982upOFnny6XK7urEcF0dEVSIzVglYg_L9QXHwaQNr7aCuYNglQ9rO_qUZDks0KCRrcS272sI1xkPP0BjXBa8OTL82QnRDYXJf1HM-GVtjOhMjhzIuZ0tvl0L_pc-0IbKD3wDxNu8o.webp",
	},
	{
		title: "황칠복",
		desc: "기요밍",
		imageUrl:
			"https://i.namu.wiki/i/w9ZO7n4LVotWfiYa7NQ54UjO3pqUCm5g48FB4c632huSV6Z15a2q7jG8WJRApHq9gz26XIMXqWHArswCsWJ9f0fcZLFq2B9CRGsa7Ne7pqlSar2LfNDn4DBHKxDYp0UZI8PPQI-IQzF7v45LpTu7LnA1YxNvtfIH32sqVMRyd94.webp",
	},
	{
		title: "박명수",
		desc: "왕피곤",
		imageUrl:
			"//mblogthumb-phinf.pstatic.net/MjAyMTAzMjJfMzAg/MDAxNjE2Mzg4ODI5NjE4.UXogJ4wgjGQYq-FGoZqNfHgLp2nScROXM5AkEhUgs-cg.VMKe5fL5BUnhYxZTktr0gAzc9Acq0OK9OhEpWB-Ceggg.JPEG.chooddingg/IMG_9638.JPG?type=w800",
	},
	{
		title: "박명수",
		desc: "왕기대",
		imageUrl:
			"https://mblogthumb-phinf.pstatic.net/MjAyMTAzMjJfMTM5/MDAxNjE2Mzg4ODI0Nzk5.R4vK0VQpSVF66Q8x4mx535wnM-EyuAqoPpsMEcsyiFUg.RPTV6YErNFF_BSyO8mCyY372rSILuEXlmcgpzADIZ9og.JPEG.chooddingg/PHOTO_0211.jpg?type=w800",
	},
	{
		title: "짱짜라짱짱구짱",
		desc: "오리오리오리오리",
		imageUrl:
			"//postfiles.pstatic.net/MjAyNDAzMDZfMTM5/MDAxNzA5Njk2OTI1ODg3.FzyD8ht5V3aulIgyH6jTVO4xZC5mDsWd6WRwkgtHJRMg.Bd-UOKL0KGPNI86qj5IPMozpbuCQYWiN8pGleMpT2Hwg.JPEG/SE-E1557DB8-0345-4384-A659-D270AFA9A3B7.jpg?type=w966",
	},
];

const swiperConfig = {
	slidesPerView: "auto",
	loop: true,
	centeredSlides: true,
	spaceBetween: 8,
	modules: [Navigation, Autoplay, Pagination],
	navigation: {
		prevEl: ".slide-01 .button__prev",
		nextEl: ".slide-01 .button__next",
	},
	autoplay: { delay: 1500, pauseOnMouseEnter: true },
	pagination: {
		clickable: true,
		type: "bullets",
		renderBullet: (index, className) => {
			return `<button type="button" class="${className}" aria-label="Go to slide ${
				index + 1
			}"><span>${index + 1}</span></button>`;
		},
	},
};

const navBtnBase =
	"absolute top-40 z-40 transition-opacity duration-300 cursor-pointer";
const navBtnVisible = "opacity-100 pointer-events-auto";
const navBtnHidden = "opacity-0 pointer-events-none";

const Slide01 = () => {
	const [activeIndex, setActiveIndex] = useState(0);
	const [isUserPaused, setIsUserPaused] = useState(null); // null이면 자동모드, true/false는 수동모드
	const [isHover, setIsHover] = useState(false);
	const swiperRef = useRef();

	const handleMouseEnter = () => {
		setIsHover(true);
	};

	const handleMouseLeave = () => {
		setIsHover(false);
	};

	const handlePlayClick = () => {
		setIsUserPaused(false);
		swiperRef.current?.autoplay?.start();
	};

	const handlePauseClick = () => {
		setIsUserPaused(true);
		swiperRef.current?.autoplay?.stop();
	};

	const handleTransitionEnd = (swiper) => {
		setActiveIndex(swiper.realIndex);
	};

	return (
		<div
			className='slide-01 relative mt-6'
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
		>
			<button
				type='button'
				className={`button__prev ${navBtnBase} left-64 ${
					isHover ? navBtnVisible : navBtnHidden
				} focus:opacity-100 focus:pointer-events-auto focus:visible`}
			>
				<GrPrevious size={40} color='white' />
			</button>
			<button
				type='button'
				className={`button__next ${navBtnBase} right-64 ${
					isHover ? navBtnVisible : navBtnHidden
				} focus:opacity-100 focus:pointer-events-auto focus:visible`}
			>
				<GrNext size={40} color='white' />
			</button>
			<Swiper
				{...swiperConfig}
				onTransitionEnd={handleTransitionEnd}
				onSwiper={(swiper) => (swiperRef.current = swiper)}
			>
				{slidesData.map((item, i) => (
					<SwiperSlide key={i}>
						<Card item={item} isActive={i === activeIndex} />
					</SwiperSlide>
				))}
			</Swiper>
			<TogglePlayButton
				isUserPaused={isUserPaused}
				handlePauseClick={handlePauseClick}
				handlePlayClick={handlePlayClick}
			/>
		</div>
	);
};

export default Slide01;
