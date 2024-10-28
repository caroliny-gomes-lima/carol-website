import styled from "styled-components";
import { ReactComponent as PurpleLogo } from "../../assets/svg/LogoFinalPurple.svg";
import { ReactComponent as BlackLogo } from "../../assets/svg/LogoFinalBlack.svg";
import { ReactComponent as LogoPlusName } from "../../assets/svg/LogoFinalPlusName.svg";
import { ReactComponent as AvatarThinkingCode } from "../../assets/svg/AvatarThinkingCode.svg";
import { ReactComponent as bewikiLogoSVG } from "../../assets/svg/bewiki-logo.svg";
import { ReactComponent as laborAnalytcsLogoSVG } from "../../assets/svg/logo-laborAnalytcs.svg";
import { ReactComponent as bioCoinLogoSVG } from "../../assets/svg/ColorfulBioLogo.svg";
import { ReactComponent as plurioLogoSVG } from "../../assets/svg/logo-plurio-positivo.svg";
import { ReactComponent as xcoridLogoSVG } from "../../assets/svg/xcorid-logo-negative.svg";
import { ReactComponent as AcateLogoSVG } from "../../assets/svg/AcateMark.svg";
import { ReactComponent as engieLogoSVG } from "../../assets/svg/engieLogo.svg";

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

const BewikiLogo = styled(bewikiLogoSVG)`
  width: 100px; /* Defina o tamanho fixo ou variável que preferir */
  height: 50px;
  object-fit: contain;
`;

const LaborAnalytcsLogo = styled(laborAnalytcsLogoSVG)`
  width: 110px;
  height: 50px;
  object-fit: contain;
`;

const BioCoinLogo = styled(bioCoinLogoSVG)`
  width: 110px;
  height: 50px;
  object-fit: contain;
`;

const PlurioLogo = styled(plurioLogoSVG)`
  width: 110px;
  height: 50px;
  object-fit: contain;
`;

const XcoridLogo = styled(xcoridLogoSVG)`
  width: 110px;
  height: 50px;
  object-fit: contain;
`;

const AcateLogo = styled(AcateLogoSVG)`
  width: 110px;
  height: 50px;
  object-fit: contain;
`;

const EngieLogo = styled(engieLogoSVG)`
  width: 110px;
  height: 50px;
  object-fit: contain;
`;


const svgImageComponent = {
   PurpleLogoStyled,
   BlackLogoStyled,
   LogoPlusName,
   AvatarThinkingCodeStyled,
   BewikiLogo,
   LaborAnalytcsLogo,
   BioCoinLogo,
   PlurioLogo,
   XcoridLogo,
   AcateLogo,
   EngieLogo
}

export default svgImageComponent;
