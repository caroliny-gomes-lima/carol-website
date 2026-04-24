import { useFetch } from "./useFetch";
import { getCharactersList } from "services/character.services";

function useCharactersList() {
  const charactersListRequest = useFetch(getCharactersList);
  console.log("useCharactersList!!!!:", charactersListRequest);
  return {
    charactersList: charactersListRequest.data || [],
    loading: charactersListRequest.loading,
    error: charactersListRequest.error,
  };
}

export default useCharactersList;
