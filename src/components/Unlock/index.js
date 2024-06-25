import {useState} from 'react'

import {
  AppContainer,
  UnlockedImg,
  LockedImg,
  LockUnLockStatus,
  ButtonLockUnlock,
  LockStatusContainer,
} from './styledComponents'

const Unlock = () => {
  const [isLocked, setLockStatus] = useState(false)

  const changeLockStatus = () => {
    // console.log('event triggered..')
    console.log(isLocked)
    setLockStatus(prev => !prev)
  }

  return (
    <AppContainer>
      <LockStatusContainer>
        LockedImg
        {isLocked ? (
          <LockedImg
            src="https://assets.ccbp.in/frontend/hooks/unlock-img.png"
            alt="unlock"
          />
        ) : (
          <UnlockedImg
            src="https://assets.ccbp.in/frontend/hooks/lock-img.png"
            alt="lock"
          />
        )}
        <LockUnLockStatus>
          {isLocked ? 'Your Device is Unlocked' : 'Your Device is Locked'}
        </LockUnLockStatus>
      </LockStatusContainer>
      <ButtonLockUnlock type="button" onClick={changeLockStatus}>
        {isLocked ? 'Lock' : 'Unlock'}
      </ButtonLockUnlock>
    </AppContainer>
  )
}

export default Unlock
