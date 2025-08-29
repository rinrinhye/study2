import AtomArea from "../../components/Tab7/atomArea/AtomArea";
import ContextArea from "../../components/Tab7/contextArea/ContextArea";
import ReducerArea from "../../components/Tab7/reducerArea/ReducerArea";

const Tab7 = () => {
	return (
		<div className='px-6 flex gap-x-6'>
			<AtomArea />
			<ContextArea />
			<ReducerArea />
		</div>
	);
};

export default Tab7;
