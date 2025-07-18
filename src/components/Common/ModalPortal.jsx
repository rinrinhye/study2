import { createPortal } from "react-dom";

export default function ModalPortal({ children, containerId = "modal-root" }) {
	const root = document.getElementById(containerId);

	return createPortal(children, root);
}
