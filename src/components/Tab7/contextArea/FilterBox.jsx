import {useFilterActionContext, useFilterStateContext} from "../context/filterContext";

const FilterBox = () => {
	// const {filters, updateFilter, resetFilter} = useFilterContext();
	const {filters} = useFilterStateContext();
	const {updateFilter, resetFilter} = useFilterActionContext();

	return (
		<div className='mt-6'>
			<button type='button' className='text-xs border-1 border-gray-300 px-2 py-2 rounded-2xl mb-4' onClick={resetFilter}>
				reset
			</button>
			{filters.map((f) => (
				<div className='flex py-2' key={f.id}>
					<p className='min-w-20 font-[500]'>{f.filterCategory}</p>
					<ul className='flex gap-x-4 flex-wrap'>
						{f.filterItems.map((item) => (
							<li key={item.id} className='whitespace-nowrap'>
								<button type='button' className={item.isSelected ? "text-green-500" : ""} onClick={() => updateFilter({groupId: f.id, itemId: item.id})}>
									{item.filterName}
									{item.isSelected ? " X" : ""}
								</button>
							</li>
						))}
					</ul>
				</div>
			))}
		</div>
	);
};

export default FilterBox;
