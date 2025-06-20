import AgreeAllCheckbox from "../../components/Tab3/AgreeAllCheckbox";
import ConsentList from "../../components/Tab3/ConsentList";
import { useEffect, useState } from "react";

const agreementList = [
	{
		inputId: "agreeRuleInsurance",
		name: "ruleInsurance",
		title: "보험이용 규정 (필수)",
		desc: "보험이용 규정입니다.",
		checked: false,
	},
	{
		inputId: "agreeRefundPolicy",
		name: "refundPolicy",
		title: "취소 위약금 및 환불 규정 (필수)",
		desc: "취소 위약금 및 환불 규정입니다.",
		checked: false,
	},
	{
		inputId: "agreeCarRental",
		name: "carRental",
		title: "차량대여 이용규정 (필수)",
		desc: "차량대여 이용규정입니다.",
		checked: false,
	},
	{
		inputId: "agreePrivacyCollect",
		name: "privacyCollect",
		title: "개인정보 수집 이용 동의 (필수)",
		desc: "개인정보 수집 이용 동의입니다.",
		checked: false,
	},
	{
		inputId: "agreePrivacyThirdParty",
		name: "privacyThirdParty",
		title: "개인정보 제3자 제공 동의 (필수)",
		desc: "개인정보 제3자 제공 동의입니다.",
		checked: false,
	},
];

export default function Tab3() {
	const [agreements, setAgreements] = useState(agreementList);
	const [isAllAgreed, setIsAllAgreed] = useState(false);

	const handleAgreeAll = () => {
		setIsAllAgreed((prev) => !prev);

		setAgreements(
			agreements.map((item) => ({ ...item, checked: !isAllAgreed }))
		);
	};

	// 방법 1. 함수
	// const handleCheckbox = (id) => {
	// 	const updated = agreements.map((item) =>
	// 		item.id === id ? { ...item, checked: !item.checked } : item
	// 	);

	// 	setAgreements(updated);

	// 	const allChecked = updated.every((item) => item.checked);
	// 	setIsAllAgreed(allChecked);
	// };

	// 방법 2. useEffect + useState
	const handleCheckbox = (inputId) => {
		setAgreements(
			agreements.map((item) =>
				item.inputId === inputId ? { ...item, checked: !item.checked } : item
			)
		);
	};

	useEffect(() => {
		const allChecked = agreements.every((item) => item.checked);
		setIsAllAgreed(allChecked);
	}, [agreements]);

	return (
		<div className="w-lg">
			<h2 className="">예약 동의사항</h2>
			<AgreeAllCheckbox
				handleAgreeAll={handleAgreeAll}
				isAllAgreed={isAllAgreed}
			/>
			<ConsentList agreements={agreements} handleCheckbox={handleCheckbox} />
		</div>
	);
}
