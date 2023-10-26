import {memo, Suspense} from 'react'
import PageLoader from 'shared/ui/PageLoader/PageLoader'
import {useRoutes} from "react-router-dom";
import {routeConfig} from "shared/config/routeConfig/routeConfig";

const AppRouter = memo(() => {
  const routes = useRoutes(routeConfig)

  return (
    <Suspense fallback={<PageLoader />}>
      {routes}
    </Suspense>
  )
})

export default memo(AppRouter)
