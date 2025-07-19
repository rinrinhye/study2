import LayerContainer from "../Common/LayerContainer";

const accommodations = ["호텔", "리조트", "펜션", "모텔"];
const amenities = [
  "픽업",
  "무료조식",
  "수영장",
  "스파",
  "세미나실",
  "인터넷(Wifi)",
  "노래방",
  "농구장",
  "족구장",
  "캠프파이어",
];

const LayerSearch = ({ onClose }) => {
  return (
    <LayerContainer id={"search-"} title={"상세검색"} onClose={onClose}>
      <div className="h-[500px]">
        <div>
          {accommodations.map((btn, i) => (
            <button key={i} type="button" className="border rounded-lg">
              {btn}
            </button>
          ))}
        </div>
        <div>
          <p>가격</p>
          <p>1만원 ~ 100만원 이상</p>
          <input type="range" name="" id="" />
        </div>
        <div>
          <p>호텔명</p>
          <input type="text" className="border" />
        </div>
        <div>
          <p>부대/편의시설</p>
          <div className="grid grid-cols-5">
            {amenities.map((item, i) => (
              <button type="button" className="border" key={i}>
                {item}
              </button>
            ))}
          </div>
        </div>
      </div>
    </LayerContainer>
  );
};

export default LayerSearch;
