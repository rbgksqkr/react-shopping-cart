import React from 'react';
import PropTypes from 'prop-types';
import * as Styled from './style';
import Product from '../../Product';
import Checkbox from '../../../common/Checkbox';

const ProductListItem = ({ product, listStyle, onChange, productDetail, isCheckbox, imageSize, children }) => {
  const productElement = <Product product={product} productDetail={productDetail} size={imageSize} direction="row" />;

  const onChangeCheckbox = () => {
    onChange(product.id);
  };

  return (
    <Styled.ProductListItem listStyle={listStyle}>
      {isCheckbox ? (
        <Checkbox align="flex-start" isChecked={product.isChecked} onChange={onChangeCheckbox}>
          {productElement}
        </Checkbox>
      ) : (
        productElement
      )}
      {children}
    </Styled.ProductListItem>
  );
};

ProductListItem.propTypes = {
  listStyle: PropTypes.string,
  onChange: PropTypes.func,
  product: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    image: PropTypes.string,
    amount: PropTypes.number,
    isChecked: PropTypes.bool,
  }).isRequired,
  productDetail: PropTypes.shape({
    text: PropTypes.string,
    color: PropTypes.string,
  }),
  isCheckbox: PropTypes.bool,
  imageSize: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.element, PropTypes.node, PropTypes.string]),
};

ProductListItem.defaultProps = {
  listStyle: 'lineStyle',
  isCheckbox: false,
  imageSize: '9rem',
};

export default React.memo(ProductListItem);