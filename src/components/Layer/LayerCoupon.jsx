import { useState } from "react";
import { useToastContext } from "../Tab6/ToastPractice/ToastProvider";
import LayerContainer from "../Common/LayerContainer";

const couponList = [
  {
    group: "gmarket",
    couponId: "coupon-g1",
    discount: "6,480원",
    title: "[누구나] 뷰티톡 15% 쿠폰",
    desc: "1만원 이상 구매시 최대 3만원 할인 (~07/09)",
    badge: "놓친 쿠폰을 발급해 드렸어요!",
  },
  {
    group: "gmarket",
    couponId: "coupon-g2",
    discount: "3,000원",
    title: "[누구나] 뷰티 10% 쿠폰",
    desc: "1만원 이상 구매시 최대 3,000 (~07/09)",
    badge: "",
  },
  {
    group: "duplicateCoupon",
    couponId: "coupon-d1",
    discount: "6,480원",
    title: "[누구나] 클리오 스타배송 15% 중복쿠폰",
    desc: "1만원 이상 구매시 최대 10만원 할인 (~07/31)",
    badge: "",
  },
];

const groupedCoupons = {
  gmarket: couponList.filter((c) => c.group === "gmarket"),
  duplicate: couponList.filter((c) => c.group === "duplicateCoupon"),
};

const LayerCoupon = ({ modal }) => {
  const [value, setValue] = useState({ gmarket: "", duplicated: "" });

  const { addToast, clearToasts } = useToastContext();

  const handleToastTrigger = (val) => {
    if (val === "coupon-g1") {
      addToast("놓친 쿠폰을 자동 발급해 드렸어요!");
    }
    if (val.includes("none")) {
      addToast("쿠폰 적용을 해제했어요!");
    }
  };

  const handleChange = (e) => {
    const name = e.target.name;

    if (name === "gmarket") {
      setValue({ ...value, gmarket: e.target.value });
    }
    if (name === "duplicated") {
      setValue({ ...value, duplicated: e.target.value });
    }

    handleToastTrigger(e.target.value);
  };

  const layerClose = () => {
    modal.close();
    clearToasts();
  };

  return (
    <LayerContainer
      onClose={layerClose}
      title={"쿠폰 적용"}
      className={` bg-green-50`}
      id="layer-coupon"
    >
      <div className="px-6">
        <div>
          <p className="mb-2 text-sm">G마켓 쿠폰</p>
          <div className="flex flex-col gap-2">
            {groupedCoupons.gmarket.map((item) => (
              <div key={item.couponId} className="flex gap-6">
                <div>
                  <input
                    id={item.couponId}
                    type="radio"
                    name="gmarket"
                    value={item.couponId}
                    onChange={handleChange}
                    className="align-middle"
                  />
                  <label
                    className="font-bold text-sm ml-1"
                    htmlFor={item.couponId}
                  >
                    {item.discount}
                  </label>
                </div>

                <p className="flex flex-col">
                  <span className="text-sm mb-0.5">{item.title}</span>
                  <span className="text-xs">{item.desc}</span>
                  <span className="text-xs text-green-500">{item.badge}</span>
                </p>
              </div>
            ))}
            <div>
              <div>
                <input
                  type="radio"
                  name="gmarket"
                  id="counpon-none-01"
                  value={"none"}
                  onChange={handleChange}
                  className="align-middle"
                />
                <label className="text-sm ml-1" htmlFor="counpon-none-01">
                  적용안함
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-6">
          <p className="mb-2 text-sm">중복 쿠폰</p>
          <div className="flex flex-col gap-2">
            {groupedCoupons.duplicate.map((item) => (
              <div key={item.couponId} className="flex gap-6">
                <div>
                  <input
                    id={item.couponId}
                    type="radio"
                    name="duplicated"
                    value={item.couponId}
                    onChange={handleChange}
                    className="align-middle"
                  />
                  <label
                    className="font-bold text-sm ml-1"
                    htmlFor={item.couponId}
                  >
                    {item.discount}
                  </label>
                </div>

                <p className="flex flex-col">
                  <span className="text-sm mb-0.5">{item.title}</span>
                  <span className="text-xs">{item.desc}</span>
                  {item.badge !== "" && (
                    <span className="text-xs text-green-500">{item.badge}</span>
                  )}
                </p>
              </div>
            ))}
            <div>
              <div>
                <input
                  type="radio"
                  name="duplicated"
                  id="counpon-none-02"
                  value={"none"}
                  onChange={handleChange}
                  className="align-middle"
                />
                <label className="text-sm ml-1" htmlFor="counpon-none-02">
                  적용안함
                </label>
              </div>
            </div>
          </div>
        </div>
        <button
          type="button"
          className="w-full bg-green-600 text-white py-4 rounded-2xl my-4"
        >
          쿠폰 적용하기
        </button>
      </div>
    </LayerContainer>
  );
};

export default LayerCoupon;
