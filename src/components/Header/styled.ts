import styled from 'vue-styled-components'

export const StyledHeader = styled.header`
  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-color: ${(props: any) => props.theme.colors.border};
`

export const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-content: center;
  align-items: center;
`

export const StyledAction = styled.div`
  display: grid;
  align-items: center;
  column-gap: 1.5rem;
  grid-auto-flow: column;
  justify-self: end;
`
