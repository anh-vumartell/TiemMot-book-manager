//Library imports
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";

//Local imports
import ToolBox from "./ToolBox";
import DataTable from "./DataTable";
import { NavBar } from "scenes/Home";
import { AppModal, FormModal } from "components/base-components";
import { useAppDispatch, useAppSelector } from "redux/hooks";
import { logOut } from "redux/actions";
import { RequireAuth } from "components";
import { STORE_NAME } from "appConstants";
import { toggleRadioModal, toggleAddLinkModal, selectModal, toggleFormModal, setHasError} from "redux/slices/modals";
import { CustomizeNoArgFunctionReturnVoidType } from 'types'
import {isValidUrl} from "helpers"

const Home = () => {
  //use hooks
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const modalState = useAppSelector(selectModal); 

  const handleSignOut: CustomizeNoArgFunctionReturnVoidType = () => {
    dispatch(logOut());
    navigate("/sign/login", { replace: true });
  };
  //function to open/close modal answer question "San pham co san link Tiki khong?"
  const toggleRadioModalHandler = () => {
    dispatch(toggleRadioModal())
  };
  //function to "Xac nhan" one of the two options
  const confirmHasLink = () =>{
    console.log(modalState.linkOption); 
    if(modalState.linkOption === "Có sẵn link Tiki"){
      dispatch(toggleRadioModal());
      dispatch(toggleAddLinkModal()); 
    }
    if(modalState.linkOption === "Chưa có sẵn link Tiki"){
      dispatch(toggleFormModal()); 
      dispatch(toggleRadioModal());
    }
  }
  //function to open/close modal to ask for a link
  const toggleLinkModalHandler = () =>{
    dispatch(toggleAddLinkModal()) 
  }
  //function to confirm link has been given
  const confirmLink = () =>{
    console.log(isValidUrl(modalState.receivedLink));
    if(isValidUrl(modalState.receivedLink)=== false){
      dispatch(setHasError()); 
      return;
    }
    console.log(modalState.hasError);
   
    dispatch(toggleAddLinkModal()); 
    dispatch(toggleFormModal()); 
  }
  
  return (
    <RequireAuth>
      <>
        <NavBar onSignOut={handleSignOut} />
        <Box m={3}>
          <h1>Chào mừng đến {STORE_NAME} Book Manager!</h1>
          <ToolBox isOpen={modalState.isRadioModalToggled} onToggleAddBook={toggleRadioModalHandler} />
          <DataTable />
        </Box>

        {modalState.isRadioModalToggled && (
          <AppModal
            onConfirm = {confirmHasLink}
            onClose={toggleRadioModalHandler}
            open={modalState.isRadioModalToggled}
            title="Sản phẩm có sẵn link Tiki không?"
            contentText="Hãy chọn một trong hai lựa chọn dưới đây"
            textFieldLabel=""
            typeOfTextField={{ type: "checkbox" }}
            placeholder=""
            variant="outlined"
            dialogActions={["Xác nhận"]}   
            error={modalState.hasError}       
            helperText = ""  
          />
        )}  
              
        {modalState.isAddLinkModalToggled &&  modalState.linkOption === "Có sẵn link Tiki" && 
        <AppModal
            onConfirm = {confirmLink}
            onClose={toggleLinkModalHandler}
            open={modalState.isAddLinkModalToggled}
            title="Sản phẩm có sẵn link Tiki"
            contentText="Nhập link dẫn để thêm sản phẩm mới"
            textFieldLabel="Link"
            typeOfTextField={{ type: "text" }}
            placeholder="https://example-link.com"
            variant="outlined"
            dialogActions={["Xác nhận"]}
            error={modalState.hasError}
            helperText = "Invalid link"           
        />}
        {modalState.isFormModalToggled && !modalState.isRadioModalToggled && modalState.linkOption  === "Chưa có sẵn link Tiki" && <FormModal/>}
        {modalState.isFormModalToggled && !modalState.isAddLinkModalToggled && modalState.receivedLink !== "" && <FormModal/> }
      </>
    </RequireAuth>
  );
};
export default Home;
