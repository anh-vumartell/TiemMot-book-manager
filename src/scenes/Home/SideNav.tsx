//Library imports
import { NavLink } from "react-router-dom";
import Toolbar from "@mui/material/Toolbar";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import ListItemIcon from "@mui/material/ListItemIcon";
import HomeIcon from "@mui/icons-material/HomeOutlined";
import CategoryIcon from "@mui/icons-material/Category";
import CalculateOutlinedIcon from "@mui/icons-material/CalculateOutlined";
import PublishOutlinedIcon from "@mui/icons-material/PublishOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";

//Local imports
import "./styles.scss";
import { SideNavProps } from "types";

const drawerWidth = 400;

export const SideNav: React.FC<SideNavProps> = (props) => {
  const sideNavContent = (
    <Box
      className="box__sideNav"
      component="div"
      sx={{
        height: "100vh",
        // backgroundColor: MUItheme.palette.primary.main,
        // color: MUItheme.palette.primary.contrastText,
      }}
    >
      <Toolbar />
      <Box component="div" m={1}>
        <Button variant="contained" onClick={props.onCloseDrawer} size="small">
          X
        </Button>
      </Box>
      <Divider />
      <Box component="div">
        <List>
          {/* {pages.map((page, index) => (
          <ListItem button>
            <NavLink to={`/${pages[index]}`}>{page}</NavLink>
          </ListItem>
        ))} */}
          <ListItem button>
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <NavLink to="/">Trang chủ</NavLink>
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <CategoryIcon />
            </ListItemIcon>
            <NavLink to="/">Category-Subcategory</NavLink>
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <CalculateOutlinedIcon />
            </ListItemIcon>
            <NavLink to="/formula">Thiết lập công thức giá bán</NavLink>
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <PublishOutlinedIcon />
            </ListItemIcon>
            <NavLink to="/">Nhà xuất bản - Nhà phát hành</NavLink>
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <PersonOutlineOutlinedIcon />
            </ListItemIcon>
            <NavLink to="/">Tác giả</NavLink>
          </ListItem>
        </List>
      </Box>
    </Box>
  );

  return (
    <Drawer
      variant="temporary"
      sx={{
        display: { xs: "none", sm: "block" },
        "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth },
      }}
      open={props.isOpen}
      onClose={props.onCloseDrawer}
      transitionDuration={{ enter: 500, exit: 500 }}
    >
      {sideNavContent}
    </Drawer>
  );
};
