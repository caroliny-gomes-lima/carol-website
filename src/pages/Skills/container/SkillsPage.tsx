import React from "react";
import Styles from "../Styles/Styles";
import { colors, Fonts, Texts } from "config";
import { Grid } from "@mui/material";
import { TextComponent } from "components";
import HardSkillsDashboard from "../components/HardSkillsDashboard";

function SkillsPage() {
    const texts = Texts["ptBr"].Skills;
    return (
        <>
            <Styles.Container>
                <Styles.Content>
                    <TextComponent
                        fontSize="2rem"
                        typeFont={Fonts.extraBold}
                        textColor={colors.white}
                    >
                        {texts.SkillsTitle[0]}
                    </TextComponent>
                </Styles.Content>
            </Styles.Container>
            <HardSkillsDashboard />

            <Styles.Container>
                <Styles.Content>
                    <TextComponent
                        fontSize="2rem"
                        typeFont={Fonts.extraBold}
                        textColor={colors.white}
                    >
                        {texts.SkillsTitle[1]}
                    </TextComponent>
                </Styles.Content>
            </Styles.Container>
            {/* <ChartsDashboard /> */}
        </>
    );
}

export default SkillsPage;
