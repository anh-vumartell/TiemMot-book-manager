//Library imports
import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate, useLocation } from "react-router-dom";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

//Local imports
import "./styles.scss";
import { useAppDispatch } from "redux/hooks";
import { logIn } from "redux/actions";
import logo from "../../assets/images/logo.png";
import { AppCheckBox } from "components/base-components/ToolBox/AppCheckBox";
import { MUItheme } from "services/MUI";
import { LocationStateType, InputStateType } from 'types/Sign'
import { CustomizeNoArgFunctionReturnVoidType } from 'types'

const Login = () => {
  // const isAuthenticated = useAppSelector((state) => state.auth.isAuthenticated);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const location = useLocation();
  const from = (location.state as LocationStateType)?.from?.pathname || "/";

  const [values, setValues] = useState<InputStateType>({
    accountName: "",
    password: "",
    showPassword: false,
  });

  const handleInputChange =
    (prop: keyof InputStateType) => (e: React.ChangeEvent<HTMLInputElement>) => {
      setValues({ ...values, [prop]: e.target.value });
    };

  const handleShowPassword: CustomizeNoArgFunctionReturnVoidType = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };
  const handleSignIn : CustomizeNoArgFunctionReturnVoidType = () => {
    dispatch(logIn());
    navigate(from, { replace: true });
  };

  return (
    <Box
      // sx={{
      //   backgroundColor: MUItheme.palette.primary.main,
      //   color: MUItheme.palette.primary.contrastText,
      // }}
      className="box__login"
    >
      <div className="box__login-title">
        <Typography variant="h6">Thư viện </Typography>
        <Typography variant="h6">TIỆM MỌT </Typography>
      </div>
      <div className="box__login-logo">
        <img src={logo} alt="logo" />
      </div>
      <FormControl variant="outlined">
        <InputLabel htmlFor="outlined-adornment-accountName">
          Tài khoản
        </InputLabel>
        <OutlinedInput
          id="outlined-adornment-accountName"
          type="text"
          value={values.accountName}
          onChange={handleInputChange("accountName")}
          endAdornment={
            <InputAdornment position="end">
              <IconButton>
                <AccountCircleIcon />
              </IconButton>
            </InputAdornment>
          }
          label="acountName"
          placeholder="e.g: test@mail.com"
        />
      </FormControl>

      <FormControl variant="outlined">
        <InputLabel htmlFor="outlined-adornment-password">Mật khẩu</InputLabel>
        <OutlinedInput
          id="outlined-adornment-password"
          type={values.showPassword ? "text" : "password"}
          value={values.password}
          onChange={handleInputChange("password")}
          endAdornment={
            <InputAdornment position="end">
              <IconButton onClick={handleShowPassword}>
                {values.showPassword ? <Visibility /> : <VisibilityOff />}
              </IconButton>
            </InputAdornment>
          }
          label="password"
        />
      </FormControl>

      <div className="box__login-cta">
        <Link to="/sign/forgot-password">Quên mật khẩu</Link>

        <InputLabel
          style={{ fontSize: MUItheme.typography.body2.fontSize }}
          htmlFor="save-my-accountName"
        >
          <AppCheckBox />
          Lưu tài khoản của tôi
        </InputLabel>
      </div>

      <Button variant="contained" onClick={handleSignIn}>
        Đăng nhập
      </Button>
    </Box>
  );
};

export default Login;
