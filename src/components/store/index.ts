import { combineReducers, configureStore } from "@reduxjs/toolkit";
import ingredientsReducer from "./ingredientsSlice";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

const rootReducer = combineReducers({
  ingredients: ingredientsReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export const useAppDispatch: () => typeof store.dispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<
  ReturnType<typeof store.getState>
> = useSelector;
