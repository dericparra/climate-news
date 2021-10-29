import styled from 'styled-components'

export const List = styled.div`
  display: flex;
  width: 100%auto;
  overflow: scroll;
  align-items: center;
  justify-content: space-between;
  margin-top: 40px;

  @media (min-width: 1023px) {
    overflow: hidden;
    justify-content: center;
  }
`

export const Link = styled.a`
  margin: 0 20px;
`
