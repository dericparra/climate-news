import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  margin-top: 20px;
  justify-content: space-between;
  @media (min-width: 539px) {
    justify-content: normal;
    margin-top: 40px;
  }
`

export const Title = styled.h2`
  font-size: 24px;
  margin-left: 10px;

  @media (min-width: 539px) {
    flex: 2;
    text-align: end;
    font-size: 36px;
  }

  @media (min-width: 1023px) {
    flex: 1.2;
  }
`

export const Date = styled.p`
  font-size: 12px;
  margin-right: 10px;
  @media (min-width: 539px) {
    flex: 1;
    text-align: end;
    font-size: 18px;
  }
`
