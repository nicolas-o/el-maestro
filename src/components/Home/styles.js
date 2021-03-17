import { makeStyles } from "@material-ui/core/styles";
import logo from "../../assets/logo.svg";

export default makeStyles((theme) => ({
  root: {
    [theme.breakpoints.down("sm")]: {
      display: "none!important",
    },
    width: "98vw",
    height: "100vh",
  },
  images: {
    marginTop: "-100px",
    minWidth: "100vw",
  },
  div: {
    height: "100vh",
  },
  sliderContainer: {
    position: "absolute",
    width: "100%",
    zIndex: "-1",
  },

  logoNavContainer: {
    height: "30vh",
  },
  logo: {
    cursor: "pointer",
    width: "25vw",
    height: "32vh",
    minWidth: (265 / 100) * 80,
    minHeight: (129 / 100) * 80,
    background: `url(${logo})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  },
  text: {
    alignSelf: "center",
    textAlign: "center",
  },
  arrowContainer: {
    height: "70vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  arrow: {
    cursor: "pointer",
    marginTop: "200px",
    fontSize: 100,
    color: "white",
  },
}));
