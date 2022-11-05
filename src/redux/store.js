import { configureStore } from "@reduxjs/toolkit";
import getData from "./data";

const store = configureStore({ reducer: { getData } });

export default store;
