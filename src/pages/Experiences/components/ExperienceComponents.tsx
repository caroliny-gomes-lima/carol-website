import React from "react";
import Styles from "../styles/Styles";
import { colors, Fonts, Texts } from "config";
import { Grid } from "@mui/material";
import { LiveError, LiveProvider } from "react-live";
import { useForm, FormProvider } from "react-hook-form";
import {
  ButtonComponent,
  ModalCompoent,
  ImageUpload,
  InputComponent,
  ButtonSelectComponent,
  TextComponent,
} from "components";

const SendInputFormCodeDemo = `
 function Demo() {
    const methods = useForm();
    return (
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit((data) => alert(JSON.stringify(data)))}
         style={{
         width: "100%",
         display: "flex",
         flexDirection: "column",
         justifyContent: "space-between",
         gap: 10,
         alignItems: "center"
        }}>

            <InputComponent name="name" label="Nome" placeholder="Digite seu nome" />
            <InputComponent name="number" label="Numero" type="number" placeholder="Digite seu número" />

            <Grid item xs={12} sm={11} md={10} lg={4}>
            <ButtonComponent label="Confirmar" type="submit" backgroundColor="#6e07f3" textColor="white" />
            </Grid>
        </form>
      </FormProvider>
    );
  }
  render(<Demo />);
`;


const SelectModalCodeDemo = `
  function Demo() {
    const [isModalOpen, setModalOpen] = React.useState(false);
    const dataTesteInteration = [
      { action: () => setModalOpen(true), name: "Primeira Opção" },
      { action: () => setModalOpen(true), name: "Segunda Opção" },
    ];

    return (
      <>
        <ButtonSelectComponent name="Select" label="Selecione uma opção" options={dataTesteInteration} backgroundColor="#6e07f3" textColor="white"/>
        <ModalCompoent
          open={isModalOpen}
          onClose={() => setModalOpen(false)}
          modalText="Modal aberto após selecionar uma opção no dropdown."
          hasConfirmButton
          hasCancelButton
          cancelButtonLabel="Fechar"
          confirmButtonLabel="OK"
        />
      </>
    );
  }
  render(<Demo />);
`;

const SendImageFileCodeDemo = `
  function Demo() {
    const methods = useForm();
    const [selectedImage, setSelectedImage] = React.useState({ url: null, name: "Sem arquivo selecionado" });

    const handleImageChange = (event) => {
        const file = event.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = () => setSelectedImage({ url: reader.result, name: file.name });
            reader.readAsDataURL(file);
        }
    };

    const Submit = (data) => {
      data.image = selectedImage.url;
      alert(JSON.stringify(data));
    };

    return (
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(Submit)}
        style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
        }}>
          {selectedImage.url && (
            <Styles.ImageBox>
              <img src={selectedImage.url} alt="" style={{ width: "250px", height: "auto" }} />
            </Styles.ImageBox>
          )}

          <ImageUpload label="" placeholder={selectedImage.name} onChange={handleImageChange}/>

            <Grid item xs={12} sm={11} md={10} lg={4}>
          <ButtonComponent label="Confirmar" type="submit" backgroundColor="#6e07f3" textColor="white" />
          </Grid>
        </form>
      </FormProvider>
    );
  }
  render(<Demo />);
`;

interface CodeDemoProps {
  code: string;
  scope: any;
}
// Componente auxiliar para renderizar demos de código
const CodeDemo = ({ code, scope }: CodeDemoProps) => (
  <LiveProvider code={code} scope={scope} language="tsx" noInline>
    <Grid item xs={12} sm={11} md={7} lg={7}>
      <Styles.EditorCodeBox />
    </Grid>
    <Grid item xs={12} sm={11} md={4} lg={4}>
      <Styles.PreviewCodeBox />
      <LiveError style={{ color: colors.red }} />
    </Grid>
  </LiveProvider>
);

function ExperienceComponents() {
  const texts = Texts["ptBr"].experiences;

  return (
    <>

      <TextComponent fontSize="1rem" typeFont={Fonts.bold} textColor={colors.white}>
        {texts.titleCodeDemoButtonComponent}
      </TextComponent>
      <Grid container spacing={2} justifyContent="center">
        <CodeDemo
          code={String(SendInputFormCodeDemo)}
          scope={{ React, Grid, ButtonComponent, InputComponent, useForm, FormProvider }}
        />
      </Grid>

      <TextComponent fontSize="1rem" typeFont={Fonts.bold} textColor={colors.white}>
        {texts.titleCodeDemoSelectionDropDown}
      </TextComponent>
      <Grid container spacing={5} justifyContent="center">
        <CodeDemo
          code={SelectModalCodeDemo}
          scope={{ React, ButtonSelectComponent, ModalCompoent }}
        />
      </Grid>


      <TextComponent fontSize="1rem" typeFont={Fonts.bold} textColor={colors.white}>
        {texts.titleCodeDemoUploadComponent}
      </TextComponent>
      <Grid container spacing={5} justifyContent="center">
        <CodeDemo
          code={SendImageFileCodeDemo}
          scope={{ React, Styles, Grid, useForm, FormProvider, ImageUpload, ButtonComponent }}
        />
      </Grid>
    </>
  );
}

export default ExperienceComponents;
