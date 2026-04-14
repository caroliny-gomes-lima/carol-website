import React from "react";
import { ModalContext } from "context/Modal/ModalContext";
import DefaultModal from "context/Modal/DefaultModal";
import CustomModal from "context/Modal/CustomModal";




// import CustomModal from "./Modal/CustomModal";

export const useModal = () => {
    const context = React.useContext(ModalContext);
    if (!context) {
        throw new Error("useModal não está dentro de um ModalProvider");
    }
    return context;
};

const ModalRoot = () => {
    const { modalType, modalProps, closeModal } = useModal();
    if (!modalType) return null;

    switch (modalType) {
        case "DEFAULT_MODAL":
            return <DefaultModal closeModal={closeModal} modalProps={modalProps} />;
        case "CUSTOM_MODAL":
            return <CustomModal closeModal={closeModal} modalProps={modalProps} />;
        default:
            return null;
    }
}

export default ModalRoot;

//Colocoar um tratamento de erro caso a atributo message seja undefined ou nulo.