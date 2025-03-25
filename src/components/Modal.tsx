import { ModalProps } from "@/models/data";
import { useEffect } from "react";


const Modal = ({ children, isOpen, handleClose } : ModalProps) => {
    
    useEffect(() => {
        const closeOnEscapeKey = (e: KeyboardEvent) => e.key === "Escape" ? handleClose() : null;
        document.body.addEventListener("keydown", closeOnEscapeKey);
        return () => {
            document.body.removeEventListener("keydown", closeOnEscapeKey);
        };
    }, [handleClose]);
    
    useEffect(() => {
        document.body.style.overflow = "hidden";
        return (): void => {
            document.body.style.overflow = "unset";
        };
    }, [isOpen]);
    
    if(!isOpen) return null;

    return (
    <div>Modal</div>
  )
};

export default Modal;