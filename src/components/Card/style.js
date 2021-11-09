import styled from 'styled-components'

export const Cards = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  width: 140px;
  height: 180px;
  background: #f1f1f1;
  margin-bottom: 40px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 4px;

  @media (min-width: 540px) {
    margin-bottom: 80px;
  }
`

export const Newspaper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 70px;
  border-bottom: 2px solid #000;
`

export const Text = styled.a`
  font-size: 14px;
  color: #000;
  width: 120px;
  height: 75px;
  margin-top: 20px;
  overflow: hidden;
  text-overflow: ellipsis;
`
