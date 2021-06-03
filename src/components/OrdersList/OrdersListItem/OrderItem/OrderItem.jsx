import React from "react";
import PropTypes from "prop-types";
import Button from "../../../@shared/Button/Button";

import * as S from "./OrderItem.styled";
import { formatPrice } from "../../../../utils/util";
import { useCart } from "../../../../hooks/useCart";

const OrderItem = ({ item }) => {
  const { product_id: id, image_url: thumbnail, name, price, quantity } = item;
  const { addCart } = useCart();

  const handleButtonClick = () => {
    addCart({ id, price, name, thumbnail });
  };

  return (
    <S.OrderItem>
      <S.Info>
        <S.Img src={thumbnail} alt={name} />
        <S.Detail>
          <S.Name>{name}</S.Name>
          <S.PriceAmount>
            {formatPrice(price)}원 / 수량: {quantity}개
          </S.PriceAmount>
        </S.Detail>
      </S.Info>
      <S.Button>
        <Button onClick={handleButtonClick}>장바구니</Button>
      </S.Button>
    </S.OrderItem>
  );
};

OrderItem.propTypes = {
  item: PropTypes.shape({
    product_id: PropTypes.number.isRequired,
    image_url: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    quantity: PropTypes.number.isRequired,
  }).isRequired,
};

export default OrderItem;
