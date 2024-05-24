
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './layout/Layout'
import PageNotFound from './pages/PageNotFound'
import Home from './pages/Home'

import LayoutAdmin from './layout/admin/LayoutAdmin'
import HomeAdmin from './pages/admin/HomeAdmin'


// CSS
import './App.css'
import Login from './pages/Login'
import Haveservice from './pages/Viborghaveservice1'
import HaveserviceReviews from './pages/Viborghaveservice2'
import Vejret from './pages/Vejret1'

import Energi from './pages/Energi'


function App () {

  const router = createBrowserRouter(

    [
      {
        // PUBLIC - layout
        element: <Layout />,
        errorElement: <PageNotFound />,
        children: [
          { path: "/", element: <Home /> },
          { path: "login", element: <Login /> },
          {path: "haveservice", element: <Haveservice/>},
          {path: "haveservicereviews", element: <HaveserviceReviews/>},
          {path: "vejret", element: <Vejret/>},
          {path: "energi", element: <Energi/>}
        ]
      },
      {
        // ADMIN - layoutadmin
        element: <LayoutAdmin />,
        errorElement: <PageNotFound />,
        children: [
          { path: "/admin", element: <HomeAdmin /> },
        ]
      }
    ]
  )

  return (
    <div data-theme="dark">
      <RouterProvider router={ router } />
    </div>
  )
}

export default App
