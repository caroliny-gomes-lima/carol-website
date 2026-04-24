import { colors, Fonts, Texts } from "config";
import { TableComponent, TextComponent } from "components";
import Styles from "../styles/Styles";
import ExperienceComponents from "../components/ExperienceComponents";
import { useCharactersList } from "context";
import { yellow } from "@mui/material/colors";
import { useModal } from "context";
import { ModalView } from "../components/ModalVeiw";
import ModalEditCharacterFormulary from "../components/ModalEdit";

function ExperiencesPage() {
  const texts = Texts["ptBr"];
  const { openModal } = useModal();

  const { charactersList } = useCharactersList();

  console.log("Lista de personagens obtida do contexto:", charactersList);

  const Submit = (data: Record<string, unknown>) => {
    console.log(data);
    // data.file = selectedFile.url;
    // setLoading(true);
    openModal("DEFAULT_MODAL", {
      title: texts.modals.Accepted,
      message: "Esta é uma mensagem de modal padrãooo.",
      buttonAccept: {
        text: texts.modals.confirmation[1],
        onClick: () => alert(JSON.stringify(data)),
      },
      buttonReject: {
        text: texts.modals.cancel[1],
      },
    })
  };


  const tableHeadTitles = ["Id", "Nome do personagem", "Raça", "Classe", "Ações"];

  const tableDataMock = [
    {
      id: 1,
      name: "John Doe",
      characterRace: "Humano",
      characterClass: "Guerreiro",
    },
    {
      id: 2,
      name: "Jane Smith",
      characterRace: "Elfo",
      characterClass: "Mago",
    },
    {
      id: 3,
      name: "Alice Johnson",
      characterRace: "Anão",
      characterClass: "Clérigo",
    },
    {
      id: 4,
      name: "Bob Brown",
      characterRace: "Humano",
      characterClass: "Guerreiro",
    },
    {
      id: 5,
      name: "Charlie White",
      characterRace: "Humano",
      characterClass: "Mago",
    },
    {
      id: 6,
      name: "Diana Green",
      characterRace: "Humano",
      characterClass: "Mago",
    },
    {
      id: 7,
      name: "John Doe",
      characterRace: "Humano",
      characterClass: "Guerreiro",
      email: "kZV7M@example.com",
    },
    {
      id: 8,
      name: "Jane Smith",
      characterRace: "Humano",
      characterClass: "Mago",
    },
    {
      id: 9,
      name: "Alice Johnson",
      characterRace: "Humano",
      characterClass: "Clérigo",
    },
    {
      id: 10,
      name: "Bob Brown",
      characterRace: "Humano",
      characterClass: "Guerreiro",
    },
    {
      id: 11,
      name: "Charlie White",
      characterRace: "Humano",
      characterClass: "Mago",
    },
    {
      id: 12,
      name: "Diana Green",
      characterRace: "Humano",
      characterClass: "Mago",
    },
  ];

  return (
    <>
      <Styles.Container>
        <Styles.Content>
          <TextComponent
            fontSize="2rem"
            customTypeFont={Fonts.bold}
            textColor={colors.white}
          >
            {texts.experiences.experiencesTitle}
          </TextComponent>
        </Styles.Content>
      </Styles.Container>

      <Styles.Container backgroundColor>
        <Styles.Content>
          <TextComponent
            fontSize="1rem"
            customTypeFont={Fonts.bold}
            textColor={colors.white}
          >
            {texts.experiences.ExperiencesSubtitle[0]}
          </TextComponent>
          <TextComponent
            fontSize="1rem"
            customTypeFont={Fonts.bold}
            textColor={colors.white}
          >
            <span
              style={{
                color: yellow[400],
                fontWeight: "bold",
                marginRight: "10px",
              }}
            >
              Dica:
            </span>
            {texts.experiences.ExperiencesSubtitle[1]}
          </TextComponent>

          <ExperienceComponents onSubmit={(data) => Submit(data)} />

          <TableComponent
            tableHeadTitles={tableHeadTitles}
            tableData={charactersList || tableDataMock}

            actions={[
              {
                label: "VISUALIZAR",
                color: colors.lightBlue,
                onClick: (row: any) => openModal("CUSTOM_MODAL", {
                  title: "",
                  content: <ModalView data={row} />,
                  buttonReject: {
                    text: texts.modals.cancel[1],
                  },
                }),
              },
              {
                label: "EDITAR",
                color: colors.orange,
                onClick: () => openModal("CUSTOM_MODAL", {
                  title: "",
                  content: <ModalEditCharacterFormulary onSubmit={() => null} />,
                  buttonReject: {
                    text: texts.modals.cancel[1],
                  },
                }),
              },
              {
                label: "DELETAR",
                color: colors.red,
                onClick: () => {

                }
              }
            ]}
          />

        </Styles.Content>
      </Styles.Container>
    </>
  );
}

export default ExperiencesPage;
