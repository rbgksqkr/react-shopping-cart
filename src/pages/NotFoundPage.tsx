import React from 'react';
import styled from 'styled-components';

const NotFoundPage: React.FC<React.PropsWithChildren> = ({ children }) => {
  return <StyleErrorMessage>{children}</StyleErrorMessage>;
};

const StyleErrorMessage = styled.div`
  width: 100%;
  height: 200px;

  text-align: center;

  position: fixed;
  top: 30%;
  left: 50%;
  transform: translateX(-50%);
`;

export default NotFoundPage;