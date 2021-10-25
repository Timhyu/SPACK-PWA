import styled from 'vue-styled-components'

export const StyledNavigation = styled.nav`
  padding: 0;
`

export const StyledList = styled.ul`
  transition: transform 0.25s cubic-bezier(0.4, 0, 0.2, 1);

  > li {
    border-color: ${(props: any) => props.theme.colors.gray};
    border-bottom-width: 1px;
    border-bottom-style: solid;

    > a {
      font-size: 0.75rem;
      display: block;
      padding: 1rem 1.2rem;
    }

    &:hover {
      background-color: ${(props: any) => props.theme.colors.gray};
    }
  }
`
