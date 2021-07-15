import "./App.css";
import Home from "./Components/home";
import AddNew from "./Components/addNew";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>

          <Route path="/blogs/:id">
            <AddNew />
          </Route>

          <Route path="/blogs/">
            <AddNew />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
