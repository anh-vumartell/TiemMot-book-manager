import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "redux/store";

const initialState = {
  isRadioModalToggled: false,
  isAddLinkModalToggled: false,
  isFormModalToggled: false,
  isFormulaModalToggled: false,
  linkOption: "",
  receivedLink: "", 
  receivedFormula: "", 
  hasError: false
};

export const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    toggleRadioModal: (state) => {
      state.isRadioModalToggled = !state.isRadioModalToggled;
    },
    toggleAddLinkModal: (state) => {
      state.isAddLinkModalToggled = !state.isAddLinkModalToggled;
    },
    toggleFormModal: (state) =>{
        state.isFormModalToggled = !state.isFormModalToggled;
    },
    toggleFormulaModal: (state) =>{
      state.isFormulaModalToggled = !state.isFormulaModalToggled;
    },
    setLinkOption: (state, action: PayloadAction<string>) =>{
      state.linkOption = action.payload; 
    },
    setReceivedLink : (state, action: PayloadAction<string>) =>{
      state.receivedLink = action.payload; 
    },
    setHasError: (state) =>{
      state.hasError = !state.hasError; 
    }
  },
});

export const { toggleRadioModal, toggleAddLinkModal, toggleFormModal, toggleFormulaModal, setLinkOption, setReceivedLink, setHasError } = modalSlice.actions;
export const selectModal = (state: RootState) => state.modal; 
export default modalSlice.reducer;
