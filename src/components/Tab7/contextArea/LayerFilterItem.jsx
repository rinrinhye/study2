import React from "react";
import {useFilterContext} from "../contextArea/filterContext";

const LayerFilterItem = ({item, groupId}) => {
	const {updateFilter} = useFilterContext();

	return (
		<li className='px-4 py-2 flex justify-between' key={item.id}>
			<label htmlFor={item.id} className='w-full cursor-pointer'>
				{item.filterName}
			</label>
			<input id={item.id} type='checkbox' className='w-5' onChange={() => updateFilter({groupId, itemId: item.id})} checked={item.isSelected} />
		</li>
	);
};

// export default React.memo(LayerFilterItem);
export default LayerFilterItem;
