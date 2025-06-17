import styled from "styled-components";
import { IoMdClose } from "react-icons/io";
import ModalPortal from "../Common/ModalPortal";

export default function LayerAddToCart({ handleModal }) {
	return (
		<ModalPortal>
			<Layer>
				<Text>장바구니에 추가할까요?</Text>
				<CloseButton type="button" onClick={handleModal.close}>
					<IoMdClose size={24} />
				</CloseButton>
				<ButtonWrap>
					<button type="button">확인</button>
					<button type="button" onClick={handleModal.close}>
						취소
					</button>
				</ButtonWrap>
			</Layer>
		</ModalPortal>
	);
}

const Layer = styled.div`
	position: fixed;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	background: #fff;
	width: 423px;
	height: 300px;
	text-align: center;
	z-index: 10;
	border-radius: 12px;
	box-shadow: 0 14px 28px rgba(0, 0, 0, 0.05), 0 10px 10px rgba(0, 0, 0, 0.04);
	border: 1px solid #eee;
`;

const CloseButton = styled.button`
	position: absolute;
	top: 16px;
	right: 16px;
`;
const ButtonWrap = styled.div`
	position: absolute;
	bottom: 0;
	width: 100%;
	padding: 20px;

	button {
		border-radius: 8px;
		width: 48%;
		background-color: #dadada52;
		padding: 20px;

		+ button {
			margin-left: 2%;
		}
	}
`;

const Text = styled.p`
	position: absolute;
	left: 50%;
	top: 30%;
	transform: translateX(-50%);
	font-size: 18px;
`;
