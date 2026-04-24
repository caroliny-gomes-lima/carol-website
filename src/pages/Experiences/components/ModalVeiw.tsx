import Styles from "../styles/Styles";
import { TextComponent } from "components";
import { colors, Fonts } from "config";
import avatar from "../../../assets/Images/avatar.jpg";
import { Loader } from "components";

export function ModalView({ loading = false, data }: { loading?: boolean; data?: any }) {

    console.log("Data recebida no ModalView:", data);

    const ModalContent = () => (
        <>
            <TextComponent
                fontSize="2rem"
                customTypeFont={Fonts.bold}
                textColor={colors.white}
            >
                Ficha do Personagem
            </TextComponent>

            <Styles.ModalCardFrame>
                <Styles.ModalCardContent>
                    <Styles.ModalCharacterImage src={data?.character_image_url || avatar} />

                    <TextComponent
                        fontSize="1.5rem"
                        customTypeFont={Fonts.bold}
                        textColor={colors.white}
                    >
                        {data?.character_name || "Clive Dark Urge"}
                    </TextComponent>

                    <TextComponent fontSize="1rem" textColor={colors.white}>
                        Raça: {data?.race_id || "Humano"} &nbsp;&nbsp; Classe: {data?.class_id || "Paladino"}
                    </TextComponent>

                    <Styles.CharacterDescription>
                        <TextComponent fontSize="1rem" textColor={colors.white}>
                            Descrição
                        </TextComponent>
                        <Styles.CharacterDescriptionBox>
                            <TextComponent fontSize="0.8rem" textColor={colors.black}>
                                {data?.character_description || "Lorem ipsum faucibus fringilla nullam donec sodales, curae ultricies varius amet purus, mauris sapien ultricies vivamus sed. dictumst ut erat himenaeos lorem habitasse, facilisis quis aptent diam quisque, torquent hac ad dictum. ad aenean massa aliquet ornare ut hac mollis ut orci, ac nostra donec vestibulum"}
                            </TextComponent>
                        </Styles.CharacterDescriptionBox>
                    </Styles.CharacterDescription>
                </Styles.ModalCardContent>
            </Styles.ModalCardFrame>
        </>
    );

    const ModalCompoent = Loader({ WrappedComponent: ModalContent });

    return (
        <Styles.ModalContainer>
            <ModalCompoent loading={loading} size={50} />
        </Styles.ModalContainer>
    );
}
