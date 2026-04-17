import { useFetch } from "./useFetch";
import { getRaces, getClasses } from "services/character.services";

type Option = {
  label: string;
  value: string;
};

function useCharacterOptions() {
  const racesRequest = useFetch(getRaces);
  const classesRequest = useFetch(getClasses);

  const raceOptions = (data: any[]): Option[] =>
    data?.map((item) => ({
      label: item.race_name,
      value: String(item.race_id),
    })) || [];

  const classOptions = (data: any[]): Option[] =>
    data?.map((item) => ({
      label: item.class_name,
      value: String(item.class_id),
    })) || [];

  return {
    races: raceOptions(racesRequest.data || []),
    classes: classOptions(classesRequest.data || []),
    loading: racesRequest.loading || classesRequest.loading,
    error: racesRequest.error || classesRequest.error,
  };
}

export default useCharacterOptions;
