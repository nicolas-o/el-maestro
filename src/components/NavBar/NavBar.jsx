import useStyles from "./styles";
import { Drawer, Hidden, Toolbar, IconButton } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { useTheme } from "@material-ui/core/styles";
import { useState } from "react";
import DrawerList from "./DrawerList";
import LargeNav from "./LargeNav";

const NavBar = () => {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = useState(false);

  const handleDrawerToggle = () => {
    setOpen(!open);
  };
  return (
    <div data-aos="fade-right">
      <div className={classes.root}>
        <Toolbar className={classes.bar}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
        <nav className={classes.drawer} aria-label="mailbox folders">
          <Hidden smUp implementation="css">
            <Drawer
              classes={{
                paper: classes.drawerPaper,
              }}
              anchor={theme.direction === "rtl" ? "down" : "top"}
              variant="temporary"
              open={open}
              onClose={handleDrawerToggle}
              onClick={handleDrawerToggle}
            >
              <DrawerList />
            </Drawer>
          </Hidden>
          <Hidden smDown implementation="css">
            <Drawer
              classes={{
                paper: classes.drawerPaperLg,
              }}
              variant="permanent"
              open
            >
              <LargeNav />
            </Drawer>
          </Hidden>
        </nav>
      </div>
    </div>
  );
};

export default NavBar;
