export default function ProductImage({ imageUrl, rank }) {
	return (
		<div className='relative rounded-lg overflow-hidden'>
			<img
				className='w-full h-auto object-cover'
				src={`${imageUrl}/280`}
				alt=''
			/>
			<span className='absolute top-0 left-0 py-1 px-2 text-xs bg-[#00c400] text-white rounded-br-sm'>
				{rank}
			</span>
		</div>
	);
}
