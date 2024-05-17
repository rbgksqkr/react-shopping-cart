import { css } from '@emotion/react';
import { useRecoilValue } from 'recoil';

import Receipt from './Receipt';

import { INFO_ICON } from '@assets/images';
import { orderTotalPriceState, deliveryPriceState } from '@recoil/cartItems/selectors';

export default function CartFooterSection() {
  const totalPrice = useRecoilValue(orderTotalPriceState);
  const deliveryPrice = useRecoilValue(deliveryPriceState);

  return (
    <section css={cartFooterSection}>
      <div css={freeDeliveryGuideWrapper}>
        <span css={infoIcon}>
          <img src={INFO_ICON} />
        </span>
        {/* TODO: 100,000 상수 분리 */}
        <span css={freeDeliveryGuide}>총 주문 금액이 100,000원 이상일 경우 무료 배송됩니다.</span>
      </div>
      <div css={borderTopWrapper}>
        <Receipt title="주문 금액" price={totalPrice} />
        <Receipt title="배송비" price={deliveryPrice} />
        <Receipt title="총 결제 금액" price={totalPrice + deliveryPrice} />
      </div>
    </section>
  );
}

const cartFooterSection = css`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const borderTopWrapper = css`
  border-top: 1px solid #0000001a;
`;

const freeDeliveryGuideWrapper = css`
  display: flex;
  align-items: center;
  gap: 4px;

  height: 16px;
`;

const infoIcon = css`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 16px;
  height: 16px;
`;

const freeDeliveryGuide = css`
  font-size: 12px;
  font-weight: 500;
  color: #0a0d13;
`;
