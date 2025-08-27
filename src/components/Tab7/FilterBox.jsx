import {useAtom} from "jotai";
import {filtersAtom} from "./atoms/filters";

const FilterBox = () => {
	const [filters, setFilters] = useAtom(filtersAtom);
	return (
		<div className=''>
			{filters.map((f) => (
				<div className='flex'>
					<p className='min-w-20'>{f.filterName}</p>
					<ul className='flex gap-4'>
						{f.filterItems.map((items) => (
							<li>
								<button type='button'>{items.name}</button>
							</li>
						))}
					</ul>
				</div>
			))}
		</div>
	);
};

export default FilterBox;
