import React from "react";
import Styles from "../styles/Styles";
import { colors, Fonts, Texts } from "config";
import { Grid } from "@mui/material";
import BarChart from "../../Skills/components/BarChart";
import BoxActivities from "../components/BoxActivities";
import { LiveError, LiveProvider } from "react-live";
import {
  ButtonComponent,
  DefaultModal,
  InputComponent,
  SelectionDropDown,
  TextComponent,
} from "components";
import { FormProvider, useForm } from "react-hook-form";
import ChartsDashboard from "../../Skills/components/ChartsDashboard";

const ButtonCodeDemo = `
  function Demo() {
    return (
        <ButtonComponent
          label="Click please!"
          type="button"
          onClick={() => alert('Botão clicado!')}
          fullWidth={false}
          loading={false}
          customButtonColor="white"
          customButtonLabelColor="black"
          customButtonHoverColor="#006dd0"
          customButtonHoverLabelColor="white"
        />
    );
  }
  render(<Demo />);
`;

const SelectionDropDownCodeDemo = `
  function Demo() {
    const dataTesteInteration = [
      { action: () => alert("You selected the first option!"), name: "Select the first option!" },
      { action: () => alert("You selected the second option!"), name: "Select the second option!" },
    ];
    return (
        <SelectionDropDown
          name="Select"
          label="selection drop down"
          options={dataTesteInteration}
          fullWidth={true}
          customButtonColor="black"
          customButtonLabelColor="white"
          customButtonHoverColor="#6e07f3"
          customButtonHoverLabelColor="black"
          customBgMenuColor="black"
          customMenuLabelColor="white"
          customMenuHoverColor="#6e07f3"
          customMenuHoverLabelColor="black"
        />
    );
  }
  render(<Demo />);
`;

const ModalCodeDemo = `
  function Demo() {
    return (
        <DefaultModal
        modalButtonLabel="MODAL"
        modalText={"Para Fechar o modal é sóclicar no botão Fechar ou no icone X"}
        hasConfirmButton={true}
        hasCancelButton={true}
        cancelButtonLabel="Fechar"
        confirmButtonLabel="OK"
        />
    );
  }
  render(<Demo />);
`;

