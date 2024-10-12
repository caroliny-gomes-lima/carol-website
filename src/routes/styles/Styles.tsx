import { colors, Theme } from "config";
import styled, { css } from "styled-components";
import GifImage from "../../assets/gif/space-travel-800x600loop.gif"

// const Container = styled.div(() => {
//   return {
//     display: "flex",
//     flexDirection: "row",
//     height: "100%",
//   }
// })

// const RoutesContainer = styled.div(() => {
//   return {
//     display: "flex",
//     flexDirection: "column",
//     flexWrap: "nowrap",
//     maxWidth: "100vw",
//     height: "100%",
//   };
// });

const PageContainer = styled.div(() => {
  return {
    width: "100%",
    height: "calc(93.8vh - 10px)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    gap: Theme.Dark.spacing(40),
    overflowY: "auto",
    overflowX: "hidden",
    "&::-webkit-scrollbar": {
      width: "0.4em",
      height: "0.4em",
    },
    "&::-webkit-scrollbar-thumb": {
      backgroundColor: colors.purple,
    },
  };
});

// const LogoAsBackground = styled.div(({theme}) => {
// return {
//   backgroundImage: `url(${LargeLogo})`,
//   backgroundRepeat: "no-repeat",
//   opacity: "0.1",
//   position: "absolute",
//   top: 100,
//   left: 400,
//   width: "70%",
//   height: "85%",
//   zIndex: -1,
// }
// })

const PageContent = styled.div(() => {
  return {
    width: "100%",
    height: "100%",
    backgroundColor: "red",
  };
});

const BackgroundGif = styled.div`
  ${() => css`
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-image: url(${GifImage});
      background-size: cover;
      background-position: center;
      z-index: -1;
      opacity: 0.1;
    }
  `}
`;

const Styles = {
  //Container,
  //RoutesContainer,
  PageContainer,
  PageContent,
  BackgroundGif,
  //LogoAsBackground,
}

export default Styles;
