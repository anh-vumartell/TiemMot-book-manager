export interface ModalOptions {
  open: boolean;
  title: string;
  contentText: string;
  textFieldLabel: string;
  variant: string;
  dialogActions: string[];
  typeOfTextField: { type: string };
  placeholder: string; 
  error: boolean;
  helperText: string; 
  onClose: () => void;
  onConfirm: () => void; 
}
