// React layouts
// import Dashboard from 'layouts/dashboard'
import UserManagement from 'pages/user-management'
import NewsManagement from 'pages/NewsManagement'
// import Tables from 'layouts/tables'
// import Billing from 'layouts/billing'
// import Notifications from 'layouts/notifications'
// import Profile from 'layouts/profile'
import SignIn from 'layouts/authentication/sign-in'
import SignUp from 'layouts/authentication/sign-up'

// @mui icons
import Icon from '@mui/material/Icon'

const old_routes = [
  // {
  //   type: 'collapse',
  //   name: 'Dashboard',
  //   key: 'dashboard',
  //   icon: <Icon fontSize="small">dashboard</Icon>,
  //   route: '/dashboard',
  //   component: <Dashboard />,
  // },
  // {
  //   type: 'collapse',
  //   name: 'Tables',
  //   key: 'tables',
  //   icon: <Icon fontSize="small">table_view</Icon>,
  //   route: '/tables',
  //   component: <Tables />,
  // },
  // {
  //   type: 'collapse',
  //   name: 'Billing',
  //   key: 'billing',
  //   icon: <Icon fontSize="small">receipt_long</Icon>,
  //   route: '/billing',
  //   component: <Billing />,
  // },
  // {
  //   type: 'collapse',
  //   name: 'Notifications',
  //   key: 'notifications',
  //   icon: <Icon fontSize="small">notifications</Icon>,
  //   route: '/notifications',
  //   component: <Notifications />,
  // },
  // {
  //   type: 'collapse',
  //   name: 'Profile',
  //   key: 'profile',
  //   icon: <Icon fontSize="small">person</Icon>,
  //   route: '/profile',
  //   component: <Profile />,
  // },
]
const new_routes = [
  {
    type: 'collapse',
    name: 'User',
    key: 'user-management',
    icon: <Icon fontSize="small">person</Icon>,
    route: '/user-management',
    component: <UserManagement />,
  },
  {
    type: 'collapse',
    name: 'News',
    key: 'news-management',
    icon: <Icon fontSize="small">newspaper</Icon>,
    route: '/news-management',
    component: <NewsManagement />,
  },
]

const routes = [
  ...old_routes,
  ...new_routes,
  {
    type: 'collapse',
    name: 'Sign In',
    key: 'sign-in',
    icon: <Icon fontSize="small">login</Icon>,
    route: '/authentication/sign-in',
    component: <SignIn />,
  },
  {
    type: 'collapse',
    name: 'Sign Up',
    key: 'sign-up',
    icon: <Icon fontSize="small">assignment</Icon>,
    route: '/authentication/sign-up',
    component: <SignUp />,
  },
]

export default routes
