//Libary imports
import {useRef} from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import CloseIcon from '@mui/icons-material/Close';
import CheckIcon from '@mui/icons-material/Check';
//Local imports
import { ModalOptions } from "types";
import { RadioBtns } from ".";
import {useAppDispatch} from "redux/hooks";
import {setReceivedLink} from "redux/slices/modals"; 

export const AppModal = (props: ModalOptions) => {
 const inputRef = useRef<HTMLInputElement>(null);
 const dispatch = useAppDispatch(); 

  const textFieldContent = (
    <TextField
      autoFocus
      margin="dense"
      id="name"
      label={props.textFieldLabel}
      type={props.typeOfTextField.type}
      fullWidth
      placeholder={props.placeholder}
      inputRef={inputRef}
    />
  );
  
  const confirmAction = (action: string) =>{
    if(action === "Xác nhận"){
      props.onConfirm(); 
    }
    if(!inputRef.current){
      return; 
    }
    console.log(inputRef.current!.value)
    dispatch(setReceivedLink(inputRef.current!.value));     
  }
  
  return (
    <div className="appModal">
      <Dialog
        className="modal"
        fullWidth
        maxWidth="lg"
        open={props.open}
        onClose={props.onClose}
      >
        <DialogTitle>{props.title}</DialogTitle>
        <DialogContent>
          <DialogContentText>{props.contentText}</DialogContentText>
          {props.typeOfTextField.type === "checkbox" && <RadioBtns  />}
          {props.typeOfTextField.type === "text" && textFieldContent}
        </DialogContent>
        <DialogActions className="modal-btn__actions">
          {props.dialogActions.map((action) => (
            <Button key={action} onClick={() =>{confirmAction(action)}} variant="contained" startIcon={action==="Xác nhận" ? <CheckIcon/> : null}>{action}</Button>
          ))}
          <Button variant="contained" onClick={props.onClose} startIcon={<CloseIcon/>}>
            Thoát
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};
