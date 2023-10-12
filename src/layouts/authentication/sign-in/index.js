import FacebookIcon from '@mui/icons-material/Facebook'
import GitHubIcon from '@mui/icons-material/GitHub'
import GoogleIcon from '@mui/icons-material/Google'
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import MuiLink from '@mui/material/Link'
import Switch from '@mui/material/Switch'
import bgImage from 'assets/images/bg-sign-in-basic.jpeg'
import MDBox from 'components/MDBox'
import MDButton from 'components/MDButton'
import MDInput from 'components/MDInput'
import MDTypography from 'components/MDTypography'
import { setIsAuth, useAuthContextController, setMeData } from 'context/AuthContext'
import BasicLayout from 'layouts/authentication/components/BasicLayout'
import { useState, forwardRef } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Cookies from 'js-cookie'
import axiosInstance from 'services/axios'
import Snackbar from '@mui/material/Snackbar'
import MuiAlert from '@mui/material/Alert'

const Alert = forwardRef((props, ref) => {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />
})

function LoginPage() {
  const navigate = useNavigate()
  const [formLogin, setFormLogin] = useState({ email: 'admin@gmail.com', password: '123456aA@' })
  const [controller, dispatch] = useAuthContextController()
  const [openToast, setOpenToast] = useState(false)
  const [messageError, setMessageError] = useState('This is an error message!')

  const handleLogin = () => {
    // validate
    if (!!!formLogin.email || !!!formLogin.password) {
      setMessageError('Invalid Form, pls check!')
      return
    }
    // call api here
    axiosInstance
      .post('api/auth/login', formLogin)
      .then((res) => {
        const data = res.data.data
        const token = data.token
        const userData = data.user

        // set cookie
        Cookies.set('_token_', token, { path: '/' })
        // set localStorage
        localStorage.setItem('meData', JSON.stringify(userData))
        // set context AuthContext
        setIsAuth(dispatch, true)
        setMeData(dispatch, userData)
        // go to another page
        navigate('/user-management')
      })
      .catch((e) => {
        console.log(e)
        setMessageError('Unhandle Error, pls wait from server')
      })
  }

  const handleCloseToast = (event, reason) => {
    if (reason === 'clickaway') {
      return
    }

    setOpenToast(false)
  }
  return (
    <BasicLayout image={bgImage}>
      <Card>
        <MDBox
          variant="gradient"
          bgColor="info"
          borderRadius="lg"
          coloredShadow="info"
          mx={2}
          mt={-3}
          p={2}
          mb={1}
          textAlign="center"
        >
          <MDTypography variant="h4" fontWeight="medium" color="white" mt={1}>
            Sign in
          </MDTypography>
          <Grid
            container
            spacing={3}
            justifyContent="center"
            sx={{ display: 'none', mt: 1, mb: 2 }}
          >
            <Grid item xs={2}>
              <MDTypography component={MuiLink} href="#" variant="body1" color="white">
                <FacebookIcon color="inherit" />
              </MDTypography>
            </Grid>
            <Grid item xs={2}>
              <MDTypography component={MuiLink} href="#" variant="body1" color="white">
                <GitHubIcon color="inherit" />
              </MDTypography>
            </Grid>
            <Grid item xs={2}>
              <MDTypography component={MuiLink} href="#" variant="body1" color="white">
                <GoogleIcon color="inherit" />
              </MDTypography>
            </Grid>
          </Grid>
        </MDBox>
        <MDBox pt={4} pb={3} px={3}>
          <MDBox component="form" role="form">
            <MDBox mb={2}>
              <MDInput
                type="email"
                label="Email"
                fullWidth
                value={formLogin.email}
                onChange={(e) => setFormLogin({ ...formLogin, email: e.target.value })}
              />
            </MDBox>
            <MDBox mb={2}>
              <MDInput
                type="password"
                label="Password"
                fullWidth
                value={formLogin.password}
                onChange={(e) => setFormLogin({ ...formLogin, password: e.target.value })}
              />
            </MDBox>
            <MDBox mt={4} mb={1}>
              <MDButton variant="gradient" color="info" fullWidth onClick={handleLogin}>
                sign in
              </MDButton>
            </MDBox>
            <MDBox mt={3} mb={1} textAlign="center">
              <MDTypography variant="button" color="text">
                Don&apos;t have an account?{' '}
                <MDTypography
                  component={Link}
                  to="/authentication/sign-up"
                  variant="button"
                  color="info"
                  fontWeight="medium"
                  textGradient
                >
                  Sign up
                </MDTypography>
              </MDTypography>
            </MDBox>
          </MDBox>
        </MDBox>
      </Card>
      <Snackbar
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        open={openToast}
        autoHideDuration={6000}
        onClose={handleCloseToast}
      >
        <Alert onClose={handleCloseToast} sx={{ width: '100%' }} severity="error">
          {messageError}
        </Alert>
      </Snackbar>
    </BasicLayout>
  )
}

export default LoginPage
