import { memo, ReactNode } from 'react'

import cls from './AppList.module.scss'

import { classNames } from 'shared/lib/classNames/classNames'

interface AppListProps {
  children?: ReactNode
  className?: string
}

const AppList = memo(({ children, className }: AppListProps) => {
  return (
    <ul className={classNames(cls.appList, {}, [className])}>
      {children}
    </ul>
  );
})

export default AppList
