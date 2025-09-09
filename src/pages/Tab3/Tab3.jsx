import AgreeAllCheckbox from "../../components/Tab3/AgreeAllCheckbox";
import ConsentList from "../../components/Tab3/ConsentList";
import {useCallback, useEffect, useMemo, useRef, useState} from "react";

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
	// const [isAllAgreed, setIsAllAgreed] = useState(false);
	const [showHeader, setShowHeader] = useState(true);
	// const [lastY, setLastY] = useState(0);
	const lastYRef = useRef(0);
	const ticking = useRef(false);
	const triggerRef = useRef(null);
	const headerHeight = 74;

	// ✅ agreements로부터 항상 계산 가능한 값이므로 useMemo로 파생값 처리
	const isAllAgreed = useMemo(() => agreements.every((i) => i.checked), [agreements]);

	const handleAgreeAll = useCallback(() => {
		// agreements 상태를 토글
		setAgreements(agreements.map((item) => ({...item, checked: !isAllAgreed})));
	}, [agreements, isAllAgreed]);

	// --------------------------------------------------------------------------

	// 방법 1. 함수
	// const handleCheckbox = (id) => {
	// 	const updated = agreements.map((item) =>
	// 		item.id === id ? { ...item, checked: !item.checked } : item
	// 	);

	// 	setAgreements(updated);

	// 	const allChecked = updated.every((item) => item.checked);
	// 	setIsAllAgreed(allChecked);
	// };

	// --------------------------------------------------------------------------

	// // 방법 2. useEffect + useState
	// const handleCheckbox = (inputId) => {
	//   setAgreements(
	//     agreements.map((item) =>
	//       item.inputId === inputId ? { ...item, checked: !item.checked } : item
	//     )
	//   );
	// };

	// useEffect(() => {
	//   const allChecked = agreements.every((item) => item.checked);
	//   setIsAllAgreed(allChecked);
	// }, [agreements]);

	// --------------------------------------------------------------------------

	// 방법 3. 1번 + 2번 혼합
	const handleCheckbox = (inputId) => {
		const updated = agreements.map((item) => (item.inputId === inputId ? {...item, checked: !item.checked} : item));
		setAgreements(updated);
	};

	// 안전망 역할의 useEffect 3차스터디 3회차 주석처리
	// useEffect(() => {
	// 	const allChecked = agreements.every((item) => item.checked);
	// 	setIsAllAgreed(allChecked);
	// }, [agreements]);

	// --------------------------------------------------------------------------

	// 스크롤 헤더 - useState
	// useEffect(() => {
	// 	const handleScroll = () => {
	// 		const currentY = window.scrollY;

	// 		if (currentY < headerHeight) setShowHeader(true);
	// 		else if (currentY > lastY) setShowHeader(false);
	// 		else if (currentY < lastY) setShowHeader(true);

	// 		setLastY(currentY);
	// 	};

	// 	window.addEventListener("scroll", handleScroll);

	// 	return () => window.removeEventListener("scroll", handleScroll);
	// }, [lastY]);

	// --------------------------------------------------------------------------

	// 스크롤 헤더 - useRef 사용
	// useEffect(() => {
	// 	const handleScroll = () => {
	// 		const currentY = window.scrollY;

	// 		if (currentY < headerHeight) setShowHeader(true);
	// 		else if (currentY > lastYRef.current) setShowHeader(false);
	// 		else if (currentY < lastYRef.current) setShowHeader(true);

	// 		lastYRef.current = currentY;
	// 	};

	// 	window.addEventListener("scroll", handleScroll);
	// 	return () => window.removeEventListener("scroll", handleScroll);
	// }, []);

	// --------------------------------------------------------------------------

	// 스크롤 헤더 - requestAnimationFrame 사용
	useEffect(() => {
		const handleScroll = () => {
			const currentY = window.scrollY;

			if (!ticking.current) {
				ticking.current = true;
				requestAnimationFrame(() => {
					if (currentY < headerHeight) {
						setShowHeader(true);
					} else if (currentY > lastYRef.current) {
						setShowHeader(false);
					} else if (currentY < lastYRef.current) {
						setShowHeader(true);
					}

					lastYRef.current = currentY;
					ticking.current = false;
				});
			}
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	// --------------------------------------------------------------------------

	return (
		<>
			<div
				ref={triggerRef}
				className={`w-full h-12 bg-blue-500 sticky top-0 shadow
    transition-transform duration-200 ease-in-out ${showHeader ? "translate-y-0" : "-translate-y-full"}`}></div>
			<div className='w-lg mx-auto mt-10'>
				<h2 className='mb-4'>예약 동의사항</h2>
				<AgreeAllCheckbox handleAgreeAll={handleAgreeAll} isAllAgreed={isAllAgreed} />
				<ConsentList agreements={agreements} handleCheckbox={handleCheckbox} />
			</div>
			<div className='h-[3000px]'></div>
		</>
	);
}
