import { createStore } from "redux";
import rootReducer from "./reducer.js/member";

const store = createStore(rootReducer)

export default store