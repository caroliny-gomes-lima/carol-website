import React from "react";
import Styles from "../Styles/Styles";
import { colors, Fonts, Texts } from "config";
import DoughnutChart from "../components/DoughnutChart";
import { Grid } from "@mui/material";
import BarChart from "./BarChart";
import { TextComponent } from "components";
import RadarChart from "./RadarChart";

function ChartsDashboard() {
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

    return (
        <>
            <Styles.Container backgroundColor>
                <Styles.Content >
                    <TextComponent fontSize="1rem"
                        typeFont={Fonts.bold}
                        textColor={colors.white}>{texts.DashboardText}</TextComponent>
                    <Grid container spacing={2} justifyContent="center">
                        <Grid item xs={11} sm={11} md={6} lg={5}>
                            <BarChart
                                chartTitle={texts.chartsTitle[0]}
                                chartData={languagesData}
                            />
                        </Grid>
                        <Grid item xs={12} sm={11} md={6} lg={5}>
                            <DoughnutChart
                                chartTitle={texts.chartsTitle[1]}
                                chartData={frameworksLibsdata}
                            />
                        </Grid>
                        {/* <Grid item xs={12} sm={11} md={6} lg={5}>
                            <RadarChart
                                chartTitle={texts.chartsTitle[1]}
                                chartData={frameworksLibsdata}
                            />
                        </Grid> */}
                    </Grid>
                </Styles.Content>
            </Styles.Container>
        </>
    );
}

export default ChartsDashboard;
