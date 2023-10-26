import {memo, ReactNode} from 'react'

import cls from './Tab.module.scss'

import {classNames} from 'shared/lib/classNames/classNames'
import AppButton, {AppButtonFillTheme, AppButtonSize, AppButtonTheme} from "shared/ui/AppButton/AppButton";

interface TabProps {
  title: string
  active: boolean
  onClick: () => void
  children?: ReactNode
  className?: string
}

const Tab = memo(({ title, active, onClick, children, className }: TabProps) => {
  return (
    <div className={classNames(cls.tab, {[cls.active]: active}, [className])}>
      <AppButton
        onClick={onClick}
        size={AppButtonSize.M}
        theme={AppButtonTheme.ROUNDED}
        fillTheme={active ? AppButtonFillTheme.SOLID : AppButtonFillTheme.OUTLINE}
      >
        {title}
      </AppButton>
      {children}
    </div>
  );
})

export default Tab
