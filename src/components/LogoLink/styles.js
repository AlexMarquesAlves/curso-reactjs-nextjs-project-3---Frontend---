import styled, { css } from 'styled-components';

export const Container = styled.a`
  ${({ theme }) => css`
    display: flex;
    align-itens: center;
    text-decoration: none;
    color: inherit;

    > img {
      max-height: 3rem;
    }
  `}
`;
