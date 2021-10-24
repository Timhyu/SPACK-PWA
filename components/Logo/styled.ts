/*
 * @Copyright: @2021 Silk Software Corp. All Rights Reserved
 */
import styled from 'vue-styled-components'

export const StyledLogo = styled.div`
  justify-self: center;

  > a {
    display: block;
  }

  @media screen and (max-width: ${(props: any) => props.theme.breakPoint.m}px) {
    grid-column: 1 / 2;
    grid-row: 1 / 1;
  }
`
