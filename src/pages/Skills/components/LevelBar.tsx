import { Box } from "@mui/material";
import Styles from "../Styles/Styles";
import { colors, Fonts, Texts } from "config";
import { TextComponent } from "components";

type Props = {
    juniorLevel: number;
    plenoLevel: number;
    seniorLevel: number;
    barLevelTitle: string;
};

function LevelBar({
    barLevelTitle,
    juniorLevel,
    plenoLevel,
    seniorLevel,
}: Props) {
    const texts = Texts["ptBr"].Skills;

    const pointerPosition = Math.min(juniorLevel + plenoLevel, 100);

    return (
        <div
            style={{
                display: "flex",
                width: "100%",
                flexDirection: "column",
                justifyContent: "flex-start",
            }}
        >
            <TextComponent
                fontSize="1rem"
                customTypeFont={Fonts.bold}
                textColor={colors.white}
            >
                {barLevelTitle}
            </TextComponent>
            <Box
                sx={{
                    width: "100%",
                    marginBottom: { xs: "1rem", sm: "2rem" },
                    position: "relative",
                }}
            >
                <Styles.LevelBar>
                    {/* Nível Júnior */}
                    <Styles.Level
                        backgroundColor={juniorLevel === 0 ? "transparent" : colors.red}
                        width={`${juniorLevel}%`}
                    >
                        <TextComponent
                            fontSize="1rem"
                            customTypeFont={Fonts.bold}
                            textColor={colors.black}
                        >
                            {texts.level[0]}
                        </TextComponent>
                    </Styles.Level>

                    {/* Nível Pleno */}
                    <Styles.Level
                        backgroundColor={plenoLevel === 0 ? "transparent" : colors.yellow}
                        width={`${plenoLevel}%`}
                    >
                        <TextComponent
                            fontSize="1rem"
                            customTypeFont={Fonts.bold}
                            textColor={plenoLevel === 0 ? colors.white : colors.black}
                        >
                            {texts.level[1]}
                        </TextComponent>
                    </Styles.Level>

                    {/* Nível Sênior */}
                    <Styles.Level
                        backgroundColor={seniorLevel === 0 ? "transparent" : colors.blue}
                        width={`${seniorLevel}%`}
                    >
                        <TextComponent
                            fontSize="1rem"
                            customTypeFont={Fonts.bold}
                            textColor={colors.white}
                            style={{ paddingInline: plenoLevel === 0 ? 25 : 0 }}
                        >
                            {texts.level[2]}
                        </TextComponent>
                    </Styles.Level>
                </Styles.LevelBar>

                {/* Ponteiro */}
                <Box
                    sx={{
                        position: "absolute",
                        top: "-15px",
                        left: `${pointerPosition}%`,
                        transform: "translateX(-50%)",
                        width: "0",
                        height: "0",
                        borderLeft: "10px solid transparent",
                        borderRight: "10px solid transparent",
                        borderBottom: "15px solid white",
                    }}
                />
            </Box>
        </div>
    );
}

export default LevelBar;
