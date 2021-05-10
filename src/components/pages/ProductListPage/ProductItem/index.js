import { useDispatch } from 'react-redux';
import { addProduct } from '../../../../redux';
import PropTypes from 'prop-types';
import { Button, CartIcon } from '../../../commons';
import { getFormattedAsKRW } from '../../../../utils';
import * as Styled from './style.js';

export const ProductItem = (props) => {
  const { product, ...rest } = props;
  const { name, price, img } = product;
  const dispatch = useDispatch();
  const onAddProduct = () => dispatch(addProduct(product));

  return (
    <Styled.Container {...rest}>
      <Styled.Image src={img} />
      <Styled.Footer>
        <Styled.Label>
          <Styled.Name>{name}</Styled.Name>
          <Styled.Price>{getFormattedAsKRW(price)}</Styled.Price>
        </Styled.Label>
        <Button onClick={onAddProduct}>
          <CartIcon width="30" color="#333333" />
        </Button>
      </Styled.Footer>
    </Styled.Container>
  );
};

ProductItem.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    name: PropTypes.string,
    price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    img: PropTypes.string,
  }),
};
