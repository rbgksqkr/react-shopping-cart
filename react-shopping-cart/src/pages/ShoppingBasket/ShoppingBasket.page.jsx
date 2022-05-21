import styled from 'styled-components';
import { Divider, FlexWrapper, Text } from 'components/@shared';
import Header from 'components/Header/Header.component';
import ShoppingBasketControl from 'components/ShoppingBasketControl/ShoppingBasketControl.component';
import ShoppingBasketListContainer from 'components/ShoppingBasketListContainer/ShoppingBasketListContainer.component';
import PaymentBox from 'components/PaymentBox/PaymentBox.component';
import { useShoppingBasket } from 'hooks';
import { PALETTE } from 'styles/theme';
import STATE_KEY from 'constants/stateKey';

const PageBox = styled(FlexWrapper)`
  margin: 60px 0 60px;
`;

const ContentBox = styled(FlexWrapper)`
  align-items: flex-start;
  position: relative;
  gap: 86px;
`;

const LeftBox = styled(FlexWrapper)`
  margin-top: 51px;
`;

const RightBox = styled(FlexWrapper)`
  margin-top: 103px;
`;

function ShoppingBasket() {
  const { shoppingBasketList, deleteProducts } = useShoppingBasket(
    STATE_KEY.SHOPPING_BASKET_REDUCER
  );

  return (
    <>
      <Header />
      <PageBox isColumnDirection={true}>
        <Text fontSize="extraLarge" bold={true}>
          장바구니
        </Text>
        <Divider width="1320px" height="4px" backgroundColor={PALETTE.BLACK_001} />
        <ContentBox>
          <LeftBox alignItems="flex-start" isColumnDirection={true}>
            <ShoppingBasketControl />
            <Text margin="26px 0 0" fontSize="medium">
              든든배송 상품 ({shoppingBasketList.length})
            </Text>
            <Divider height="4px" margin="16px 0 23px" backgroundColor={PALETTE.GRAY_002} />
            <ShoppingBasketListContainer
              shoppingBasketList={shoppingBasketList}
              deleteProducts={deleteProducts}
            />
          </LeftBox>
          <RightBox isColumnDirection={true}>
            <PaymentBox
              title="결제예상금액"
              paymentAmountLabel="결제예상금액"
              paymentAmount={123000}
              buttonLabel="주문하기"
            />
          </RightBox>
        </ContentBox>
      </PageBox>
    </>
  );
}

export default ShoppingBasket;
