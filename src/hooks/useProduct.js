import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import useReduxState from 'hooks/useReduxState';
import { addCartItem } from 'reducers/cart/cart.actions';
import { getProductAsync } from 'reducers/product/product.thunks';

const useProduct = () => {
  const { dispatch, isLoading, data, isError } = useReduxState('product');

  const addCart = () => {
    dispatch(addCartItem({ ...data, quantity: 1 }));
  };

  const { id } = useParams();

  useEffect(() => {
    dispatch(getProductAsync(id));
  }, [id]);

  return { addCart, isLoading, product: data, isError };
};

export default useProduct;