import { BrowserRouter, Switch, Route } from "react-router-dom";
import LandingPage from "./Landingpage/LandingPage";
import Homepage from "./Homepage/Homepage";
import Conference from "./Conference/Conference";
import Country from "./Country/Country";
import AddConference from "./Conference/AddConference";

const App = () => {
  return (
    <BrowserRouter>
      <Homepage />
      <Switch>
        <Route exact path='/' component={LandingPage} />
        <Route exact path='/dashboard' component={LandingPage} />
        <Route exact path='/conference' component={Conference} />
        <Route exact path='/add-conference' component={AddConference} />

        <Route exact path='/country' component={Country} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
