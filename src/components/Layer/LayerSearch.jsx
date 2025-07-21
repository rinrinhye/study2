import { useState } from "react";
import LayerContainer from "../Common/LayerContainer";
import InputRange from "../Common/InputRange";

const accommodations = ["호텔", "리조트", "펜션", "모텔"];
const amenitiesName = [
  "픽업",
  "무료 조식",
  "수영장",
  "스파",
  "세미나실",
  "인터넷(Wifi)",
  "노래방",
  "농구장",
  "족구장",
  "캠프 파이어",
];

const Title = ({ text }) => {
  return <p className="text-sm mb-2.5 font-semibold">{text}</p>;
};

const LayerSearch = ({ onClose }) => {
  const [filter, setFilter] = useState({
    category: accommodations[0],
    priceRange: { low: 1, high: 100 },
    keywords: "",
    amenities: new Set(),
  });

  const { category, priceRange, keywords, amenities } = filter;

  const selectCategory = (cat) => {
    setFilter((prev) => ({ ...prev, category: cat }));
  };

  const updateKeywords = (e) => {
    setFilter((prev) => ({ ...prev, keywords: e.target.value }));
  };

  const updatePrice = (next) => {
    setFilter((prev) => ({ ...prev, priceRange: next }));
  };

  function toggleAmenity(label) {
    setFilter((prev) => {
      const next = new Set(prev.amenities); // 복사 (React 불변성)
      next.has(label) ? next.delete(label) : next.add(label);
      return { ...prev, amenities: next };
    });
  }

  return (
    <LayerContainer id={"search-"} title={"상세검색"} onClose={onClose}>
      <div className="relative h-[500px] p-4 flex flex-col gap-8">
        <div className="flex justify-center gap-4">
          {accommodations.map((btn, i) => (
            <button
              onClick={() => selectCategory(btn)}
              key={i}
              type="button"
              className={`btn px-6 hover:bg-indigo-100 active:bg-indigo-200 focus-visible:ring-indigo-400 ${
                btn === category
                  ? "bg-indigo-700 text-white active:bg-indigo-800 hover:bg-indigo-800"
                  : " bg-indigo-50 text-indigo-700 active:bg-indigo-200 hover:bg-indigo-100"
              }`}
            >
              {btn}
            </button>
          ))}
        </div>
        <div className="relative">
          <Title text={"가격"} />
          <p className="absolute top-0 right-0 text-xs">
            {priceRange.low}만원 ~ {priceRange.high}만원
            {priceRange.high === 100 ? " 이상" : " 이하"}
          </p>
          <InputRange
            min={1}
            max={100}
            value={priceRange}
            onChange={updatePrice}
          />
        </div>
        <div>
          <Title text={`${category}명`} />
          <input
            type="text"
            className="w-full px-[10px] py-[6px] text-[14px] border border-gray-300 rounded-[6px] bg-white outline-none transition-[border-color,box-shadow] duration-150 placeholder:text-gray-400 focus:border-indigo-500 focus:shadow-[0_0_0_3px_rgba(99,102,241,0.3)]"
            onChange={updateKeywords}
          />
        </div>
        <div>
          <Title text={"부대/편의시설"} />
          <div className="grid grid-cols-5 gap-1">
            {amenitiesName.map((item, i) => (
              <button
                type="button"
                className={`px-5 py-2 text-xs font-medium rounded-md border transition-colors
      focus:outline-none focus-visible:ring focus-visible:ring-indigo-400/50
      ${
        amenities.has(item)
          ? "bg-indigo-500 text-white border-indigo-500 hover:bg-indigo-500/90"
          : "bg-white text-gray-700 border-indigo-200 hover:border-indigo-300 hover:bg-indigo-50 active:bg-indigo-100"
      }`}
                key={i}
                onClick={() => toggleAmenity(item)}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
        <button
          type="button"
          className="p-4 bg-indigo-100 rounded-2xl text-indigo-800 font-semibold"
        >
          검색
        </button>
      </div>
    </LayerContainer>
  );
};

export default LayerSearch;
