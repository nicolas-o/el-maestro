import useStyles from "./styles";
import { Link } from "react-router-dom";
import {
  Divider,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@material-ui/core";

const DrawerList = () => {
  const classes = useStyles();
  const pages = ["Sandwiches", "Bebidas", "Postres", "Nosotros"];

  return (
    <div className={classes.list}>
      <Divider className={classes.divider} />
      <List>
        {pages.map((text) => (
          <Link to={text} className={classes.link} key={text}>
            <ListItem className={classes.item} button>
              <ListItemText
                disableTypography
                primary={
                  <Typography className={classes.font}>{text}</Typography>
                }
              />
            </ListItem>
          </Link>
        ))}
      </List>
      <Divider className={classes.divider} />
    </div>
  );
};

export default DrawerList;
