import {type RouteObject} from 'react-router-dom'
import {NotFoundPage} from 'pages/NotFoundPage'
import {MainPage} from "pages/MainPage";

// Route enums
export enum AppRoutes {
  MAIN = 'main',
  TAB = 'tab',

  // last
  NOT_FOUND = 'not_found',
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: '/',
  [AppRoutes.TAB]: '/tabs/:id',

  // last
  [AppRoutes.NOT_FOUND]: '*'
}

export const routeConfig: RouteObject[] = [
  {
    path: RoutePath[AppRoutes.MAIN],
    element: <MainPage />
  },
  {
    path: RoutePath[AppRoutes.TAB],
    element: <MainPage />
  },

  // last
  {
    path: RoutePath[AppRoutes.NOT_FOUND],
    element: <NotFoundPage />
  }
]
