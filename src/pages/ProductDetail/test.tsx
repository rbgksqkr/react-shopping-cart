import React from "react";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

import store from "../../store";

import ProductDetail from ".";

import { PATH } from "../../constants/path";
import { Product } from "../../types";
import { toNumberWithComma } from "../../utils/format";

const product: Product = {
  productId: "1",
  name: "강릉초당순두부인절미아이스크림",
  price: 2500,
  imageUrl: "www.google.co.kr",
};

describe("상품 상세 페이지 테스트", () => {
  it("상품 id에 해당하는 상품명, 상품 가격이 화면에 나타난다.", () => {
    const { container } = render(
      <Provider store={store}>
        <MemoryRouter initialEntries={[{ state: { product }, pathname: `${PATH.PRODUCT}/${product.productId}` }]}>
          <ProductDetail />
        </MemoryRouter>
      </Provider>
    );

    expect(container).toHaveTextContent(product.name);
    expect(container).toHaveTextContent(String(toNumberWithComma(product.price)));
  });
});