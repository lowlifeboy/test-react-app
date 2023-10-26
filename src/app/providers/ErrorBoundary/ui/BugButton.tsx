import { useEffect, useState } from 'react'

import AppButton from 'shared/ui/AppButton/AppButton'

// Компонент для тестирования ErrorBoundary
export default function BugButton () {
  const [error, setError] = useState(false)

  function toggleError () {
    setError(!error)
  }

  useEffect(() => {
    if (error) {
      throw new Error()
    }
  }, [error])

  return (
    <AppButton onClick={toggleError}>
      Throw error
    </AppButton>
  )
}
