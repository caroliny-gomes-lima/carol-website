import React from "react";
import Styles from "../Styles/Styles";
import { colors, Fonts, Texts } from "config";
import { Grid } from "@mui/material";
import { TextComponent } from "components";
import ChartsDashboard from "../components/ChartsDashboard";

function SkillsPage() {
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
                </Styles.Content>
            </Styles.Container>
            <ChartsDashboard />
        </>
    );
}

export default SkillsPage;
