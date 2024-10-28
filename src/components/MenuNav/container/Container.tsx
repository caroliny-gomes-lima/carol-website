import Styles from "../styles/Styles";
import { useNavigate } from "react-router-dom";
import { DefaultLogo } from "components";
import { Drawer } from "@mui/material";
import { Close, Copyright } from "@mui/icons-material";
import { Texts } from "config";

type MenuItem = {
  title: string;
  path: string;
};

type MenuProps = {
  data: MenuItem[];
  isOpen: boolean;
  openMenu: (props: any) => void;
};

function Container({ data, isOpen, openMenu }: MenuProps) {
  const texts = Texts["ptBr"].footer;
  const navigate = useNavigate();

  const NavPages = () => {
    return (
      <>
        <Styles.Content>
          {data.map((item, index) => {
            return (
              <Styles.NavPageContainer key={index}>
                <Styles.NavPageAnchor onClick={() => navigate(item.path)}>
                  {item.title}
                </Styles.NavPageAnchor>
              </Styles.NavPageContainer>
            );
          })}
        </Styles.Content>
      </>
    );
  };

  const DrawMenu = () => {
    return (
      <Styles.Container>
        <Styles.MenuHeader>
          <DefaultLogo BlackLogo />
          <Styles.CloseButtom size="small" onClick={() => openMenu(false)}>
            <Close />
          </Styles.CloseButtom>
        </Styles.MenuHeader>
        {NavPages()}
        <Styles.MenuFooter>
          <Copyright style={{ marginBottom: 5 }} />
          <Styles.SmallTextStyles>{texts.madeByText[0]}</Styles.SmallTextStyles>
          <Styles.SmallTextStyles>{texts.madeByText[1]}</Styles.SmallTextStyles>
        </Styles.MenuFooter>
      </Styles.Container>
    );
  };

  return (
    <Drawer
      variant="temporary"
      anchor="left"
      open={isOpen}
      onClose={() => openMenu(!isOpen)}
    >
      {DrawMenu()}
    </Drawer>
  );
}

export default Container;
