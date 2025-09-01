import {useState, useReducer} from "react";
import Button from "../../Common/Button";
import FilterBox from "./FilterBox";
import LayerFilter from "./LayerFilter";
import uuid4 from "uuid4";

const value = [
	{
		filterCategory: "카테고리",
		id: uuid4(),
		filterItems: [
			{filterName: "봉지라면", isSelected: false, id: uuid4()},
			{filterName: "컵라면", isSelected: false, id: uuid4()},
		],
	},
	{
		filterCategory: "브랜드",
		id: uuid4(),
		filterItems: [
			{filterName: "농심", isSelected: false, id: uuid4()},
			{filterName: "오뚜기", isSelected: false, id: uuid4()},
			{filterName: "진라면", isSelected: false, id: uuid4()},
			{filterName: "삼양", isSelected: false, id: uuid4()},
			{filterName: "팔도", isSelected: false, id: uuid4()},
			{filterName: "신라면", isSelected: false, id: uuid4()},
			{filterName: "열라면", isSelected: false, id: uuid4()},
			{filterName: "안성탕면", isSelected: false, id: uuid4()},
			{filterName: "짜파게티", isSelected: false, id: uuid4()},
			{filterName: "노브랜드", isSelected: false, id: uuid4()},
		],
	},
	{
		filterCategory: "맛종류",
		id: uuid4(),
		filterItems: [
			{filterName: "김치맛", isSelected: false, id: uuid4()},
			{filterName: "로제맛", isSelected: false, id: uuid4()},
			{filterName: "마라맛", isSelected: false, id: uuid4()},
			{filterName: "멸치맛", isSelected: false, id: uuid4()},
			{filterName: "사골맛", isSelected: false, id: uuid4()},
			{filterName: "미역맛", isSelected: false, id: uuid4()},
			{filterName: "짜장맛", isSelected: false, id: uuid4()},
			{filterName: "짬뽕맛", isSelected: false, id: uuid4()},
			{filterName: "크림맛", isSelected: false, id: uuid4()},
			{filterName: "치즈맛", isSelected: false, id: uuid4()},
		],
	},
	{
		filterCategory: "종류",
		id: uuid4(),
		filterItems: [
			{filterName: "유탕면", isSelected: false, id: uuid4()},
			{filterName: "비유탕면", isSelected: false, id: uuid4()},
			{filterName: "생면", isSelected: false, id: uuid4()},
		],
	},
	{
		filterCategory: "배송유형",
		id: uuid4(),
		filterItems: [
			{filterName: "이마트몰", isSelected: false, id: uuid4()},
			{filterName: "스타배송", isSelected: false, id: uuid4()},
			{filterName: "오늘출발", isSelected: false, id: uuid4()},
			{filterName: "당일배송", isSelected: false, id: uuid4()},
			{filterName: "무료배송", isSelected: false, id: uuid4()},
		],
	},
];

// function reducer(filters, {type, groupId, itemId}) {
// 	switch (type) {
// 		case "UPDATE":
// 			return filters.map((f) => {
// 				return f.id === groupId ? {...f, filterItems: f.filterItems.map((item) => (item.id === itemId ? {...item, isSelected: !item.isSelected} : item))} : f;
// 			});
// 		case "RESET":
// 			return filters.map((f) => ({...f, filterItems: f.filterItems.map((item) => ({...item, isSelected: false}))}));
// 		default:
// 			return filters;
// 	}
// }

function reducer(filters, action) {
	switch (action.type) {
		case "UPDATE": {
			const {groupId, itemId} = action;
			return filters.map((g) => {
				if (g.id !== groupId) return g;

				let itemChanged = false;
				const nextItems = g.filterItems.map((it) => {
					if (it.id === itemId) {
						itemChanged = true;
						return {...it, isSelected: !it.isSelected};
					}
					return it; // 참조 보존
				});

				if (!itemChanged) return g; // 그룹도 참조 보존
				return {...g, filterItems: nextItems};
			});
		}

		case "RESET": {
			let anyChanged = false;
			const nextGroups = filters.map((g) => {
				let itemChanged = false;
				const items = g.filterItems.map((it) => {
					if (it.isSelected) {
						itemChanged = true;
						return {...it, isSelected: false};
					}
					return it; // 이미 false면 참조 보존
				});
				if (!itemChanged) return g; // 이 그룹은 변경 없음 → 참조 보존
				anyChanged = true;
				return {...g, filterItems: items};
			});

			return anyChanged ? nextGroups : filters; // 전체가 그대로면 원본 배열 유지
		}

		default:
			return filters;
	}
}

const ReducerArea = () => {
	const [isOpen, setOpen] = useState(false);
	const [filters, dispatch] = useReducer(reducer, value);

	const onClose = () => {
		setOpen((p) => !p);
	};

	return (
		<div>
			<p className='text-2xl py-4 mb-4 font-semibold border-b border-gray-400'>reducerArea</p>
			<Button text={"openLayer"} onClick={onClose} />
			<FilterBox filters={filters} dispatch={dispatch} />
			<LayerFilter isOpen={isOpen} onClose={onClose} filters={filters} dispatch={dispatch} />
		</div>
	);
};

export default ReducerArea;
