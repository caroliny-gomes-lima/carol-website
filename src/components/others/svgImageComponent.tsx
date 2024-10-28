import styled from "styled-components";
import { ReactComponent as PurpleLogo } from "../../assets/svg/LogoFinalPurple.svg";
import { ReactComponent as BlackLogo } from "../../assets/svg/LogoFinalBlack.svg";
import { ReactComponent as LogoPlusName } from "../../assets/svg/LogoFinalPlusName.svg";
import { ReactComponent as AvatarThinkingCode } from "../../assets/svg/AvatarThinkingCode.svg";

const PurpleLogoStyled = styled(PurpleLogo)(() => {
   return {
      ".cls-1": {
         fill: "#6e07f3"
      },
      ".cls-2": {
         fill: "#000000",
         stroke: "#000000",
      }
   }
});

const BlackLogoStyled = styled(BlackLogo)(() => {
   return {
      ".cls-1": {
         fill: "#000000"
      },
      ".cls-2": {
         fill: "#ffffff",
         stroke: "#ffffff",
      }
   }
})

const AvatarThinkingCodeStyled = styled(AvatarThinkingCode)(() => {
   return {
      ".cls-1": {
         fill: "#14161a",
         stroke: "#14161a",
      },
      ".cls-2": {
         fill: "#daaf82",
         stroke: "#14161a",
      },
      ".cls-3": {
         fill: "#744700",
      },
      ".cls-4": {
         fill: "#c5841d",
      },
      ".cls-5": {
         fill: "white",
      },
      ".cls-6": {
         fill: "#0b0f23",
      },
      ".cls-7": {
         fill: "#ffffff",
         stroke: "#6e07f3",
      },
      ".cls-8": {
         fill: "#000000",
      },
      ".cls-9": {
         fill: "#6e07f3",
      },
      ".cls-10": {
         fill: "#000000",
      },
   }
})

const svgImageComponent = {
   PurpleLogoStyled,
   BlackLogoStyled,
   LogoPlusName,
   AvatarThinkingCodeStyled,
}

export default svgImageComponent;
