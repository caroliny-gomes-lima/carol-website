import { Theme } from "config";
import styled from "styled-components";

const Container = styled.div(()=> {
  return {
    width: "100%",
    display: "flex",
    position: "relative",
    backgroundColor: Theme.Dark.palette.primary.main,
    padding: Theme.Dark.spacing(0, 2, 0, 2),
    margin: Theme.Dark.spacing(2),
    border: "solid 1px red",
  }
})

const Styles = {
  Container
}

export default Styles;