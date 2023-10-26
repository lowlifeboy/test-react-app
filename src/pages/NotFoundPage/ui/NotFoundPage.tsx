import { memo } from 'react'

import cls from './NotFoundPage.module.scss'

import { classNames } from 'shared/lib/classNames/classNames'
import AppButton, { AppButtonFillTheme, AppButtonSize, AppButtonTheme } from 'shared/ui/AppButton/AppButton'
import { NotFoundPageIcon } from 'shared/assets/icons'
import {useNavigate} from "react-router-dom";

interface NotFoundPageProps {
  className?: string
}

const NotFoundPage = memo(({ className }: NotFoundPageProps) => {
  const navigate = useNavigate()

  return (
    <div className={classNames(cls.notFoundPage, {}, [className])}>
      <NotFoundPageIcon className={cls.notFoundPageIcon} />
      <h1>404 – Page not found</h1>
      <p>The page you're looking for isn't available. Try to search again or use the go back button below.</p>
      <AppButton
        onClick={() => { navigate('/') }}
        theme={AppButtonTheme.ROUNDED}
        fillTheme={AppButtonFillTheme.SOLID}
        size={AppButtonSize.M}
      >
        Go back home
      </AppButton>
    </div>
  )
})

export default NotFoundPage
