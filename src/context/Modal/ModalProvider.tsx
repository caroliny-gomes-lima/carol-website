import React from "react";

import { ModalContext, ModalType } from "./ModalContext";

export const ModalProvider = ({ children }: { children: React.ReactNode }) => {
    const [modalType, setModalType] = React.useState<ModalType>(null);
    const [modalProps, setModalProps] = React.useState<any>(null);

    const openModal = (type: ModalType, props?: any) => {
        setModalType(type);
        setModalProps(props);
    };

    const closeModal = () => {
        setModalType(null);
        setModalProps(null);
    };

    return (
        <ModalContext.Provider
            value={{ modalType, modalProps, openModal, closeModal }}
        >
            {children}
        </ModalContext.Provider>
    );
};
