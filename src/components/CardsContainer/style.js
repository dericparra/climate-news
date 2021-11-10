import styled from 'styled-components'

export const Div = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`
export const Loading = styled.h1`
  width: 100%;
  text-align: center;
  margin-top: 100px;
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

export const Link = styled.p`
  margin: 0 20px;
`
