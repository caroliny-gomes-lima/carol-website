import { Grid } from "@mui/material";
import Styles from "../Styles/Styles";
import { colors, Fonts, Texts } from "config";
import { TextComponent } from "components";
import { MOCKDATA_SOFT_SKILLS } from "mocks/DataMocks";
import RadarChart from "./RadarChart";

function SoftSkillsDashboard() {
    const texts = Texts["ptBr"].Skills;

    return (
        <Styles.Container backgroundColor>
            <Styles.Content>
                <Grid
                    container
                    spacing={4}
                    direction="row"
                    alignItems="center"
                    justifyContent="center"
                >
                    <Grid item xs={11} sm={11} md={5} lg={4}>
                        <TextComponent
                            fontSize="1rem"
                            customTypeFont={Fonts.bold}
                            textColor={colors.white}
                        >
                            {texts.DashboardText[1]}
                        </TextComponent>
                    </Grid>
                    <Grid item xs={11} sm={11} md={6} lg={5}>
                        <RadarChart
                            chartTitle={texts.chartsTitle[4]}
                            chartData={MOCKDATA_SOFT_SKILLS}
                        />
                    </Grid>
                </Grid>
            </Styles.Content>
        </Styles.Container>
    );
}

export default SoftSkillsDashboard;
