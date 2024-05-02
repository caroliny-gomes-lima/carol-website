import { ContentPasteSearch, Home, Today } from "@mui/icons-material";
import { paths } from "../navigations/navigation";

const pagesConfig = {
  pages: [
    {
      navigationId: 0,
      path: paths.home,
      name: "HomePage",
      title: "Home",
      icon: <Home />,
    },
      {
        navigationId: 1,
        path: paths.about,
        name: "AboutPage",
        title: "Sobre",
        icon: <Today/>
      },
    //   {
    //     navigationId: 2,
    //     path: paths.appointmentSearch,
    //     name: "AppointmentSearchPage",
    //     title: "CONSULTA DE AGENDAMENTOS",
    //     icon: <ContentPasteSearch />
    //   },
  ],
};
export default pagesConfig;
