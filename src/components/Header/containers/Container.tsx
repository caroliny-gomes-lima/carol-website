import React from "react";
import Styles from "../styles/Styles";
import { useNavigate } from "react-router-dom";
import { paths } from "navigations/navigation";
import { ButtonContained, DefaultLogo } from "components";
import { Theme } from "config";

type HeaderProps = {
  //openMenu: () => void;
  data: string;
};

function Header() {
  const navigate = useNavigate();
  const [clicked, setClicked] = React.useState<boolean>(false);

  const handleClick = (e: any) => {
    if (e.target.name === "sobre" && e.target.name !== "trabalho") {
      setClicked(true);
      console.log(e.target.name)
    } else if(e.target.name !== "sobre") {
      setClicked(false);
    }

    if (e.target.name === "trabalho" && e.target.name !== "sobre") {
      console.log(e.target.name)
      setClicked(true);
    } else if(e.target.name !== "trabalho"){
      setClicked(false);
    }
  };

  return (
    <Styles.Container>
      <Styles.Content>
        <Styles.LogoGroup>
          <DefaultLogo />
          <Styles.TextName>Caroliny Gomes</Styles.TextName>
        </Styles.LogoGroup>
        <ButtonContained
          name="sobre"
          label="sobre"
          type="button"
          onClick={(e) => handleClick(e)}
          fullWidth={false}
          loading={false}
          style={{
            backgroundColor: clicked ? Theme.Dark.palette.action.hover : "",
            color: clicked ? Theme.Dark.palette.secondary.contrastText : "",
          }}
        />

        <ButtonContained
          name="trabalho"
          label="Trabalho"
          type="button"
          onClick={handleClick}
          fullWidth={false}
          loading={false}
          style={{
            backgroundColor: clicked ? Theme.Dark.palette.action.hover : "",
            color: clicked ? Theme.Dark.palette.secondary.contrastText : "",
          }}
        />
      </Styles.Content>
    </Styles.Container>
  );
}

export default Header;
