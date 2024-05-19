import { Home, Today } from "@mui/icons-material";
import { paths } from "../navigations/navigation";

const pagesConfig = {
  pages: [
    {
      navigationId: 0,
      path: paths.about,
      name: "AboutPage",
      title: "SOBRE",
      //icon: <Home />,
    },
      {
        navigationId: 1,
        path: paths.career,
        name: "CareerPage",
        title: "CARREIRA",
        //icon: <Today/>
      },
      {
        navigationId: 2,
        path: paths.career,
        name: "CareerPage",
        title: "EXPERIÊNCIAS",
        //icon: <ContentPasteSearch />
      },
      {
        navigationId: 3,
        path: paths.career,
        name: "CareerPage",
        title: "TRABALHOS",
        //icon: <ContentPasteSearch />
      },
  ],
};
export default pagesConfig;
