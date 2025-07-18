import ModalPortal from "../Common/ModalPortal";
import Layer from "../Common/Layer";

export default function LayerAddToCart({ handleModal }) {
	return (
		<Layer onClose={handleModal.close}>
			<div className='h-[200px] flex items-center justify-center'>
				<p className='text-lg'>장바구니에 추가할까요?</p>
			</div>
			<div className='absolute bottom-0 flex gap-2 p-4 w-full'>
				<button
					type='button'
					className='bg-gray-200 rounded-xl w-full py-4'
				>
					확인
				</button>
				<button
					type='button'
					className='bg-gray-200 rounded-2xl w-full py-4'
					onClick={handleModal.close}
				>
					취소
				</button>
			</div>
		</Layer>
	);
}
