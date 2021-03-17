import { Grid, Typography, Divider } from "@material-ui/core";
import { sandwiches } from "./menuSandwiches";
import formatThousandSeparator from "../../../utils/formatThousandSeparator";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import useStyles from "./styles";
import ChangeSliderRowsOnScreenSize from "../../../utils/ChangeSliderRowsOnScreenSize";
import { useSpring, animated } from "react-spring";

const Sandwiches = () => {
  const classes = useStyles();
  const titleSpring = useSpring({
    from: { opacity: 0, marginRight: -1000 },
    to: { opacity: 1, marginRight: 0 },
    config: { mass: 1, tension: 500, friction: 100 },
  });
  const menuSpring = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { mass: 30, tension: 500, friction: 100 },
  });

  return (
    <Grid container spacing={0} className={classes.root}>
      <Grid item sm={1} md={3} lg={2} />
      <Grid item xs={12} sm={10} md={8} lg={10} className={classes.menu}>
        <div data-aos="fade-left">
          <animated.div style={titleSpring}>
            <div style={{ overflow: "hidden" }}>
              <Typography variant="h3" className={classes.title}>
                <strong>Sandwiches</strong>
              </Typography>
              <Divider className={classes.titleDivider} />
            </div>
          </animated.div>
          <animated.div style={menuSpring}>
            <div style={{ overflow: "hidden" }}>
              <div className={classes.proteinas}>
                <Typography variant="subtitle2">Escoge la Proteína:</Typography>
                <Typography variant="body1">
                  Carne | Vianesa | Hamburguesa.
                </Typography>
              </div>
              <Slider
                {...ChangeSliderRowsOnScreenSize("sandwiches")}
                className={classes.slider}
              >
                {sandwiches.map((item) => (
                  <div key={item.type} className={classes.items}>
                    <Typography variant="h6">{item.name}</Typography>
                    <div className={classes.ingredientsPrice}>
                      <Typography variant="subtitle2">
                        {item.ingredients}
                      </Typography>
                      <Typography variant="body1">
                        ${formatThousandSeparator(item.cost)}
                      </Typography>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </animated.div>
        </div>
      </Grid>
    </Grid>
  );
};

export default Sandwiches;
