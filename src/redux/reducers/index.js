import { combineReducers } from "redux";
import starWarsReducer from "./starWarsReducer";

const rootReducer = combineReducers({
  star_wars: starWarsReducer,
});
export default rootReducer;
