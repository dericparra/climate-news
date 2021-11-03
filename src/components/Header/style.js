import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  margin-top: 20px;
  justify-content: center;
  @media (min-width: 539px) {
    margin-top: 40px;
  }
`

export const Title = styled.h2`
  font-size: 24px;

  @media (min-width: 539px) {
    flex: 2;
    font-size: 36px;
  }

  @media (min-width: 1023px) {
    flex: 1.2;
  }
`

export const Data = styled.p`
  font-size: 12px;

  @media (min-width: 539px) {
    max-width: 100%;
    display: flex;
    flex-direction: row;
    flex: 1;
  }
`
