import { createPortal } from "react-dom";

export default function ModalPortal({ children, containerId }) {
  const root = document.getElementById(containerId);

  return createPortal(children, root);
}
