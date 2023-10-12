import CssBaseline from '@mui/material/CssBaseline'
import Icon from '@mui/material/Icon'
import { ThemeProvider } from '@mui/material/styles'
import brandDark from 'assets/images/logo-ct-dark.png'
import brandWhite from 'assets/images/logo-ct.png'
import theme from 'assets/theme'
import themeDark from 'assets/theme-dark'
import MDBox from 'components/MDBox'
import { setMiniSidenav, setOpenConfigurator, useMaterialUIController } from 'context'
import { useAuthContextController } from 'context/AuthContext'
import Configurator from 'examples/Configurator'
import Sidenav from 'examples/Sidenav'
import SignIn from 'layouts/authentication/sign-in'
import SignUp from 'layouts/authentication/sign-up'
import { useEffect, useState } from 'react'
import { Navigate, Route, Routes, useLocation, useNavigate } from 'react-router-dom'
import routes from 'routes'

const WHITELIST_ROUTE = ['/authentication/sign-in', '/authentication/sign-up']

export default function App() {
  const navigate = useNavigate()
  const [controller, dispatch] = useMaterialUIController()
  const [controllerAuth, dispatchAuth] = useAuthContextController()
  const {
    miniSidenav,
    layout,
    openConfigurator,
    sidenavColor,
    transparentSidenav,
    whiteSidenav,
    darkMode,
  } = controller

  const { isAuth } = controllerAuth

  const [onMouseEnter, setOnMouseEnter] = useState(false)
  const { pathname } = useLocation()

  // Open sidenav when mouse enter on mini sidenav
  const handleOnMouseEnter = () => {
    if (miniSidenav && !onMouseEnter) {
      setMiniSidenav(dispatch, false)
      setOnMouseEnter(true)
    }
  }

  // Close sidenav when mouse leave mini sidenav
  const handleOnMouseLeave = () => {
    if (onMouseEnter) {
      setMiniSidenav(dispatch, true)
      setOnMouseEnter(false)
    }
  }

  // Change the openConfigurator state
  const handleConfiguratorOpen = () => setOpenConfigurator(dispatch, !openConfigurator)

  // Setting page scroll to 0 when changing the route
  useEffect(() => {
    document.documentElement.scrollTop = 0
    document.scrollingElement.scrollTop = 0

    if (WHITELIST_ROUTE.includes(pathname)) {
      if (isAuth) navigate('/user-management')
    }

    if (!WHITELIST_ROUTE.includes(pathname)) {
      if (!isAuth) navigate('/authentication/sign-in')
    }
  }, [pathname, isAuth])

  const getRoutes = (allRoutes) =>
    allRoutes.map((route) => {
      if (route.collapse) {
        return getRoutes(route.collapse)
      }

      if (route.route) {
        return <Route exact path={route.route} element={route.component} key={route.key} />
      }

      return null
    })

  const configsButton = (
    <MDBox
      display="flex"
      justifyContent="center"
      alignItems="center"
      width="3.25rem"
      height="3.25rem"
      bgColor="white"
      shadow="sm"
      borderRadius="50%"
      position="fixed"
      right="2rem"
      bottom="2rem"
      zIndex={99}
      color="dark"
      sx={{ cursor: 'pointer' }}
      onClick={handleConfiguratorOpen}
    >
      <Icon fontSize="small" color="inherit">
        settings
      </Icon>
    </MDBox>
  )

  return (
    <ThemeProvider theme={darkMode ? themeDark : theme}>
      <CssBaseline />
      {layout === 'dashboard' && (
        <>
          <Sidenav
            color={sidenavColor}
            brand={(transparentSidenav && !darkMode) || whiteSidenav ? brandDark : brandWhite}
            brandName="Air map"
            routes={routes}
            onMouseEnter={handleOnMouseEnter}
            onMouseLeave={handleOnMouseLeave}
          />
          <Configurator />
          {configsButton}
        </>
      )}
      {layout === 'vr' && <Configurator />}
      <Routes>
        {isAuth && getRoutes(routes)}
        <Route exact path="/authentication/sign-in" element={<SignIn />} />
        <Route exact path="/authentication/sign-up" element={<SignUp />} />
        <Route path="*" element={<Navigate to="/authentication/sign-in" />} />
      </Routes>
    </ThemeProvider>
  )
}
