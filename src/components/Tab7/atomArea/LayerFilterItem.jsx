import {useAtom} from "jotai";
import {filterItemAtomFamily} from "../atoms/filters";
import React from "react";

const LayerFilterItem = ({groupId, itemId}) => {
	const key = `${groupId}:${itemId}`;
	const [item, setItem] = useAtom(filterItemAtomFamily(key));

	return (
		<li className='px-4 py-2 flex justify-between'>
			<label htmlFor={item.id} className='w-full cursor-pointer'>
				{item.filterName}
			</label>
			<input id={item.id} type='checkbox' className='w-5' onChange={() => setItem((p) => ({...p, isSelected: !p.isSelected}))} checked={item.isSelected} />
		</li>
	);
};

export default React.memo(LayerFilterItem);
// export default LayerFilterItem;
