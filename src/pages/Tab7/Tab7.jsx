import Button from "../../components/Common/Button";
import FilterBox from "../../components/Tab7/FilterBox";
import LayerFilter from "../../components/Tab7/LayerFilter";

// const btnProps = {id, onClick, text, ref, isExpanded, ariaControls};

const Tab7 = () => {
	return (
		<div className='margin-0-auto'>
			<Button text={"openLayer"} />
			<FilterBox />
			<LayerFilter />
		</div>
	);
};

export default Tab7;
