import { Grid } from "@mui/material";
import Styles from "../Styles/Styles";
import { colors, Fonts, Texts } from "config";
import DoughnutChart from "./DoughnutChart";
import BarChart from "./BarChart";
import { TextComponent } from "components";

import {
    MOCKDATA_DEV_TOOLS_BACKEND,
    MOCKDATA_DEV_TOOLS_FRONTEND,
    MOCKDATA_LANGUAGES,
    MOCKDATA_OTHERS_TOOLS,
} from "mocks/DataMocks";

function HardSkillsDashboard() {
    const texts = Texts["ptBr"].Skills;
    const renderDoughnutChart = (
        title: string,
        chartData: {
            name: string;
            value: number;
            color: string;
        }[]
    ) => (
        <Grid item xs={11} sm={11} md={6} lg={5}>
            <DoughnutChart chartTitle={title} chartData={chartData} />
        </Grid>
    );

    return (
        <Styles.Container backgroundColor>
            <Styles.Content>
                <TextComponent
                    fontSize="1rem"
                    customTypeFont={Fonts.bold}
                    textColor={colors.white}
                >
                    {texts.DashboardText[0]}
                </TextComponent>

                {/* Gráficos */}
                <Grid container spacing={2} justifyContent="center">
                    {renderDoughnutChart(
                        texts.chartsTitle[1],
                        MOCKDATA_DEV_TOOLS_FRONTEND
                    )}

                    {renderDoughnutChart(
                        texts.chartsTitle[2],
                        MOCKDATA_DEV_TOOLS_BACKEND
                    )}

                    <Grid item xs={11} sm={11} md={6} lg={5}>
                        <BarChart
                            chartTitle={texts.chartsTitle[0]}
                            chartData={MOCKDATA_LANGUAGES}
                        />
                    </Grid>
                    {renderDoughnutChart(texts.chartsTitle[3], MOCKDATA_OTHERS_TOOLS)}
                </Grid>
            </Styles.Content>
        </Styles.Container>
    );
}

export default HardSkillsDashboard;
