import React from "react";
import styled from "styled-components";
import svgImageComponent from "./svgImageComponent";
import { Theme } from "config";

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
        <svgImageComponent.PurpleLogo
          style={{
            marginTop: "5px",
            width: "55px",
            height: "60px",
            marginLeft: Theme.Dark.spacing(1.8),
            //marginRight: "5px"
          }}
        />
      )}
      {BlackLogo && (
        <svgImageComponent.BlackLogo
          style={{
            marginTop: Theme.Dark.spacing(2),
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
            marginTop: Theme.Dark.spacing(2),
            width: "250px",
            height: "60px",
            marginBottom: Theme.Dark.spacing(2),
            //marginRight: "5px"
          }}
        />
      )}
    </LogoContainer>
  );
}

export default DefaultLogo;
