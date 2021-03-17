import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  root: {
    height: "100%",
    background: "black",
  },
  title: {
    textAlign: "center",
    [theme.breakpoints.up("sm")]: {
      marginTop: "40px",
    },
    [theme.breakpoints.up("lg")]: {
      marginTop: "90px",
    },
  },
  titleDivider: {
    background: "#d3873f",
    height: "3px",
    borderRadius: "0px 0px 5px 5px",
    marginBottom: "30px",
    width: "300px",
    margin: "0 auto",
  },
  menu: {
    padding: "20px",
    color: "white",
    background: "black",
    height: "100vh",
    [theme.breakpoints.up("lg")]: {
      padding: "20px 100px",
    },
  },
  container: {
    display: "flex!important",
    margin: "50px 0",
    "&:focus": {
      outline: "none",
    },
  },
  items: {
    margin: "0 10px",
    display: "flex",
    justifyContent: "space-between",
    width: "95%!important",
    marginBottom: "10px",
    borderBottom: "#d3873f solid",
  },
  categories: {
    marginRight: "20px",
  },
  types: {
    width: "120px",
  },
  slider: {
    [theme.breakpoints.up("md")]: {
      paddingLeft: "20px",
    },
  },
}));
