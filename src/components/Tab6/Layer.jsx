import { useState } from "react";
import ModalPortal from "../Common/ModalPortal";
import Dimmed from "../Common/Dimmed";
import { useToastContext } from "./ToastPractice/ToastProvider";

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

const Layer = ({ modal }) => {
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

	return (
		<>
			<ModalPortal containerId={"modal-root"}>
				<Dimmed
					onClick={() => {
						modal.close();
						clearToasts();
					}}
				/>
				<div
					className='h-[500px] absolute w-[420px] bg-green-50 top-10 left-1/2 transform -translate-x-1/2 pointer-events-auto'
					id='tab6-modal'
					role='dialog'
					aria-modal='true'
				>
					<h3 className='text-center py-4 font-bold'>쿠폰적용</h3>
					<div className='content px-6'>
						<div>
							<p className='mb-2'>G마켓 쿠폰</p>
							<div className='flex flex-col gap-2'>
								{groupedCoupons.gmarket.map((item) => (
									<div key={item.couponId}>
										<label className='flex gap-8'>
											<span className='whitespace-nowrap font-bold'>
												<input
													type='radio'
													name='gmarket'
													value={item.couponId}
													onChange={handleChange}
												/>
												{item.discount}
											</span>
											<div className='flex flex-col w-full'>
												<span className='text-sm'>
													{item.title}
												</span>
												<span className='text-xs'>
													{item.desc}
												</span>
												<span className='text-xs text-green-500'>
													{item.badge}
												</span>
											</div>
										</label>
									</div>
								))}
								<div>
									<input
										type='radio'
										name='gmarket'
										id='counpon-none-01'
										value={"none"}
										onChange={handleChange}
									/>
									<label htmlFor='counpon-none-01'>
										적용안함
									</label>
								</div>
							</div>
						</div>
						<div className='mt-6'>
							<p className='mb-2'>중복 쿠폰</p>
							<div className='flex flex-col gap--2'>
								{groupedCoupons.gmarket.map((item) => (
									<div key={item.couponId}>
										<label className='flex gap-8'>
											<span className='whitespace-nowrap font-bold'>
												<input
													type='radio'
													name='duplicated'
													value={item.couponId}
													onChange={handleChange}
												/>
												{item.discount}
											</span>
											<div className='flex flex-col w-full'>
												<span className='text-sm'>
													{item.title}
												</span>
												<span className='text-xs'>
													{item.desc}
												</span>
												{item.badge !== "" && (
													<span className='text-xs text-green-500'>
														{item.badge}
													</span>
												)}
											</div>
										</label>
									</div>
								))}
								<div>
									<input
										type='radio'
										name='duplicated'
										id='coupon-none-02'
										value={"none"}
										onChange={handleChange}
									/>
									<label htmlFor='coupon-none-02'>
										적용안함
									</label>
								</div>
							</div>
						</div>
						<button
							type='button'
							className='w-full bg-green-600 text-white py-4 rounded-2xl mt-4'
						>
							쿠폰 적용하기
						</button>
					</div>
				</div>
			</ModalPortal>
		</>
	);
};

export default Layer;
