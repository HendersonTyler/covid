import Navbar from "./components/layout/Navbar";
import Home from "./components/pages/Home";
import Country from "./components/countries/Country";
import About from "./components/pages/About";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Container from "react-bootstrap/Container";
import "./App.css";

import CountryState from "./context/countries/CountryState";

function App() {
  return (
    <CountryState>
      <Router>
        <Navbar />
        <Container>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/country/:country" component={Country} />
            <Route exact path="/about" component={About} />
          </Switch>
        </Container>
      </Router>
    </CountryState>
  );
}

export default App;
