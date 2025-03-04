import { createBrowserRouter } from 'react-router-dom'
import RootLayout from './layouts/RootLayout'
import MainPage from './pages/MainPage'
import UsersPage from './pages/UsersPage'

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, element: <MainPage /> },
      { path: 'users', element: <UsersPage /> },
    ],
  },
])

export default router
