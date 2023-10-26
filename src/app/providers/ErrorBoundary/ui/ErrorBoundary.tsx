import React, { type ErrorInfo, type ReactNode, Suspense } from 'react'

interface ErrorBoundaryProps {
  children: ReactNode
  fallback: ReactNode
}

interface ErrorBoundaryState {
  hasError: boolean
}

export default class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor (props: ErrorBoundaryProps) {
    super(props)
    this.state = { hasError: false }
  }

  componentDidCatch (error: Error, info: ErrorInfo) {
    console.log(error, info.componentStack)
  }

  render () {
    if (this.state.hasError) {
      return <Suspense fallback="Loading...">{this.props.fallback}</Suspense>
    }

    return this.props.children
  }
}
