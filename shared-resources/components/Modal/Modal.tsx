import React, { ReactNode, useEffect } from "react";
import ReactDOM from "react-dom";
import { useFocusTrap } from "../../hooks/useFocusTrap";
import { Dialog, ModalContainer, DialogHeader } from "./Modal.styled";

interface ModalProps {
  isOpen: boolean;
  onClose?: () => void;
  children: ReactNode;
}

const Modal: React.FC<ModalProps> = ({ children, isOpen, onClose }) => {
  const modalRef = useFocusTrap();

  const onKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === "Escape" && onClose) {
      onClose();
    }
  };

  useEffect(() => {
    if (isOpen) {
      const interactiveElements =
        modalRef.current?.querySelectorAll("input, a, button");

      console.log(interactiveElements);

      if (interactiveElements) {
        const firstInteractiveElement = interactiveElements[0];
        if (firstInteractiveElement instanceof HTMLElement) {
          firstInteractiveElement.focus();
        }
      }
    }
  }, [isOpen]);

  if (!isOpen) {
    return null;
  }

  return ReactDOM.createPortal(
    <Dialog ref={modalRef as unknown as React.RefObject<HTMLDialogElement>}>
      <ModalContainer onKeyUp={onKeyDown}>
        <DialogHeader>
          <button onClick={onClose}>close x</button>
        </DialogHeader>
        {children}
      </ModalContainer>
    </Dialog>,
    document?.getElementById("app") as HTMLElement
  );
};

export default Modal;
