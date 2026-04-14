import React from "react";

export type ModalType = "DEFAULT_MODAL" | "CUSTOM_MODAL" | null;

export interface ModalContextType {
    modalType: ModalType;
    modalProps?: any;
    openModal: (type: ModalType, props?: any) => void;
    closeModal: () => void;
}

export const ModalContext = React.createContext<ModalContextType | null>(null);
