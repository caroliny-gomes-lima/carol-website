import React from "react";
import Styles from "../styles/Styles";
import { colors, Fonts, Texts } from "config";
import DoughnutChart from "../components/DoughnutChart";
import { Grid } from "@mui/material";
import BarChart from "../components/BarChart";

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

    return (
        <>
            <Styles.Container backgroundColor>
                <Styles.Content>
                    <BarChart
                        chartTitle={texts.chartsTitle[0]}
                        chartData={languagesData}
                    />
                </Styles.Content>
            </Styles.Container>
        </>
    );
}

export default ExperiencesPage;
