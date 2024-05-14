import Styles from "../styles/Styles";
import { colors } from "config";
import { Terminal } from "@mui/icons-material";

interface props {
  textsData: string[];
}

function BoxActivities({ textsData }: props) {
  return (
    <Styles.BoxActivities defaultColor={colors.yellow}>
      <Styles.BoxActivitiesHeader defaultColor={colors.yellow}>
        <Terminal />
      </Styles.BoxActivitiesHeader>
      <Styles.BoxActivitiesContent>
        {textsData.map((item) => {
          return (
            <Styles.BoxActivitiesList>
              <Styles.BoxActivitiesListDot>
                <svg width={5} height={5} viewBox="0 0 10 10">
                  <circle cx="5" cy="5" r="5" fill={colors.yellow} />
                </svg>
              </Styles.BoxActivitiesListDot>
              <Styles.TextStyles defaultColor={colors.yellow}>
                {item}
              </Styles.TextStyles>
            </Styles.BoxActivitiesList>
          );
        })}
      </Styles.BoxActivitiesContent>
    </Styles.BoxActivities>
  );
}

export default BoxActivities;
