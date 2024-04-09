import React, { Suspense, useEffect } from 'react'
import { HashRouter, Route, Routes } from 'react-router-dom'
import { useSelector } from 'react-redux'

import { CSpinner, useColorModes } from '@coreui/react'
import './scss/style.scss'
import PrivateRoute from './utils/PrivateRoute'
import { AuthProvider } from './context/AuthContext'
import AuthprivateRoute from './utils/AuthPrivateRoute'
import ScrollToTopArrow from './scroll/ScrollToTopArrow'
import './scroll/ScrollToTopArrow.css'
import PageTransition from './transition/PageTransition'

// Containers
const DefaultLayout = React.lazy(() => import('./layout/DefaultLayout'))

// Pages
const Login = React.lazy(() => import('./views/pages/login/Login'))
const Register = React.lazy(() => import('./views/pages/register/Register'))
const Page404 = React.lazy(() => import('./views/pages/page404/Page404'))
const Page500 = React.lazy(() => import('./views/pages/page500/Page500'))
const Home = React.lazy(() => import('src/home/home'))
const Contactus = React.lazy(() => import('src/contactus/contactus'))
const AboutUs = React.lazy(() => import('src/aboutUs/aboutUs'))

const App = () => {
  const { isColorModeSet, setColorMode } = useColorModes('coreui-free-react-admin-template-theme')
  const storedTheme = useSelector((state) => state.theme)

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.href.split('?')[1])
    const theme = urlParams.get('theme') && urlParams.get('theme').match(/^[A-Za-z0-9\s]+/)[0]
    if (theme) {
      setColorMode(theme)
    }

    if (isColorModeSet()) {
      return
    }

    setColorMode(storedTheme)
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  const loading = (
    <div className="pt-3 text-center">
      <div className="sk-spinner sk-spinner-pulse"></div>
    </div>
  )

  // const {location} = this.props

  return (
    <HashRouter>
      {/* <PageTransition location={location}> */}
      <Suspense fallback={loading}>
        <AuthProvider>
          <Routes>
            <Route exact path="/login" name="Login Page" element={<Login />} />
            <Route exact path="/register" name="Register Page" element={<Register />} />
            <Route exact path="/404" name="Page 404" element={<Page404 />} />
            <Route exact path="/500" name="Page 500" element={<Page500 />} />
            <Route path="/contactus" name="Contact Us" element={<Contactus />} />
            <Route path="/aboutUs" name="About Us" element={<AboutUs />} />
            <Route
              path="*"
              name="Dash"
              element={
                <PrivateRoute>
                  {' '}
                  <DefaultLayout />
                </PrivateRoute>
              }
            />
            <Route path="/" name="Home" element={<Home />} />
          </Routes>
        </AuthProvider>
      </Suspense>
      {/* </PageTransition> */}
    </HashRouter>
  )
}

export default App
