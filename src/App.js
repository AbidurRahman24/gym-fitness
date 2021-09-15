import React, { createContext, useState } from "react";
import Home from './components/Home/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import NoMatch from './components/NoMatch/NoMatch';
import Login from './components/Login/Login';
import Order from "./components/Order/Order/Order";
import Review from "./components/Order/Order/Review/Review";
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({})

  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
    <Router>
      <Switch>
        <Route exact path='/'>
          <Home></Home>
        </Route>
        <Route exact path='/admin'>
          <Home></Home>
        </Route>
        <PrivateRoute path='/order/review'>
          <Review></Review>
        </PrivateRoute>
        <PrivateRoute path='/order'>
          <Order></Order>
        </PrivateRoute>
        <Route path='/login'>
          <Login></Login>
        </Route>
        <Route path='*'>
          <NoMatch></NoMatch>
        </Route>
      </Switch>
    </Router>
    </UserContext.Provider>
  );
}

export default App;
