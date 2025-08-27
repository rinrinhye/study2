import {atom} from "jotai";

export const filtersAtom = atom([
	{
		filterName: "카테고리",
		filterItems: [
			{name: "봉지라면", isSelected: false},
			{name: "컵라면", isSelected: false},
		],
	},
	{
		filterName: "브랜드",
		filterItems: [
			{name: "농심", isSelected: false},
			{name: "오뚜기", isSelected: false},
			{name: "진라면", isSelected: false},
			{name: "삼양", isSelected: false},
			{name: "팔도", isSelected: false},
			{name: "신라면", isSelected: false},
			{name: "열라면", isSelected: false},
			{name: "안성탕면", isSelected: false},
			{name: "짜파게티", isSelected: false},
			{name: "노브랜드", isSelected: false},
		],
	},
	{
		filterName: "맛종류",
		filterItems: [
			{name: "김치맛", isSelected: false},
			{name: "로제맛", isSelected: false},
			{name: "마라맛", isSelected: false},
			{name: "멸치맛", isSelected: false},
			{name: "사골맛", isSelected: false},
			{name: "미역맛", isSelected: false},
			{name: "짜장맛", isSelected: false},
			{name: "짬뽕맛", isSelected: false},
			{name: "크림맛", isSelected: false},
			{name: "치즈맛", isSelected: false},
		],
	},
	{
		filterName: "종류",
		filterItems: [
			{name: "유탕면", isSelected: false},
			{name: "비유탕면", isSelected: false},
			{name: "생면", isSelected: false},
		],
	},
	{
		filterName: "배송유형",
		filterItems: [
			{name: "이마트몰", isSelected: false},
			{name: "스타배송", isSelected: false},
			{name: "오늘출발", isSelected: false},
			{name: "당일배송", isSelected: false},
			{name: "무료배송", isSelected: false},
		],
	},
]);
