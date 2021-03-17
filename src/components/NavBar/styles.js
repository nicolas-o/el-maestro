import { makeStyles } from "@material-ui/core/styles";
import logo2 from "../../assets/logo2.svg";

export default makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: 240,
      flexShrink: 0,
    },
  },
  bar: {
    [theme.breakpoints.up("md")]: {
      display: "none!important",
    },
  },
  toolbar: theme.mixins.toolbar,
  drawerPaperLg: {
    width: "16.6vw!important",
    minWidth: "160px!important",
    backgroundColor: "#1e0a0d!important",
    borderRight: "white solid!important",
    position: "absolute!important",
    height: "100vh!important",
  },
  drawerPaper: {
    width: "100vw",
    height: "210px",
    backgroundColor: "#1e0a0d!important",
  },
  container: {
    width: "16.6vw!important",
    minWidth: "160px!important",
    height: "250px!important",
    color: "white!important",
    margin: "10px 0!important",
    display: "flex!important",
    justifyContent: "center!important",
  },
  logo: {
    margin: "auto 20px",
    width: (265 / 100) * 80,
    height: (129 / 100) * 80,
    background: `url(${logo2})`,
    backgroundRepeat: "no-repeat",
  },
  lgrNavContainer: {
    position: "relative",
    width: "100%",
    height: "100%",
    overflow: "hidden",
    overflowY: "scroll",
    textAlign: "justify",
    color: "white",
    fontSize: "20em",
    lineHeight: "0.9em",
    fontWeight: "800",
    background: "black",
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("md")]: {
      display: "none!important",
    },
    background: "white",
  },
  item: {
    color: "#ffffff",
    textAlign: "Center!important",
    "&:hover": {
      background: "rgba(0,0,0,0.8)",
    },
  },
  socialMediaContainer: {
    flexDirection: "column",
    justifyContent: "start",
  },
  socialMedia: {
    display: "flex",
    justifyContent: "center",
  },
  info: {
    margin: "80px 10px 10px 10px",
    display: "flex",
    flexDirection: "column",
    textAlign: "center",
  },
  font: {
    fontSize: "18px",
  },
  list: {
    margin: "auto 0",
  },
  link: {
    textDecoration: "none",
    color: theme.palette.text.primary,
  },
  divider: {
    background: "rgba(255,255,255, 0.4)",
    height: "0.1px",
    width: "70%",
    margin: "0 auto",
  },
  icons: {
    margin: "0 3px!important",
  },
  address: {
    margin: "10px 0!important",
  },
}));
