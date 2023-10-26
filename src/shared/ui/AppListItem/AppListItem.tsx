import { ReactNode, memo } from 'react'

import cls from './AppListItem.module.scss'

import { classNames } from 'shared/lib/classNames/classNames'

interface AppListItemProps {
  children?: ReactNode
  className?: string
}

const AppListItem = memo(({ children, className }: AppListItemProps) => {
  return (
    <li className={classNames(cls.appListItem, {}, [className])}>
      {children}
    </li>
  );
})

export default AppListItem
