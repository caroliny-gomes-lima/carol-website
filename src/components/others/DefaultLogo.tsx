import React from "react";
import styled from "styled-components";
import svgImageComponent from "./svgImageComponent";

const LogoContainer = styled.div(() => {
    return {
      width: "fit-content",
      height: "fit-conent",
      flexShrink: 0,
    };
  });
  
//   type DefaultLogoProps = {
//     MedicareHeartIcon?: boolean;
//     WhiteLogo?: boolean;
//   };

function DefaultLogo() {
    return (
      <LogoContainer>
          <svgImageComponent.CarolCodeLogo
            style={{
              marginTop: "5px",
              width: "60px",
              height: "60px",
              //marginLeft: "5px",
              //marginRight: "5px"
            }}
          />
      </LogoContainer>
    );
  }
  
  export default DefaultLogo;
  