import { createPortal } from "react-dom";

function ModalPortal({ children }) {
  const modalRoot = document.getElementById("modal-root");
  return createPortal(<div>{children}</div>, modalRoot);
}

export default ModalPortal;
