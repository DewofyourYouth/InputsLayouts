import ASCIIReport from "./Pages/ASCIIReport";
import Page2 from "./Pages/Page2";
import Home from "./Pages/Home";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./styles.css";
import PetsReport from "./Pages/PetReports";

export default function App() {
  return (
    <div className="App">
      <Router>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/random">ASCII Report</Link>
            </li>
            <li>
              <Link to="/list">LowerCaseList</Link>
            </li>
            <li>
              <Link to="/pet">Pet</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/random">
            <ASCIIReport />
          </Route>
          <Route path="/list">
            <Page2 />
          </Route>
          <Route path="/pet">
            <PetsReport />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
