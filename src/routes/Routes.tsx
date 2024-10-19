import React from "react";
import { Routes, Route } from "react-router-dom";
import Styles from "./styles/Styles";
import { Header, Footer, MenuNav } from "components";
import pagesConfig from "../config/pagesConfig";
import pages from "pages";
import { Grid } from "@mui/material";

interface UserInterfaceProps {
  AboutPage: () => JSX.Element;
}

interface PageConfig {
  navigationId: number,
  path: string,
  name: string,
  title: string,
}

function PageRoutes() {
  const [MenuHeight, setMenuHeight] = React.useState<number | null>(null);
  const [menu, setMenu] = React.useState<boolean>(false);

  /*useCallback para memorizar a função calculateMenuHeight
  evitando que a função seja recriada em cada renderização */
  const calculateMenuHeight = React.useCallback(() => {
    const headerMenu = document.getElementById("header-menu");
    if (headerMenu) {
      setMenuHeight(headerMenu.offsetHeight);
    }
  }, [])

  // Usando useEffect para atualizar a altura do menu após a renderização
  React.useEffect(() => {
    //Calculo altura inicial
    calculateMenuHeight();
    //event listener para window resize
    window.addEventListener("resize", calculateMenuHeight);
    //Limpa event listener quando component é desmontado
    return () => {
      window.removeEventListener("resize", calculateMenuHeight);
    };
  }, [calculateMenuHeight]); // Executa apenas uma vez, após a montagem do componente

  return (
    <Grid container direction="column">
      <MenuNav data={pagesConfig.pages} openMenu={setMenu} isOpen={menu} />
      <Header openMenu={() => setMenu(true)} />
      <Styles.PageContainer MenuHeight={MenuHeight}>
        <Styles.Stripes />
        <Styles.PageContent>
          <Routes>
            {pagesConfig.pages.map((page: PageConfig) => {
              const Component =
                pages[page.name as keyof UserInterfaceProps];
              return (
                <Route
                  key={page.navigationId}
                  path={page.path}
                  element={<Component />}
                />
              );
            })}
          </Routes>
        </Styles.PageContent>
        <Footer />
      </Styles.PageContainer>
    </Grid>
  );
}

export default PageRoutes;
