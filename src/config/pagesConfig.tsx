//import { Home, Today } from "@mui/icons-material";
import { paths } from "../routes/navigation";

const pagesConfig = {
  pages: [
    {
      navigationId: 0,
      path: paths.about,
      name: "AboutPage",
      title: "SOBRE",
    },
    {
      navigationId: 1,
      path: paths.career,
      name: "CareerPage",
      title: "CARREIRA",
    },
    {
      navigationId: 2,
      path: paths.Experiences,
      name: "ExperiencesPage",
      title: "EXPERIÊNCIAS",
    },
    {
      navigationId: 3,
      path: paths.Skills,
      name: "SkillsPage",
      title: "HABILIDADES",
    },
    {
      navigationId: 4,
      path: paths.works,
      name: "WorksPage",
      title: "TRABALHOS",
    },
  ],
};
export default pagesConfig;
