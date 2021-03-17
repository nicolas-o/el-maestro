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
    [theme.breakpoints.up("md")]: {
      marginTop: "80px",
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
    marginBottom: "20px",
  },
  content: {
    padding: "20px",
    color: "white",
    background: "black",
    height: "100vh",
    [theme.breakpoints.up("lg")]: {
      padding: "80px 100px",
    },
  },
}));
