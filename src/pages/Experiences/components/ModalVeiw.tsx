import React from "react";
import Styles from "../styles/Styles";

export function ModalView() {
    return (
        <div>
            <h2>Modal Customizado</h2>
            <p>Esta é uma mensagem de modal customizado.</p>
            <Styles.ModalCardFrame>
                <Styles.ModalCardContent>
                    <h3>Conteúdo do Modal</h3>
                    <p>Este é o conteúdo dentro do modal customizado.</p>
                </Styles.ModalCardContent>
            </Styles.ModalCardFrame>
        </div>
    );
}

