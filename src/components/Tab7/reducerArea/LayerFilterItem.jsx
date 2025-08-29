import React from "react";

const LayerFilterItem = ({item, groupId, dispatch}) => {
	return (
		<li className='px-4 py-2 flex justify-between'>
			<label htmlFor={item.id} className='w-full cursor-pointer'>
				{item.filterName}
			</label>
			<input id={item.id} type='checkbox' className='w-5' onChange={() => dispatch({type: "UPDATE", groupId, itemId: item.id})} checked={item.isSelected} />
		</li>
	);
};

export default React.memo(LayerFilterItem);
// export default LayerFilterItem;
