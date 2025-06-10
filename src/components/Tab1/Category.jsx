import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Link } from 'react-router';

export default function Category({ category, curGroupCode }) {
  return (
    <Swiper className="category-slide" slidesPerView={'auto'} spaceBetween={4}>
      {category.map((item) => {
        const { groupName, imageUrl, groupCode } = item;

        return (
          <SwiperSlide key={groupCode}>
            <Link
              to={`/tab1?groupCode=${groupCode}`}
              className={curGroupCode === groupCode ? 'active' : ''}
            >
              <img src={imageUrl} alt="" />
              <span>{groupName}</span>
            </Link>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}
