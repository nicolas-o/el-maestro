import { Grid, Typography, Divider } from "@material-ui/core";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import useStyles from "./styles";
import { useSpring, animated } from "react-spring";

const Sandwiches = () => {
  const classes = useStyles();
  const titleSpring = useSpring({
    from: { opacity: 0, marginRight: -1000 },
    to: { opacity: 1, marginRight: 0 },
    config: { mass: 1, tension: 500, friction: 100 },
  });
  const contentSpring = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { mass: 30, tension: 500, friction: 100 },
  });

  return (
    <Grid container spacing={0} className={classes.root}>
      <Grid item sm={1} md={3} lg={2} />
      <Grid item xs={12} sm={10} md={8} lg={10} className={classes.content}>
        <div data-aos="fade-left">
          <animated.div style={titleSpring}>
            <div style={{ overflow: "hidden" }}>
              <Typography variant="h3" className={classes.title}>
                <strong>Nosotros</strong>
              </Typography>
              <Divider className={classes.titleDivider} />
            </div>
          </animated.div>
          <animated.div style={contentSpring}>
            <div style={{ overflow: "hidden" }}>
              <Typography variant="body1">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Cupiditate porro maxime ratione veniam laboriosam. Illum
                inventore iste odio velit voluptatibus in excepturi ipsa
                quibusdam vitae vero a corrupti, itaque quaerat. Lorem ipsum
                dolor sit amet consectetur adipisicing elit. Beatae libero,
                culpa aperiam praesentium enim eius voluptas reprehenderit
                suscipit ipsam consequuntur, amet neque sapiente eligendi fugit
                voluptatibus ut repellendus quod minus. Lorem ipsum dolor sit
                amet consectetur adipisicing elit. Sapiente ipsa odit obcaecati
                deserunt, nemo explicabo reiciendis earum asperiores fugiat quod
                praesentium quia tempora nostrum perferendis illo atque
                similique veniam hic?. Lorem ipsum dolor sit amet consectetur,
                adipisicing elit. Iste nihil, libero atque consectetur molestias
                iusto rerum ipsam. At dolorem corrupti magni modi eum assumenda
                totam quisquam amet fuga, unde.
              </Typography>
            </div>
          </animated.div>
        </div>
      </Grid>
    </Grid>
  );
};

export default Sandwiches;
