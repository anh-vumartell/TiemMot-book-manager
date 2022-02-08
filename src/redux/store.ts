import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";

import counterReducer from "../features/counter/counterSlice";
import authReducer from "redux/slices/auth";
import bookReducer from "redux/slices/books";
import modalReducer from "redux/slices/modals"; 

export const store = configureStore({
  reducer: {
    auth: authReducer,
    book: bookReducer,
    counter: counterReducer,
    modal: modalReducer, 
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
