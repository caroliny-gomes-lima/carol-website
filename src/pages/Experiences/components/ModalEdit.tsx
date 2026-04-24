import React from "react";
import Styles from "../styles/Styles";
import { ButtonComponent, FormHolder, ImageUpload, InputComponent, InputDescription, InputSelect, TextComponent } from "components";
import { colors, Fonts, Texts } from "config";
import avatar from "../../../assets/Images/avatar.jpg";
import { Loader } from "components";
import { Grid } from "@mui/material";
import { useCharacterOptions } from "context";


export function ModalEdit({ loading = false, data }: { loading?: boolean; data?: any }) {
    const texts = Texts["ptBr"];
    const [imagePreview, setImagePreview] = React.useState<string | null>(null);
    const { races, classes } = useCharacterOptions();
    console.log("Data recebida no ModalView:", data);

    const ModalContent = () => (
        <>
            <TextComponent
                fontSize="2rem"
                customTypeFont={Fonts.bold}
                textColor={colors.white}
            >
                Editar dados do Personagem
            </TextComponent>
            <Styles.FormularyBox>
                <Grid container spacing={2} alignItems="center" justifyContent="center">
                    <Grid item xs={12} sm={6}>
                        <InputComponent
                            name="characterName"
                            label={texts.experiences.inputsNames[0]}
                            placeholder="Digite o nome do personagem"
                            required
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <ImageUpload
                            label={texts.experiences.inputsNames[4]}
                            onChangeShowImage={(fileData) => {
                                setImagePreview(fileData.url ? String(fileData.url) : null);
                            }}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <InputSelect
                            name="characterRace"
                            label={texts.experiences.inputsNames[1]}
                            options={races}
                            required
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <InputSelect
                            name="characterClass"
                            label={texts.experiences.inputsNames[2]}
                            options={classes}
                            required
                        />
                    </Grid>
                    {imagePreview && (
                        <Styles.ImageBox>
                            <Styles.ImageStyle
                                src={imagePreview}
                                alt="Pré-visualização da imagem"
                            />
                        </Styles.ImageBox>
                    )}
                    <Grid item xs={12}>
                        <InputDescription label={texts.experiences.inputsNames[4]} />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <ButtonComponent
                            type="submit"
                            text="Enviar"
                            loading={false}
                            backgroundColor={colors.purple}
                            textColor={colors.white}
                        >
                            Enviar
                        </ButtonComponent>
                    </Grid>
                </Grid>
            </Styles.FormularyBox>

        </>
    );

    const ModalCompoent = Loader({ WrappedComponent: ModalContent });


    return (
        <Styles.ModalContainer>
            <ModalCompoent loading={loading} size={50} />
        </Styles.ModalContainer>
    );
}

const ModalEditCharacterFormulary = FormHolder(ModalEdit);

export default ModalEditCharacterFormulary;