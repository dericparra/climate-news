import styled from 'styled-components'

export const Div = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  width: 100%;
  margin-top: 40px;

  @media (min-width: 540px) {
    max-width: 640px;
    margin-top: 80px;
  }
`
