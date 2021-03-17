import { Typography, Button, Link } from "@material-ui/core";
import { Instagram, Facebook } from "@material-ui/icons";
import useStyles from "./styles";
import DrawerList from "./DrawerList";

const LargeNav = () => {
  const classes = useStyles();
  const Scroll = () => {
    window.scrollTo({
      top: -window.innerHeight,
      behavior: "smooth",
    });
  };
  return (
    <>
      <div className={classes.container}>
        <Button className={classes.logo} onClick={Scroll} />
      </div>
      <DrawerList />
      <div className={`${classes.container} ${classes.socialMediaContainer}`}>
        <div className={classes.socialMedia}>
          <Link
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener"
          >
            <Instagram className={classes.icons} />
          </Link>
          <Link href="https://www.facebook.com/" target="_blank" rel="noopener">
            <Facebook className={classes.icons} />
          </Link>
        </div>
        <div className={classes.info}>
          <Typography variant="subtitle2">
            Lun - Sab 12:00 pm ~ 01:00 am
          </Typography>
          <Typography variant="subtitle2" className={classes.address}>
            Avenida Lorem Ipsum 1785
          </Typography>
          <Typography variant="subtitle2">+56 978451256</Typography>
        </div>
      </div>
    </>
  );
};

export default LargeNav;
