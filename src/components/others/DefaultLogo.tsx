import styled from "styled-components";
import svgImageComponent from "./svgImageComponent";
import { Spacing, Theme } from "config";

const LogoContainer = styled.div(() => {
  return {
    width: "fit-content",
    height: "fit-conent",
    flexShrink: 0,
  };
});

type DefaultLogoProps = {
  PurpleLogo?: boolean;
  BlackLogo?: boolean;
  LogoPlusName?: boolean;
};

function DefaultLogo({
  PurpleLogo,
  BlackLogo,
  LogoPlusName,
}: DefaultLogoProps) {
  return (
    <LogoContainer>
      {PurpleLogo && (
        <svgImageComponent.PurpleLogoStyled
          style={{
            marginTop: "5px",
            width: "55px",
            height: "60px",
            marginLeft: Spacing(1.8),
            //marginRight: "5px"
          }}
        />
      )}
      {BlackLogo && (
        <svgImageComponent.BlackLogoStyled
          style={{
            marginTop: Spacing(2),
            width: "65px",
            height: "60px",
            //marginLeft: "5px",
            //marginRight: "5px"
          }}
        />
      )}

      {LogoPlusName && (
        <svgImageComponent.LogoPlusName
          style={{
            marginTop: Spacing(2),
            width: "250px",
            height: "60px",
            marginBottom: Spacing(2),
            //marginRight: "5px"
          }}
        />
      )}
    </LogoContainer>
  );
}

export default DefaultLogo;
