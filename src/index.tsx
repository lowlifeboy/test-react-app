import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from 'react-query'

import 'app/styles/index.scss'

import App from 'app/App'
import { PageError } from 'widgets/PageError'
import { ErrorBoundary } from 'app/providers/ErrorBoundary'

const queryClient = new QueryClient()

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

root.render(
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <ErrorBoundary fallback={<PageError />}>
        <App />
      </ErrorBoundary>
    </BrowserRouter>
  </QueryClientProvider>
)
