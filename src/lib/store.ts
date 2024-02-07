import { configureStore, combineReducers } from "@reduxjs/toolkit";
import blogsSlice from "./features/blogsSlice";

const rootReducer = combineReducers({
  blogs: blogsSlice,
});

export const makeStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
