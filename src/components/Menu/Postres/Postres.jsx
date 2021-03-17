import { Grid, Typography, Divider } from "@material-ui/core";
import formatThousandSeparator from "../../../utils/formatThousandSeparator";
import { bebestibles } from "./menuPostres";
import useStyles from "./styles";
import ChangeSliderRowsOnScreenSize from "../../../utils/ChangeSliderRowsOnScreenSize";
import Slider from "react-slick";
import { useSpring, animated } from "react-spring";

const Postres = () => {
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
                <strong>Postres</strong>
              </Typography>
              <Divider className={classes.titleDivider} />
            </div>
          </animated.div>
          <animated.div style={menuSpring}>
            <div style={{ overflow: "hidden" }}>
              <Slider
                {...ChangeSliderRowsOnScreenSize()}
                className={classes.slider}
              >
                {bebestibles.map((item) => (
                  <div key={item.type} className={classes.container}>
                    <Typography variant="h5" className={classes.types}>
                      {item.type}
                    </Typography>
                    <div className={classes.items}>
                      <Typography variant="h6" className={classes.categories}>
                        {item.categories}
                      </Typography>
                      <Typography variant="h6">
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
      <Grid item lg={2} className={classes.pictures} />
    </Grid>
  );
};

export default Postres;
