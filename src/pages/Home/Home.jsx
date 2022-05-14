import React, { useEffect } from 'react';
import PageTemplate from '../../components/common/PageTemplate/PageTemplate';
import ProductList from '../../components/product/ProductList/ProductList';
import { useDispatch, useSelector } from 'react-redux';
import Pagination from '../../components/common/Pagination/Pagination';
import { useSearchParams } from 'react-router-dom';
import ErrorMessage from '../../components/common/ErrorMessage/ErrorMessage';
import * as Styled from './Home.style';
import { fetchProductListAsync } from '../../store/product/action';

function Home() {
  const dispatch = useDispatch();

  const { isLoading, pageCount, productList } = useSelector(({ product }) => product);

  const [searchParams] = useSearchParams();
  const currentPage = searchParams.get('page') ?? 1;

  useEffect(() => {
    dispatch(fetchProductListAsync(currentPage));
  }, [currentPage]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <PageTemplate>
      <Styled.Container>
        {currentPage > pageCount && <ErrorMessage>😱 존재하지 상품 페이지입니다. 😱</ErrorMessage>}

        {isLoading ? <ProductList.skeleton /> : <ProductList productList={productList} />}

        <Pagination />
      </Styled.Container>
    </PageTemplate>
  );
}

export default Home;
