import { Grid, Button } from "@material-ui/core";
import useStyles from "./styles";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { sandwiches } from "../Menu/Sandwiches/menuSandwiches";
import { useSpring, a } from "react-spring";
import { Link } from "react-router-dom";
import useWindowSize from "../../utils/useWindowSize";

const Sandwiches = () => {
  const classes = useStyles();
  const arrowSpring = useSpring({
    from: { marginTop: -70 },
    to: { marginTop: 0 },
    config: { mass: 20, tension: 500, friction: 1 },
  });
  const menuLogoContactSpring = useSpring({
    from: { opacity: 0, marginLeft: -600 },
    to: { opacity: 1, marginLeft: 0 },
    config: { mass: 1, tension: 80, friction: 26 },
  });
  let settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 4000,
    cssEase: "linear",
    arrows: false,
  };
  const Scroll = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };
  const windowHeight = useWindowSize()[1];
  return (
    <div className={classes.root}>
      <div className={classes.sliderContainer}>
        <Slider {...settings}>
          {sandwiches.map((item) => (
            <div className={classes.div} key={item.image}>
              <img
                src={item.image}
                alt="Fotos de Sandwiches"
                className={classes.images}
              />
            </div>
          ))}
        </Slider>
      </div>
      <a.div style={menuLogoContactSpring}>
        <Grid container justify="center" className={classes.logoNavContainer}>
          <Grid item xs={3} md={2} className={classes.text}>
            <Button
              size="large"
              color="primary"
              style={{ fontWeight: "600" }}
              onClick={Scroll}
            >
              Menu
            </Button>
          </Grid>
          <div className={classes.logo} onClick={Scroll} />
          <Grid item xs={3} md={2} className={classes.text}>
            <Link to="Nosotros" style={{ textDecoration: "none" }}>
              <Button
                size="large"
                color="primary"
                style={{ fontWeight: "600" }}
                onClick={Scroll}
              >
                Nosotros
              </Button>
            </Link>
          </Grid>
        </Grid>
      </a.div>
      <a.div style={arrowSpring} className={classes.arrowContainer}>
        <ExpandMoreIcon className={classes.arrow} onClick={Scroll} />
      </a.div>
    </div>
  );
};

export default Sandwiches;
