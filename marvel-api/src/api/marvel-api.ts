import api from "./axios.config";

// id, name, description e photo
export const getAllCharacters = async ({ offset = 1 }) => {
  const allCharactersList = await api.get(`/characters?offset=${offset - 1}`);

  return allCharactersList.data;
};

export const getCharactersInfo = async ({ idPersonagem }) => {
  const charactersInfo = await api.get(`/characters/${idPersonagem}`);

  return charactersInfo;
};
