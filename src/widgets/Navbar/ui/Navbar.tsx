import {memo} from 'react'

import cls from './Navbar.module.scss'
import {LogoLink} from "entities/LogoLink";

const Navbar = memo(() => {
  return (
    <header className={cls.navbar}>
      <div className={cls.container}>
        <LogoLink />
      </div>
    </header>
  )
})

export default Navbar
