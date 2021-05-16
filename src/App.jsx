import React from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import * as S from "./App.styled";

import Nav from "./components/@mixins/Nav/Nav";
import ProductsList from "./components/ProductsList/ProductsList";
import Cart from "./components/Cart/Cart";
import Payment from "./components/Payment/Payment";
import OrdersList from "./components/OrdersList/OrdersList";
import { ROUTE } from "./constants/constants";

const App = () => (
  <S.App>
    <BrowserRouter>
      <Nav />
      <S.Main>
        <Switch>
          <Route exact path={ROUTE.HOME} component={ProductsList} />
          <Route exact path={ROUTE.CART} component={Cart} />
          <Route exact path={ROUTE.PAYMENT} component={Payment} />
          <Route exact path={ROUTE.ORDERS_LIST} component={OrdersList} />
          <Redirect path="*" to="/" />
        </Switch>
      </S.Main>
    </BrowserRouter>
  </S.App>
);

export default App;