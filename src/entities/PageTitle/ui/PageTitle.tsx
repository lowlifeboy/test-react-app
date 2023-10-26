import { memo } from 'react'

import cls from './PageTitle.module.scss'

import { classNames } from 'shared/lib/classNames/classNames'

interface PageTitleProps {
  text: string
  className?: string
}

const PageTitle = memo(({ text, className }: PageTitleProps) => {
  return (
    <h1 className={classNames(cls.pageTitle, {}, [className])}>
      {text}
    </h1>
  );
})

export default PageTitle
