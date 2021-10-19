import { BrowserRouter, Route, Switch } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Register from "./pages/Register";
import Login from "./pages/Login";
import "dotenv/config";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route component={Home} path="/" exact />
        <Route component={Dashboard} path="/dashboard" />
        <Route component={Profile} path="/profile" />
        <Route component={Register} path="/register" />
        <Route component={Login} path="/login" />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
