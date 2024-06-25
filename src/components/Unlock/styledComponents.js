import styled from 'styled-components'

export const AppContainer = styled.div`
  background-color: #0b0c1e;
  background-size: cover;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const UnlockedImg = styled.img`
  height: 100px;
  width: 100px;
`
export const LockedImg = styled.img`
  height: 100px;
  width: 100px;
`
export const LockStatusContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 70px;
`

export const LockUnLockStatus = styled.p`
  color: #e2e8f0;
  font-family: 'Roboto';
  font-size: 25px;
`
export const ButtonLockUnlock = styled.button`
  color: #ffffff;
  background-color: #06b6d4;
  font-size: 20px;
  font-weight: 400;
  height: 45px;
  width: 100px;
  border-radius: 12px;
  border-width: none;
  padding-bottom: 5px;
  text-align: center;
  cursor: pointer;
  outline: none;
`
