import { css, styled } from 'styled-components';
import { CART_PATH } from '../constants/svgPath';
import Icon from './common/Icon';
import { MouseEventHandler } from 'react';

type Props = {
  onClick: MouseEventHandler<SVGSVGElement>;
};

export const CartIconButton = ({ onClick }: Props) => {
  return (
    <S.IconButton>
      <Icon
        width="30"
        height="27"
        color="#AAA"
        path={CART_PATH}
        viewBox="0 0 51 44"
        svgStyle={svgStyle}
        onClick={onClick}
      />
    </S.IconButton>
  );
};
const S = {
  IconButton: styled.button`
    background-color: transparent;
    height: fit-content;
  `,
};
const svgStyle = css`
  transform: scaleX(-1);
`;

export default CartIconButton;
