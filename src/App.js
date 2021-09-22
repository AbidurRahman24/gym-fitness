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
import AddService from "./components/Admin/AddService/AddService";
import ServiceList from "./components/Order/ServiceList/ServiceList";
import ServiceCheckout from "./components/Order/CheckoutService/CheckoutService"
import OrderList from "./components/Admin/OrderList/OrderList";
import ManageService from "./components/Admin/ManageService/ManageService";

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
          <Route path='/admin/orderList'>
            <OrderList></OrderList>
          </Route>
          <Route path='/admin/addService'>
            <AddService></AddService>
          </Route>
          <Route path='/admin/manageService'>
            <ManageService></ManageService>
          </Route>
          <PrivateRoute path='/admin'>
            <OrderList></OrderList>
          </PrivateRoute>
          <PrivateRoute path='/order/review'>
            <Review></Review>
          </PrivateRoute>
          <Route path="/order/servicelist">
            <ServiceList></ServiceList>
          </Route>
          <PrivateRoute path="/service/:id">
            <ServiceCheckout></ServiceCheckout>
          </PrivateRoute>
          <PrivateRoute path="/order">
            <ServiceCheckout></ServiceCheckout>
          </PrivateRoute>
          <Route path='/login'>
            <Login></Login>
          </Route>
          <Route path='/home'>
            <Home></Home>
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
