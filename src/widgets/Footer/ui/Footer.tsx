import {memo} from 'react'

import cls from './Footer.module.scss'
import {LogoLink} from "entities/LogoLink";

const Footer = memo(() => {
  return (
    <footer data-testid="footer" className={cls.footer}>
      <div className={cls.container}>
        <LogoLink />
      </div>
    </footer>
  )
})

export default Footer
