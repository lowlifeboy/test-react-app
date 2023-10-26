import { memo } from 'react'

import cls from './LogoLink.module.scss'

import AppLink from 'shared/ui/AppLink/AppLink'

const LogoLink = memo(() => {
  return (
    <AppLink className={cls.navbarLogo} to={'/'}>
      WebsiteLogo
    </AppLink>
  )
})

export default LogoLink
