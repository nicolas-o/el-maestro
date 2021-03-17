import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  root: {
    height: "100%",
    background: "black",
  },
  title: {
    textAlign: "center",
    [theme.breakpoints.up("sm")]: {
      marginTop: "10px",
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
  proteinas: {
    marginBottom: "30px",
  },
  menu: {
    padding: "20px",
    color: "white",
    background: "black",
    height: "100vh",
    [theme.breakpoints.up("lg")]: {
      padding: "0 100px",
    },
  },
  items: {
    margin: "20px 10px 80px 10px",
    width: "95%!important",
    marginBottom: "10px",
    borderBottom: "#d3873f solid",
    "&:focus": {
      outline: "none",
    },
  },
  ingredientsPrice: {
    display: "flex",
    justifyContent: "space-between",
  },
  slider: {
    [theme.breakpoints.up("md")]: {
      paddingLeft: "20px",
    },
  },
}));
