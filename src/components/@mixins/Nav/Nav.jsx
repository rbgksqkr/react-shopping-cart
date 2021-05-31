import React from "react";

import { Link } from "react-router-dom";
import { ROUTE } from "../../../constants/constant";
import { useCart } from "../../../hooks/useCart";
import CartIcon from "../../@shared/CartIcon/CartIcon";
import * as S from "./Nav.styled";

const Nav = () => {
  const { cartAmount } = useCart();

  return (
    <S.Nav>
      <S.NavWrapper>
        <Link to={ROUTE.HOME} className="nav-title">
          <CartIcon />
          <h1>WOOWA SHOP</h1>
        </Link>
        <S.NavMenu>
          <li>
            <Link to={ROUTE.CART} className="cart-link" aria-label="cart-link">
              <span>장바구니</span>
              {cartAmount > 0 && (
                <span className="cart-amount">{cartAmount}</span>
              )}
            </Link>
          </li>
          <li>
            <Link to={ROUTE.ORDERS_LIST}>
              <span>주문목록</span>
            </Link>
          </li>
        </S.NavMenu>
      </S.NavWrapper>
    </S.Nav>
  );
};

export default Nav;
