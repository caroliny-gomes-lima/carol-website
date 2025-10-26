import Styles from "../styles/Styles";
import { colors, Fonts, Texts } from "config";
import { Grid } from "@mui/material";
import { ButtonComponent, svgImageComponent, TextComponent } from "components";
import ProjectVideo from "../../../assets/video/plurio-project.mp4";
import { FaGithub } from 'react-icons/fa';

function WorksPage() {
    const texts = Texts["ptBr"].Works;

    const CompanyLogos = () => (
        <Grid item xs={12} sm={12} md={12} lg={12}>
            <Styles.companyGroups>
                <Styles.companyAnimation className="companyWorks">
                    {[
                        svgImageComponent.BewikiLogo,
                        svgImageComponent.LaborAnalytcsLogo,
                        svgImageComponent.BioCoinLogo,
                        svgImageComponent.PlurioLogo,
                        svgImageComponent.XcoridLogo,
                        svgImageComponent.AcateLogo,
                        svgImageComponent.EngieLogo
                    ].map((LogoComponent, index) => (
                        <Styles.companyBox key={index}>
                            <LogoComponent />
                        </Styles.companyBox>
                    ))}
                </Styles.companyAnimation>
            </Styles.companyGroups>
        </Grid>
    );

    return (
        <>
            <Styles.Container>
                <Styles.Content>
                    <TextComponent
                        customTypeFont={Fonts.medium}
                        fontSize="2rem"
                        textColor={colors.white}
                    >
                        {texts.worksTitle[0]}
                    </TextComponent>
                </Styles.Content>
            </Styles.Container>
            <Styles.Container backgroundColor>
                <Styles.Content>
                    <TextComponent
                        customTypeFont={Fonts.medium}
                        fontSize="1rem"
                        textColor={colors.white}
                    >
                        {texts.worksText[0]}
                    </TextComponent>
                    <Grid
                        item
                        xs={9}
                        sm={10}
                        md={10}
                        lg={8}
                        display={"flex"}
                        justifyContent={"center"}
                    >
                        <Styles.MovieBox>
                            <video width="100%" controls>
                                <source src={ProjectVideo} type="video/mp4" />
                                Seu navegador não suporta o elemento de vídeo.
                            </video>
                        </Styles.MovieBox>
                    </Grid>

                    <TextComponent
                        customTypeFont={Fonts.medium}
                        fontSize="1rem"
                        textColor={colors.white}
                        style={{ marginTop: "20px" }}
                    >
                        {texts.worksText[1]}
                    </TextComponent>
                    <Grid item xs={12} sm={8} md={8} lg={8}>
                        <ButtonComponent
                            backgroundColor={colors.purple}
                            textColor={colors.white}
                            // onClick={() =>
                            //     window.open("https://petlivre-production.up.railway.app/api#/")
                            // }
                            onClick={() =>
                                window.open("https://github.com/caroliny-gomes-lima/PROJETO-INTEGRADOR-PET-LIVRE")
                            }
                            endIcon={<FaGithub />}
                        >
                            {texts.gitHubButton}
                        </ButtonComponent>
                    </Grid>
                </Styles.Content>
            </Styles.Container>
            <Styles.Container>
                <Styles.Content>
                    <TextComponent
                        customTypeFont={Fonts.medium}
                        fontSize="2rem"
                        textColor={colors.white}
                    >
                        {texts.worksTitle[1]}
                    </TextComponent>
                </Styles.Content>
            </Styles.Container>
            <Styles.Container backgroundColor>
                <Styles.Content>
                    <TextComponent
                        customTypeFont={Fonts.medium}
                        fontSize="1rem"
                        textColor={colors.white}
                    >
                        {texts.worksText[2]}
                    </TextComponent>
                    <CompanyLogos />
                </Styles.Content>
            </Styles.Container>
        </>
    );
}

export default WorksPage;
