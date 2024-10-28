//VER SOBR ISSO DEPOIS PQ DEU ERRO NA IMPORTAÇÃO DO SVG
//Link: https://webpack.js.org/guides/typescript/#importing-other-assets
/// <reference types="react-scripts" />
declare module "*.mp4" {
  const src: string;
  export default src;
}
