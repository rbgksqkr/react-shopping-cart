import styled from "styled-components";

export const PaymentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const PaymentText = styled.div`
  font-weight: 700;
  font-size: 13px;
  text-decoration-style: solid;
  text-decoration-line: underline;
  text-decoration-color: ${({ theme }) => theme.colors["opacity_cyon"]};
  text-decoration-thickness: 3px;
`;
