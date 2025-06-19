const data = [
	{ title: "보험이용 규정 (필수)", desc: "" },
	{ title: "취소 위약금 및 환불 규정 (필수)", desc: "" },
	{ title: "차량대여 이용규정 (필수)", desc: "" },
	{ title: "개인정보 수집 이용 동의 (필수)", desc: "" },
	{ title: "개인정보 제3자 제공 동의 (필수)", desc: "" },
];

export default function Tab3() {
	return (
		<div>
			<h2>예약 동의사항</h2>
			<div>
				<input type="checkbox" name="" id="" />
				<label htmlFor="">전체동의</label>

				<input type="checkbox" name="" id="" />
				<label htmlFor="">보험이용 규정 (필수)</label>
			</div>
		</div>
	);
}
