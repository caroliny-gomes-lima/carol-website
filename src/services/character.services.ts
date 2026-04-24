import { api } from "./api";

export const getRaces = async () => {
  const response = await api.get("/races");
  return response.data;
};

export const getClasses = async () => {
  const response = await api.get("/classes");
  return response.data;
};

export const getCharactersList = async () => {
  const response = await api.get("/characters");
  console.log("Resposta da API /characters:", response.data);
  return response.data;
};
