import {useMemo, useState} from "react";
import LayerFilterItem from "./LayerFilterItem";
import {useFilterContext} from "./filterContext";

const LayerFilterList = () => {
	const {filters} = useFilterContext();

	const initialOpenMap = useMemo(() => {
		const map = {};
		for (const group of filters) map[group.id] = false;
		return map;
	}, [filters]);

	const [openMap, setOpenMap] = useState(initialOpenMap);

	return (
		<div className='px-6'>
			{filters.map((filter) => (
				<div key={filter.id}>
					<button type='button' className='py-2 font-[500] w-full text-left' onClick={() => setOpenMap((prev) => ({...prev, [filter.id]: !prev[filter.id]}))} value={filter.filterCategory}>
						{filter.filterCategory}
					</button>
					<ul className={openMap[filter.id] ? "" : "hidden"}>
						{filter.filterItems.map((item) => (
							<LayerFilterItem groupId={filter.id} item={item} itemId={item.id} key={item.id} />
						))}
					</ul>
				</div>
			))}
		</div>
	);
};

export default LayerFilterList;
