import {createContext, useContext, useState} from "react";
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

const FilterContext = createContext();

// export const FilterContextProvider = ({children}) => {
// 	const [filters, setFilters] = useState(value);

// 	const updateFilter = ({groupId, itemId}) => {
// 		setFilters((prev) => {
// 			const updateFilters = prev.map((f) => {
// 				return f.id === groupId ? {...f, filterItems: f.filterItems.map((item) => (item.id === itemId ? {...item, isSelected: !item.isSelected} : item))} : f;
// 			});
// 			return updateFilters;
// 		});
// 	};

// 	const resetFilter = () => {
// 		setFilters((prev) => prev.map((f) => ({...f, filterItems: f.filterItems.map((item) => ({...item, isSelected: false}))})));
// 	};

// 	return <FilterContext.Provider value={{filters, updateFilter, resetFilter}}>{children}</FilterContext.Provider>;
// };

export const FilterContextProvider = ({children}) => {
	const [filters, setFilters] = useState(value);

	const updateFilter = ({groupId, itemId}) => {
		setFilters((prev) => {
			const updateFilters = prev.map((f) => {
				return f.id === groupId ? {...f, filterItems: f.filterItems.map((item) => (item.id === itemId ? {...item, isSelected: !item.isSelected} : item))} : f;
			});
			return updateFilters;
		});
	};

	const resetFilter = () => {
		setFilters((prev) => prev.map((f) => ({...f, filterItems: f.filterItems.map((item) => ({...item, isSelected: false}))})));
	};

	return <FilterContext.Provider value={{updateFilter, resetFilter}}>{typeof children === "function" ? children(filters) : children}</FilterContext.Provider>;
};

export const useFilterContext = () => useContext(FilterContext);
