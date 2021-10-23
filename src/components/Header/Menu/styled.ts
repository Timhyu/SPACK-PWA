import styled from 'vue-styled-components'

export const StyledMenu = styled.div`
  display: flex;
  padding: 0.75rem;
  cursor: pointer;
  justify-self: flex-start;
  background-color: ${(props: any) => props.theme.colors.gray};
`