function ExperiencesPage() {
  const texts = Texts["ptBr"].experiences;

  const languagesData = [
    { name: "HTML5", value: 50, color: colors.htmlColor },
    { name: "CSS", value: 70, color: colors.cssColor },
    { name: "Sintaxe JSX", value: 100, color: colors.sintaxeJsxColor },
    {
      name: "JavaScript",
      value: 75,
      color: colors.javaScriptColor,
    },
    {
      name: "TypeScript",
      value: 65,
      color: colors.blue,
    },
  ];

  const frameworksLibsdata = [
    { name: "React", value: 90, color: colors.reactColor },
    { name: "react-router-dom", value: 75, color: colors.gray },
    { name: "React Hooks", value: 50, color: colors.cssColor },
    { name: "Material-UI", value: 100, color: colors.purple },
    { name: "styled-components", value: 100, color: colors.adobeXdColor },
    {
      name: "Chart.js",
      value: 100,
      color: colors.red,
    },
    {
      name: "Axios",
      value: 100,
      color: colors.nodeJsColor,
    },
    {
      name: "Jest",
      value: 30,
      color: colors.javaScriptColor,
    },
    {
      name: "React Testing Library",
      value: 30,
      color: colors.ReactTestingLibrary,
    },
  ];

  const IntegrationData = [
    { name: "Métodos do HTTP", value: 80, color: colors.purple },
    { name: "operações CRUD", value: 100, color: colors.orange },
    { name: "API RESTful", value: 100, color: colors.blue },
  ];

  const OtherToolsData = [
    { name: "Adobe XD e Figma", value: 20, color: colors.adobeXdColor },
    { name: "Node.js", value: 50, color: colors.htmlColor },
    {
      name: "Versionamento e Controle com Git",
      value: 50,
      color: colors.gray,
    },
    { name: "VS Code", value: 50, color: colors.blue },
    { name: "GitLab", value: 100, color: colors.nodeJsColor },
    { name: "SCRUM", value: 100, color: colors.red },
    { name: "KANBAN", value: 100, color: colors.javaScriptColor },
  ];

  const methods = useForm();
  const onSubmit = (data: any) => {
    console.log("!!!!!!!!", data);
  };

  return (
    <>
      <Styles.Container backgroundColor>
        <Styles.Content>
          <TextComponent
            fontSize="1rem"
            typeFont={Fonts.bold}
            textColor={colors.white}
          >
            {texts.experiencesText}
          </TextComponent>
          <Grid container spacing={1} justifyContent="center">
            <BoxActivities textsData={texts.textExperiencesLeft} />
            <BoxActivities textsData={texts.textExperiencesRight} />
          </Grid>
        </Styles.Content>
      </Styles.Container>

      {/* <Grid container justifyContent={"center"} marginTop={15}>
        <Grid item xs={12} sm={11} md={10} lg={10} textAlign={"left"}>
          <Styles.TextStyles>{texts.DashboardText}</Styles.TextStyles>
        </Grid>
      </Grid>
      <Grid container spacing={5} justifyContent="center">
        <Grid item xs={12} sm={11} md={5} lg={5}>
          <BarChart
            chartTitle={texts.chartsTitle[0]}
            chartData={languagesData}
          />
        </Grid>
        <Grid item xs={12} sm={11} md={5} lg={5}>
          <DoughnutChart
            chartTitle={texts.chartsTitle[1]}
            chartData={frameworksLibsdata}
          />
        </Grid>
      </Grid>
      <Grid container spacing={5} justifyContent="center">
        <Grid item xs={12} sm={11} md={5} lg={5}>
          <BarChart
            chartTitle={texts.chartsTitle[2]}
            chartData={IntegrationData}
          />
        </Grid>
        <Grid item xs={12} sm={11} md={5} lg={5}>
          <DoughnutChart
            chartTitle={texts.chartsTitle[3]}
            chartData={OtherToolsData}
          />
        </Grid>
      </Grid>
      <Grid container justifyContent={"center"} marginTop={15}>
        <Grid item xs={12} sm={11} md={10} lg={10} textAlign={"left"}>
          <Styles.TextStyles>
            {texts.practicalExperiencesText}
          </Styles.TextStyles>
        </Grid>
      </Grid>
      <Grid container justifyContent={"center"} marginTop={10}>
        <Grid item xs={12} sm={11} md={10} lg={10} textAlign={"center"}>
          <Styles.TextStyles style={{ fontSize: "1rem" }}>
            {texts.titleCodeDemoButtonComponent}
          </Styles.TextStyles>
        </Grid>
      </Grid>
      <Grid container spacing={5} justifyContent={"center"}>
        <LiveProvider
          code={ButtonCodeDemo}
          scope={{ React, ButtonComponent }}
          language="tsx"
          noInline
        >
          <Grid item xs={12} sm={11} md={5} lg={5}>
            <Styles.LiveEditorCodeBox />
          </Grid>

          <Grid item xs={12} sm={11} md={5} lg={5}>
            <Styles.LivePreviewCodeBox />
            <LiveError style={{ color: "red" }} />
          </Grid>
        </LiveProvider>
      </Grid>
      <Grid container justifyContent={"center"} marginTop={10}>
        <Grid item xs={12} sm={11} md={10} lg={10} textAlign={"center"}>
          <Styles.TextStyles style={{ fontSize: "1rem" }}>
            {texts.titleCodeDemoSelectionDropDown}
          </Styles.TextStyles>
        </Grid>
      </Grid>
      <Grid container spacing={5} justifyContent={"center"}>
        <LiveProvider
          code={SelectionDropDownCodeDemo}
          scope={{ React, SelectionDropDown }}
          language="tsx"
          noInline
        >
          <Grid item xs={12} sm={11} md={5} lg={5}>
            <Styles.LiveEditorCodeBox />
          </Grid>

          <Grid item xs={12} sm={11} md={5} lg={5}>
            <Styles.LivePreviewCodeBox />
            <LiveError style={{ color: "red" }} />
          </Grid>
        </LiveProvider>
      </Grid>
      <Grid container spacing={5} justifyContent={"center"}>
        <LiveProvider
          code={ModalCodeDemo}
          scope={{ React, DefaultModal }}
          language="tsx"
          noInline
        >
          <Grid item xs={12} sm={11} md={5} lg={5}>
            <Styles.LiveEditorCodeBox />
          </Grid>

          <Grid item xs={12} sm={11} md={5} lg={5}>
            <Styles.LivePreviewCodeBox />
            <LiveError style={{ color: "red" }} />
          </Grid>
        </LiveProvider>
      </Grid>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <div
            style={{
              display: "flex",
              width: "50%",
              padding: 10,
              backgroundColor: "red",
            }}
          >
            <InputComponent
              name="example"
              label="Example"
              rules={{ required: "This field is required" }}
              placeholder="Enter something..."
            />
          </div>
          <ButtonComponent
            label="Click please!"
            type="submit"
            //onClick={() => alert('Botão clicado!')}
            fullWidth={false}
            loading={false}
          />
        </form>
      </FormProvider> */}
    </>
  );
}

export default ExperiencesPage;
