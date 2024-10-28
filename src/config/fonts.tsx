const light = '"JetBrains Mono light", "Helvetica", "Arial", sans-serif';
const bold = '"JetBrains Mono bold", "Helvetica", "Arial", sans-serif';
const extraBold = '"JetBrains Mono Extrabold", "Helvetica", "Arial", sans-serif';
const medium = '"JetBrains Mono medium", "Helvetica", "Arial", sans-serif';
const roman = '"JetBrains Mono roman", "Helvetica", "Arial", sans-serif';
const italic = '"JetBrains Mono italic", "Helvetica", "Arial", sans-serif';
const semibold = '"JetBrains Mono Semibold", "Helvetica", "Arial", sans-serif';

const sizes = {
  extraSmall: "0.625rem", //10px
  smaller: "0.75rem", //12px
  small: "0.875rem", //14px
  regular: "1rem", //16px
  medium: "1.125rem", //18px
  large: "1.375rem", //22px
  extraLarge: "2.625rem", //42px
};

export const Fonts = {
  bold,
  light,
  sizes,
  medium,
  roman,
  italic,
  semibold,
  extraBold,
};

export const FontFamily = {
  medium12: {
    fontSize: Fonts.sizes.smaller,
    fontFamily: Fonts.medium,
  },
  medium14: {
    fontFamily: Fonts.medium,
    fontSize: Fonts.sizes.small,
  },
  medium16: {
    fontSize: Fonts.sizes.regular,
    fontFamily: Fonts.medium,
  },
  medium42: {
    fontSize: Fonts.sizes.extraLarge,
    fontFamily: Fonts.medium,
  },
  roman12: {
    fontSize: Fonts.sizes.smaller,
    fontFamily: Fonts.roman,
  },
  roman14: {
    fontSize: Fonts.sizes.small,
    fontFamily: Fonts.roman,
  },
  roman16: {
    fontSize: Fonts.sizes.regular,
    fontFamily: Fonts.roman,
  },
  extrabold10: {
    fontSize: Fonts.sizes.extraSmall,
    fontFamily: Fonts.extraBold,
  },
  extrabold12: {
    fontSize: Fonts.sizes.smaller,
    fontFamily: Fonts.extraBold,
  },
  extrabold14: {
    fontSize: Fonts.sizes.small,
    fontFamily: Fonts.extraBold,
  },
  extrabold16: {
    fontSize: Fonts.sizes.regular,
    fontFamily: Fonts.extraBold,
  },
  extrabold18: {
    fontSize: Fonts.sizes.medium,
    fontFamily: Fonts.extraBold,
  },
  extrabold22: {
    fontSize: Fonts.sizes.large,
    fontFamily: Fonts.extraBold,
  },
  extrabold42: {
    fontSize: Fonts.sizes.extraLarge,
    fontFamily: Fonts.extraBold,
  },
  bold10: {
    fontSize: Fonts.sizes.extraSmall,
    fontFamily: Fonts.bold,
  },
  bold12: {
    fontSize: Fonts.sizes.smaller,
    fontFamily: Fonts.bold,
  },
  bold14: {
    fontSize: Fonts.sizes.small,
    fontFamily: Fonts.bold,
  },
  bold16: {
    fontSize: Fonts.sizes.regular,
    fontFamily: Fonts.bold,
  },
  bold18: {
    fontSize: Fonts.sizes.medium,
    fontFamily: Fonts.bold,
  },
  bold22: {
    fontSize: Fonts.sizes.large,
    fontFamily: Fonts.bold,
  },
  bold42: {
    fontSize: Fonts.sizes.extraLarge,
    fontFamily: Fonts.bold,
  },
  semibold10: {
    fontSize: Fonts.sizes.extraSmall,
    fontFamily: Fonts.semibold,
  },
  semibold12: {
    fontSize: Fonts.sizes.smaller,
    fontFamily: Fonts.semibold,
  },
  semibold14: {
    fontSize: Fonts.sizes.small,
    fontFamily: Fonts.semibold,
  },
  semibold16: {
    fontSize: Fonts.sizes.regular,
    fontFamily: Fonts.semibold,
  },
  semibold18: {
    fontSize: Fonts.sizes.medium,
    fontFamily: Fonts.semibold,
  },
  semibold22: {
    fontSize: Fonts.sizes.large,
    fontFamily: Fonts.semibold,
  },
  semibold42: {
    fontSize: Fonts.sizes.extraLarge,
    fontFamily: Fonts.semibold,
  },
  light14: {
    fontSize: Fonts.sizes.small,
    fontFamily: Fonts.light,
  },
  italic14: {
    fontSize: Fonts.sizes.small,
    fontFamily: Fonts.italic,
  },
};
