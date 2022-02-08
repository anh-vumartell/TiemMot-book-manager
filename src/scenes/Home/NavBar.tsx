//Library imports
import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Avatar from "@mui/material/Avatar";
import { deepOrange } from "@mui/material/colors";

//Local imports
import "./styles.scss";
import { NavBarProps } from "types";
import { SideNav } from "scenes/Home";
import { useAppSelector } from "redux/hooks";
import userIcon from "../../assets/images/icons8-user-24.png";
import { CustomizeNoArgFunctionReturnVoidType } from "types"

export const NavBar: React.FC<NavBarProps> = (props) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const isAuthenticated = useAppSelector((state) => state.auth.isAuthenticated);

  const handleDrawerToggle: CustomizeNoArgFunctionReturnVoidType = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <Box>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            onClick={handleDrawerToggle}
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            TiemMot Book Manager
          </Typography>
          {isAuthenticated && (
            <Button color="inherit" onClick={props.onSignOut}>
              Sign out
            </Button>
          )}
          {!isAuthenticated && <Button color="inherit">Sign in</Button>}

          <Avatar
            alt="user"
            src={userIcon}
            sx={{ bgcolor: deepOrange, width: 22, height: 22 }}
          />
        </Toolbar>
      </AppBar>

      <Box>
        {isOpen === true && (
          <SideNav isOpen={isOpen} onCloseDrawer={handleDrawerToggle} />
        )}
      </Box>
    </Box>
  );
};
