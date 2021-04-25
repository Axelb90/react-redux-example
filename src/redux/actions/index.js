import axios from "axios";
import { FETCH_CHARACTERS } from "./types";

export const fetchCharacters = () => {
  return (dispatch) => {
    return axios.get("https://swapi.dev/api/people").then((response) => {
      console.log(response);
      return dispatch({
        type: FETCH_CHARACTERS,
        payload: response.data.results,
      });
    });
  };
};
