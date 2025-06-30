import { IoPauseSharp, IoPlay } from "react-icons/io5";

const TogglePlayButton = ({
	isUserPaused,
	handlePauseClick,
	handlePlayClick,
}) => {
	return (
		<button
			type='button'
			className='absolute bottom-12 left-[calc(50%+100px)] bg-black/20  w-8 h-8 text-center z-20 rounded-full cursor-pointer'
			onClick={!isUserPaused ? handlePauseClick : handlePlayClick}
		>
			{!isUserPaused ? (
				<IoPauseSharp color='white' className='inline mb-1' />
			) : (
				<IoPlay color='white' className='inline mb-1' />
			)}
		</button>
	);
};

export default TogglePlayButton;
