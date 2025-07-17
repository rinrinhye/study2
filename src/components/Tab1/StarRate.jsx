export default function StarRate({ avgStarPoint, reviewCount }) {
	return (
		<div className='mt-0.5 text-xs'>
			<img
				className=' inline-block -mb-0.5'
				src='https://script.gmarket.co.kr/starro/mobile/images/single/best/gds-star-fill.svg'
				alt=''
			/>
			<span>{avgStarPoint}</span>
			<span className='text-gray-600'>({reviewCount})</span>
		</div>
	);
}
