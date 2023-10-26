import { memo } from 'react'

import cls from './PageError.module.scss'

import { classNames } from 'shared/lib/classNames/classNames'
import AppButton, { AppButtonSize, AppButtonFillTheme, AppButtonTheme } from 'shared/ui/AppButton/AppButton'

interface PageErrorProps {
  className?: string
}

const PageError = memo(({ className }: PageErrorProps) => {
  function reloadPage () {
    location.reload()
  }

  return (
    <div data-testid="pageError" className={classNames(cls.pageError, {}, [className])}>
      <h1>Error</h1>
      <p>Unexpected error occurred</p>
      <AppButton
        onClick={reloadPage}
        theme={AppButtonTheme.ROUNDED}
        fillTheme={AppButtonFillTheme.SOLID}
        size={AppButtonSize.M}
      >
        Reload page
      </AppButton>
    </div>
  )
})

export default PageError
