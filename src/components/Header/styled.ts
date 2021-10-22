import styled from 'vue-styled-components'

export const StyledHeader = styled.header`
  background-color: ${(props: any) => props.theme.colors.white};
`

export const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-content: center;
`
