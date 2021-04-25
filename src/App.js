import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "rea";
import Login from "./Compnents/Login";

function App() {
  return (
    <div className="App">
      <router>
        <switch>
          <route exact path="/">
            <Login />
          </route>
        </switch>
      </router>
    </div>
  );
}

export default App;
