import { VStack } from "@chakra-ui/react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import Profile from "./pages/Profile";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route component={Home} path="/" exact />
        <Route component={Dashboard} path="/dashboard" />
        <Route component={Profile} path="/profile" />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
