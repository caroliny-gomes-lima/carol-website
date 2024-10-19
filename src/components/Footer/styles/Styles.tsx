import styled from "styled-components";

const Container = styled.div(({ theme }) => {
  const { palette: colors, spacing } = theme;
  return {
    width: "100%",
    height: "fit-content",
    backgroundColor: colors.secondary.contrastText,
    zIndex: 3,
    padding: spacing(1),
    marginBottom: spacing(8)
  }
})

const Content = styled.div(() => {
  return {
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    height: "fit-content",
  };
});

const CopyrightGrup = styled.div(() => {
  return {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 5,
    alignItems: "center",
  };
});

const Styles = {
  Container,
  Content,
  CopyrightGrup,
}

export default Styles;