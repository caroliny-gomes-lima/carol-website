import React from "react";
import { colors, Texts } from "config";
import { useModal } from "context/components/ModalRoot";
import Styles from "../styles/Styles";
import {
  InputComponent,
  FormHolder,
  InputSelect,
  ImageUpload,
  InputDescription,
  ButtonComponent,
} from "components";
import { Grid } from "@mui/material";

function ExperienceComponents() {
  const texts = Texts["ptBr"];
  const { openModal } = useModal();
  const [imagePreview, setImagePreview] = React.useState<string | null>(null);
  console.log(imagePreview);

  const InputsNames = ["characterName"];

  return (
    <>
      {/* <button
        onClick={() =>
          openModal("DEFAULT_MODAL", {
            title: texts.Accepted,
            message: "Esta é uma mensagem de modal padrãoooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo.",
            buttonAccept: {
              text: texts.confirmation[1],
              onClick: () => console.log("Botão clicado!"),
            },
            buttonReject: {
              text: texts.cancel[1],
            },
          })
        }
      >
        Abrir Modal Padrao
      </button>

      <button
        onClick={() =>
          openModal("CUSTOM_MODAL", {
            title: texts.Accepted,
            content: <p>Esta é uma mensagem de modal customizado.</p>,
            buttonAccept: {
              text: texts.confirmation[1],
              onClick: () => console.log("Botão clicado!"),
            },
            buttonReject: {
              text: texts.cancel[1],
            },
          })
        }
      >
        Abrir Modal Costumizado
      </button> */}

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
              options={[
                { value: "human", label: "Humano" },
                { value: "elf", label: "Elfo" },
                { value: "dwarf", label: "Anão" },
              ]}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <InputSelect
              name="characterClass"
              label={texts.experiences.inputsNames[2]}
              options={[
                { value: "warrior", label: "Guerreiro" },
                { value: "mage", label: "Mago" },
                { value: "archer", label: "Arqueiro" },
              ]}
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
              disabledUntil={InputsNames}
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
}

const CharacterFormularyInputs = FormHolder(ExperienceComponents);

export default CharacterFormularyInputs;

//Colocoar um tratamento de erro caso a atributo message seja undefined ou nulo.
