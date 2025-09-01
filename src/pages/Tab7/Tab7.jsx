import AtomArea from "../../components/Tab7/atomArea/AtomArea";
import ContextArea from "../../components/Tab7/contextArea/ContextArea";
import ContextArea2 from "../../components/Tab7/contextArea2/ContextArea2";
import ReducerArea from "../../components/Tab7/reducerArea/ReducerArea";

const Tab7 = () => {
	return (
		<div className='px-6 grid grid-cols-2 gap-x-6'>
			<AtomArea />
			<ContextArea />
			<ReducerArea />
			<ContextArea2 />
		</div>
	);
};

export default Tab7;
