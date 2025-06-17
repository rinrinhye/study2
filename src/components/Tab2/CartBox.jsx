import { useState } from "react";
import { IoCartOutline } from "react-icons/io5";
import { CiCircleMinus, CiCirclePlus } from "react-icons/ci";
import styled from "styled-components";
import LayerAddToCart from "./LayerAddToCart";
import useModal from "../../hooks/useModal";

export default function CartBox() {
	const [count, setCount] = useState(1);
	const modal = useModal();

	const handleCount = (type) => {
		if (type === "decrease") setCount((prev) => (prev === 1 ? 1 : prev - 1));
		if (type === "increase") setCount((prev) => prev + 1);
	};

	return (
		<>
			<Box>
				<CountBox>
					<button type="button" onClick={() => handleCount("decrease")}>
						<CiCircleMinus size={32} color="gray" />
					</button>
					<span>{count}</span>
					<button type="button" onClick={() => handleCount("increase")}>
						<CiCirclePlus size={32} color="gray" />
					</button>
				</CountBox>
				<button type="button" onClick={modal.open}>
					<IoCartOutline size={20} color="#fff" />
				</button>
			</Box>
			{modal.isOpen && <LayerAddToCart handleModal={modal} />}
		</>
	);
}

const Box = styled.div`
	padding: 8px 8px 4px;
	display: flex;
	justify-content: space-between;

	> button {
		border-radius: 24px;
		padding: 0 16px;
		background-color: #ffd200;
	}
`;

const CountBox = styled.div`
	span {
		margin: 0 12px;
	}

	button {
		vertical-align: middle;
	}
`;
