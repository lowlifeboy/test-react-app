import {Suspense} from 'react'

import {AppRouter} from 'app/providers/router'
import {Navbar} from 'widgets/Navbar'
import {Footer} from 'widgets/Footer'

const App = () => {
  return (
    <div className="app">
      <Suspense fallback="Loading localization...">
        <Navbar />
        <main className="container">
          <AppRouter />
        </main>
        <Footer />
      </Suspense>
    </div>
  )
}

export default App
