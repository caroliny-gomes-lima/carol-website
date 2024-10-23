import React from "react";
import { Box, Grid } from "@mui/material";
import Styles from "../Styles/Styles";
import { colors, Fonts, Texts } from "config";
import DoughnutChart from "./DoughnutChart";
import BarChart from "./BarChart";
import { TextComponent } from "components";
import LevelBar from "./LevelBar";
import RadarChart from "./RadarChart";

function HardSkillsDashboard() {
    const texts = Texts["ptBr"].Skills;

    const languagesData = [
        { name: "HTML5", value: 50, color: "#ff8200" },
        { name: "CSS", value: 70, color: "#00c3ff" },
        { name: "JavaScript", value: 75, color: "#ffe400" },
        { name: "TypeScript", value: 65, color: "#0168FA" },
    ];

    const MOCKDATA_DEV_TOOLS_FRONTEND = [
        { name: "React", value: 90, color: "#0086ff" },
        { name: "react-router-dom", value: 75, color: "#999999" },
        { name: "React Hooks", value: 50, color: "#00c3ff" },
        { name: "Material-UI", value: 100, color: "#6e07f3" },
        { name: "styled-components", value: 100, color: "#ff0096" },
        { name: "Chart.js", value: 100, color: "#E00000" },
        { name: "Axios", value: 100, color: "#00ff22" },
    ];

    const MOCKDATA_DEV_TOOLS_BACKEND = [
        { name: "Nest.js", value: 70, color: "#df234f" },
        { name: "Nodemon", value: 100, color: "#6aa84f" },
        { name: "Docker", value: 75, color: "#0086ff" },
        { name: "PostgreSQL", value: 50, color: "#ff0096" },
        { name: "Swagger", value: 100, color: "#00ff22" },
        { name: "Railway", value: 80, color: "#674ea7" },
    ];

    const IntegrationData = [
        { name: "Métodos do HTTP", value: 80, color: colors.purple },
        { name: "operações CRUD", value: 100, color: colors.orange },
        { name: "API RESTful", value: 100, color: colors.blue },
    ];

    const OtherToolsData = [
        { name: "Adobe XD e Figma", value: 20, color: colors.adobeXdColor },
        { name: "Node.js", value: 100, color: "#6aa84f" },
        {
            name: "Git",
            value: 50,
            color: colors.gray,
        },
        { name: "Yarn", value: 100, color: colors.red },
        { name: "Npm", value: 100, color: colors.javaScriptColor },
        { name: "Insomnia", value: 10, color: colors.blue },
        { name: "Postman", value: 10, color: colors.blue },
        { name: "React Testing Library", value: 30, color: colors.ReactTestingLibrary },
        { name: "Jest", value: 30, color: colors.javaScriptColor },
    ];

    // const frameworksLibsdata = [
    // { name: "Node.js", value: 100, color: "#6aa84f" },
    //     { name: "React", value: 90, color: colors.reactColor },
    //     { name: "react-router-dom", value: 75, color: colors.gray },
    //     { name: "React Hooks", value: 50, color: colors.cssColor },
    //     { name: "Material-UI", value: 100, color: colors.purple },
    //     { name: "styled-components", value: 100, color: colors.adobeXdColor },
    //     { name: "Chart.js", value: 100, color: colors.red },
    //     { name: "Axios", value: 100, color: colors.nodeJsColor },
    //     { name: "Jest", value: 30, color: colors.javaScriptColor },
    //     { name: "React Testing Library", value: 30, color: colors.ReactTestingLibrary },
    // ];

    return (
        <Styles.Container backgroundColor>
            <Styles.Content>

                <LevelBar barLevelTitle={texts.levelTitle[0]} juniorLevel={45} plenoLevel={6} seniorLevel={0} />

                <LevelBar barLevelTitle={texts.levelTitle[1]} juniorLevel={45} plenoLevel={0} seniorLevel={0} />
                <TextComponent fontSize="1rem" typeFont={Fonts.bold} textColor={colors.white}>
                    {texts.DashboardText}
                </TextComponent>

                {/* Gráficos */}
                <Grid container spacing={2} justifyContent="center">
                    <Grid item xs={11} sm={11} md={6} lg={5}>
                        <DoughnutChart chartTitle={texts.chartsTitle[1]} chartData={MOCKDATA_DEV_TOOLS_FRONTEND} />
                    </Grid>
                    <Grid item xs={11} sm={11} md={6} lg={5}>
                        <DoughnutChart chartTitle={texts.chartsTitle[2]} chartData={MOCKDATA_DEV_TOOLS_BACKEND} />
                    </Grid>
                    <Grid item xs={11} sm={11} md={6} lg={5}>
                        <BarChart chartTitle={texts.chartsTitle[0]} chartData={languagesData} />
                    </Grid>
                    <Grid item xs={11} sm={11} md={6} lg={5}>
                        <DoughnutChart chartTitle={texts.chartsTitle[0]} chartData={OtherToolsData} />
                    </Grid>
                </Grid>
            </Styles.Content>
        </Styles.Container>
    );
}

export default HardSkillsDashboard;
