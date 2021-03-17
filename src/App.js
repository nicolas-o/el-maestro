import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core/styles";
import AnimationOnScroll from "./utils/animationScroll";
import theme from "./Theme/Muitheme";
import Home from "./components/Home/Home";
import Sandwiches from "./components/Menu/Sandwiches/Sandwiches";
import NavBar from "./components/NavBar/NavBar";
import Bebidas from "./components/Menu/Bebestibles/Bebestibles";
import Postres from "./components/Menu/Postres/Postres";
import Nosotros from "./components/Nosotros/Nosotros";

const App = () => {
  AnimationOnScroll();
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Home />
        <NavBar />
        <Switch>
          <Route exact path="/" component={Sandwiches} />
          <Route exact path="/Sandwiches" component={Sandwiches} />
          <Route exact path="/Bebidas" component={Bebidas} />
          <Route exact path="/Postres" component={Postres} />
          <Route exact path="/Nosotros" component={Nosotros} />
        </Switch>
      </Router>
    </ThemeProvider>
  );
};

export default App;
