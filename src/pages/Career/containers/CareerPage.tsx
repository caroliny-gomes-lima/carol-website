import React from "react";
import Styles from "../styles/Styles";
import { ImageComponent, svgImageComponent } from "components";
import { Grid, useMediaQuery } from "@mui/material";
import { Texts, Theme } from "config";
import CompanyImage from "../../../assets/Images/CompanyMembers.jpg";
//import MemberCompanyImage from "../../../assets/Images/MemberCompany.png";

function CareerPage() {
  const texts = Texts["ptBr"].career;
  const isMobile = useMediaQuery(Theme.Dark.breakpoints.down("sm"));

  return (
    <Styles.Container>
      <Styles.Content>
        <Grid
          container
          spacing={2}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Grid
            item
            xs={9}
            sm={3}
            md={3}
            lg={3}
            display={"flex"}
            justifyContent={"center"}
          >
            {isMobile ? (
              <Styles.AvatarBox>
                <svgImageComponent.AvatarThinkingCodeStyled
                  style={{
                    width: "70vw",
                    height: "60vw",
                  }}
                />
              </Styles.AvatarBox>
            ) : (
              <Styles.AvatarBox>
                <svgImageComponent.AvatarThinkingCodeStyled
                  style={{
                    width: "30vw",
                    height: "20vw",
                  }}
                />
              </Styles.AvatarBox>
            )}
          </Grid>
          <Grid item xs={11} sm={8} md={8} lg={6}>
            <Styles.TextStyles>{texts.avatarText}</Styles.TextStyles>
          </Grid>
        </Grid>

        <Grid container>
          <Styles.ImageCompanyBox>
            <Grid item xs={12} sm={11} md={5} lg={5}>
              <ImageComponent image={CompanyImage} alt="team company" />
            </Grid>
            <Grid item xs={12} sm={11} md={6} lg={6}>
              <Styles.TextStyles>{texts.ComapnyImageText}</Styles.TextStyles>
            </Grid>
          </Styles.ImageCompanyBox>
        </Grid>

        {/* <Grid container>
        <Styles.ImageMemberComapnyBox>
        <Grid item xs={11} sm={8} md={8} lg={3}>
          <ImageComponent image={MemberCompanyImage} alt="Member company" />
          </Grid>
          <Grid item xs={11} sm={8} md={8} lg={8}>
              <Styles.TextStyles>{texts.MemberComapnyImageText}</Styles.TextStyles>
            </Grid>
        </Styles.ImageMemberComapnyBox>
        </Grid> */}
      </Styles.Content>
    </Styles.Container>
  );
}

export default CareerPage;
