import { configureStore } from "@reduxjs/toolkit";
import rootReducers from "./reducers/index";

const store = configureStore(rootReducers);

export default store;
