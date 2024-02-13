// store.js
import { legacy_createStore as createStore } from "redux";
import rootReducer from "../rootes/rootReducer";

const store = createStore(rootReducer);

export default store;
