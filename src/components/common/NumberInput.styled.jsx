import styled from "styled-components";

const NumberInputContainer = styled.div`
  display: flex;

  width: 112px;
  height: 60px;
`;

const Input = styled.input`
  text-align: center;

  width: 72px;
  height: 100%;

  font-size: 24px;
  line-height: 19px;
  color: ${({ theme }) => theme.color.grey_darker};

  border: 1px solid ${({ theme }) => theme.color.grey_lighter};

  &:focus {
    outline: none;
  }

  ::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

const ArrowButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  height: 100%;
  border: none;
`;

const ArrowButton = styled.button`
  width: 40px;
  height: 50%;

  font-size: 10px;
  border: 1px solid ${({ theme }) => theme.color.grey_lighter};
  background-color: transparent;

  &:hover {
    cursor: pointer;
  }
`;

export { NumberInputContainer, Input, ArrowButtonContainer, ArrowButton };