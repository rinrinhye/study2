import {useAtom} from "jotai";
import {filtersAtom} from "./atoms/filters";

const LayerFilter = () => {
	const [filters, setFilters] = useAtom(filtersAtom);

	return (
		<div className='relative inset-0 w-full bg-amber-100 h-full'>
			<div className='fixed inset-0 bg-black/60'></div>
			<div className='fixed bg-white w-80 h-full right-0 top-0'></div>
		</div>
	);
};

export default LayerFilter;
