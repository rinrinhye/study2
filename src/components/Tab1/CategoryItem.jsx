import { Link } from "react-router";

const CategoryItem = ({ groupCode, curGroupCode, imageUrl, groupName }) => {
	return (
		<Link
			to={`/tab1?groupCode=${groupCode}`}
			className={`block text-center ${
				curGroupCode === groupCode
					? "text-[#00c400] [&>img]:border-2 [&>img]:border-[#00c400]"
					: ""
			}`}
		>
			<img
				src={imageUrl}
				alt=''
				className='inline-block w-[44px] h-[44px] mb-0.5 rounded-full lg:w-[68px] lg:h-[68px]'
			/>
			<span className=''>{groupName}</span>
		</Link>
	);
};

export default CategoryItem;
