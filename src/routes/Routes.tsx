import React from "react";
import { Routes, Route } from "react-router-dom";
import Styles from "./styles/Styles";
import { Header, Footer, MenuNav } from "components";
import pagesConfig from "../config/pagesConfig";
import pages from "pages";

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
  //const [menuHeight, setHeight] = React.useState<any>(null);
  const [menu, setMenu] = React.useState<boolean>(false);

  // React.useLayoutEffect(() => {
  //     if (isLogged && (menuHeight === null || menuHeight === undefined)) {
  //       const headerMenu = document.getElementById("header-menu");
  //       setHeight(headerMenu?.offsetHeight);
  //     }
  //   }, [menuHeight, isLogged]);

  return (
    <>
      <Styles.Stripes />
      <MenuNav data={pagesConfig.pages} openMenu={setMenu} isOpen={menu} />
      <Header openMenu={() => setMenu(true)} />
      <Styles.PageContainer
      // style={{
      //   height: menuHeight
      //     ? `calc(90vh - ${menuHeight}px)`
      //     : `calc(90vh - ${Spacing(9.5)}px)`,
      //   overflowY: "auto",
      //   justifyContent: "space-between",
      // }}
      >
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
    </>
  );
}

export default PageRoutes;
