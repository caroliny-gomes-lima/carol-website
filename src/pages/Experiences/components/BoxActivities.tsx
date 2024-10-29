import Styles from "../styles/Styles";
import { colors, Fonts } from "config";
import { Terminal } from "@mui/icons-material";
import { TextComponent } from "components";
import { Grid } from "@mui/material";

interface props {
  textsData: string[];
}

function BoxActivities({ textsData }: props) {
  return (
    <>
      <Grid item xs={12} sm={11} md={6} lg={5}>
        <Styles.BoxActivities >
          <Styles.BoxActivitiesHeader >
            <Terminal fontSize="large" />
          </Styles.BoxActivitiesHeader>
          <Styles.BoxActivitiesContent>
            {textsData.map((item, index) => (
              <Styles.BoxActivitiesList key={index}>
                <Styles.BoxActivitiesListDot>
                  <svg width={5} height={5} viewBox="0 0 10 10">
                    <circle cx="5" cy="5" r="5" fill={colors.yellow} />
                  </svg>
                </Styles.BoxActivitiesListDot>
                <TextComponent fontSize="0.8rem"
                  customTypeFont={Fonts.medium}
                  textColor={colors.yellow}>
                  {item}
                </TextComponent>
              </Styles.BoxActivitiesList>
            ))}
          </Styles.BoxActivitiesContent>
        </Styles.BoxActivities>
      </Grid>
    </>
  );
}

export default BoxActivities;
