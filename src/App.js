import "./App.css";
import Home from "./Components/Home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import TeamDetail from './Components/TeamDetail/TeamDetail'
import Error from "./Components/Error/Error";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
    <Router>

      <Switch>

      <Route path="/team/:id">
        <TeamDetail></TeamDetail>
        </Route>

        <Route path="/home">
        <Home></Home>
        </Route>

        <Route exact path="/">
        <Home></Home>
        </Route>

        <Route path="*">
        <Error></Error>
        </Route>


      </Switch>
    </Router>
      

    </>
    
    
  );
}

export default App;
