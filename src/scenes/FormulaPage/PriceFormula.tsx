//Library imports
import {useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import EditIcon from '@mui/icons-material/Edit';

//Local imports
import "./styles.scss";
import { useAppDispatch, useAppSelector } from "redux/hooks";
import { RequireAuth } from "components";
import { logOut } from "redux/actions";
import { NavBar } from "scenes/Home";
import { AppModal } from "components/base-components";
import { selectModal, toggleFormulaModal } from "redux/slices/modals";

const PriceFormula = () => {
  const dispatch = useAppDispatch();
  const modalState = useAppSelector(selectModal); 
  const navigate = useNavigate();

  const handleSignOut = () => {
    console.log("signout called")
    dispatch(logOut());
    navigate("/sign/login", { replace: true });
  };

  const toggleFormulaModalHandler = () => {
   dispatch(toggleFormulaModal()); 
  };
  const confirmationHandler = useCallback(() =>{
    console.log("da xac nhan cong thuc")
  }, []);

  return (
    <RequireAuth>
      <>
        <NavBar onSignOut={handleSignOut} />
        <Box className="price-formula-box" m={3}>
          <Typography variant="h4">Công thức tính giá hiện tại</Typography>
          <div className="price-formula-text">
            <p>O day la cong thuc tinh gia</p>
          </div>
          <Button variant="contained" onClick={toggleFormulaModalHandler} startIcon={<EditIcon/>}>
            Chỉnh sửa
          </Button>
        </Box>
        {modalState.isFormulaModalToggled && (
          <AppModal
            onConfirm={confirmationHandler}
            onClose={toggleFormulaModalHandler}
            open={modalState.isFormulaModalToggled}
            title="Chỉnh sửa công thức tính giá"
            contentText="Hãy điền vào ô dưới đây công thức tính giá mới"
            textFieldLabel="Price Formula"
            typeOfTextField={{ type: "text" }}
            placeholder="gia bia * discount% = ..."
            variant="outlined"
            dialogActions={["Kiểm tra công thức", "Lưu công thức","Xác nhận"]}
            helperText=""
            error={modalState.hasError}
          />
        )}
      </>
    </RequireAuth>
  );
};

export default PriceFormula;
