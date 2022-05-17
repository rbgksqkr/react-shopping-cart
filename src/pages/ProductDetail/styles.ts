import styled from "styled-components";

const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  hr {
    width: 100%;
    border: 1px solid #aaaaaa;
    margin: 0;
  }
`;

const ProductDetailWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 400px;
`;

const ProductImage = styled.img`
  width: 360px;
  height: 360px;
`;

const ProductName = styled.div`
  box-sizing: border-box;
  font-size: 20px;
  text-align: start;
  width: 100%;
  margin: 16px 0;
  font-weight: 600;
  padding: 0 20px;
`;

const ProductPriceWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  margin: 16px 0;
  padding: 0 20px;

  span:last-child {
    font-size: 20px;
  }
`;

const CartButton = styled.button<{ color?: string }>`
  width: 100%;
  height: 60px;
  background-color: ${({ color = "#73675c" }) => color};
  color: white;
  font-size: 22px;
  font-weight: 700;
  border: none;
  cursor: pointer;
  margin-top: 5px;
`;

const ProductBadge = styled.div`
  position: absolute;
  width: 50px;
  height: 50px;
  background-color: white;
  text-align: center;
  border-radius: 25px;
  line-height: 50px;
  color: #2ac1bc;
  font-weight: 800;
  font-size: 28px;
  top: 295px;
  right: 30px;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.4);
`;

export {
  Content,
  ProductDetailWrapper,
  ProductImage,
  ProductName,
  ProductPriceWrapper,
  CartButton,
  ProductBadge,
};
