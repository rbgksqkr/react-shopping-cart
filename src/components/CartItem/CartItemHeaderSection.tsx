import { css } from '@emotion/react';
import { useRecoilState, useSetRecoilState } from 'recoil';

import { deleteItem } from '../../apis/cartItem';
import { CHECKED, UNCHECKED } from '../../assets/images';

import { THEME } from '@/constants/theme';
import { cartItemsState, checkedItemsState } from '@recoil/cartItems/atoms';

interface CartItemHeaderSectionProps {
  cartId: number;
}

const CartItemHeaderSection = ({ cartId }: CartItemHeaderSectionProps) => {
  const [isChecked, setIsChecked] = useRecoilState(checkedItemsState(cartId));
  const setCartItems = useSetRecoilState(cartItemsState);

  const handleClickCheck = () => {
    setIsChecked((prev) => !prev);
  };

  const handleDeleteItem = async () => {
    try {
      const { status } = await deleteItem(cartId);
      if (status === 204) {
        setCartItems((prevItems) => prevItems.filter((cartItem) => cartItem.id !== cartId));
      }
    } catch (err: unknown) {
      const error = err as Error;
      throw new Error(error.message);
    }
  };

  return (
    <div css={cartItemHeader}>
      <div onClick={handleClickCheck}>
        <img src={isChecked ? CHECKED : UNCHECKED} width={24} height={24} css={checkIcon} />
      </div>
      <button css={deleteButton} onClick={handleDeleteItem}>
        삭제
      </button>
    </div>
  );
};

export default CartItemHeaderSection;

const cartItemHeader = css`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-bottom: 10px;
`;

const deleteButton = css`
  width: 40px;
  height: 24px;

  display: flex;
  justify-content: center;
  align-items: center;

  border: 1px solid ${THEME.LIGHT_BLACK};
  border-radius: 4px;
  padding: 4px 8px;

  background-color: ${THEME.WHITE};

  font-size: 12px;
`;

const checkIcon = css`
  cursor: pointer;
`;
