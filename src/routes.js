// React layouts
import Dashboard from 'layouts/dashboard'
import DocumentManagement from 'pages/DocumentManagement'
import MapDataClass from 'pages/MapDataClass'
import MapDataClassCategory from 'pages/MapDataClass/category'
import NewsManagement from 'pages/NewsManagement'
import PDFMap from 'pages/PDFMap'
import SatelliteImage from 'pages/SatelliteImage'
import FeedBack from 'pages/feedback'
import UserManagement from 'pages/user-management'
// import Tables from 'layouts/tables'
// import Billing from 'layouts/billing'
// import Notifications from 'layouts/notifications'
// import Profile from 'layouts/profile'
// import SignIn from 'layouts/authentication/sign-in'
// import SignUp from 'layouts/authentication/sign-up'

// @mui icons
import CategoryIcon from '@mui/icons-material/Category'
import FeedbackIcon from '@mui/icons-material/Feedback'
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf'
import SatelliteAltIcon from '@mui/icons-material/SatelliteAlt'
import TextSnippetIcon from '@mui/icons-material/TextSnippet'
import Icon from '@mui/material/Icon'

const old_routes = [
  {
    type: 'collapse',
    name: 'Dashboard',
    key: 'dashboard',
    icon: <Icon fontSize="small">dashboard</Icon>,
    route: '/dashboard',
    component: <Dashboard />,
  },
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
    name: 'Quản lí người dùng',
    key: 'user-management',
    icon: <Icon fontSize="small">person</Icon>,
    route: '/user-management',
    component: <UserManagement />,
  },
  {
    type: 'collapse',
    name: 'Tin tức',
    key: 'news-management',
    icon: <Icon fontSize="small">newspaper</Icon>,
    route: '/news-management',
    component: <NewsManagement />,
  },
  {
    type: 'collapse',
    name: 'Quản lí tài liệu',
    key: 'document-management',
    icon: <TextSnippetIcon fontSize="small" />,
    route: '/document-management',
    component: <DocumentManagement />,
  },
  {
    type: 'collapse',
    name: 'Lớp dữ liệu bản đồ',
    key: 'map-class',
    icon: <CategoryIcon fontSize="small" />,
    route: '/map-class',
    component: <MapDataClass />,
  },
  {
    type: 'collapse',
    name: 'Danh mục dữ liệu bản đồ',
    key: 'map-class-category',
    icon: <CategoryIcon fontSize="small" />,
    route: '/map-class-category',
    component: <MapDataClassCategory />,
  },
  {
    type: 'collapse',
    name: 'Bản đồ PDF',
    key: 'pdf-map',
    icon: <PictureAsPdfIcon fontSize="small" />,
    route: '/pdf-map',
    component: <PDFMap />,
  },
  {
    type: 'collapse',
    name: 'Phản hồi',
    key: 'feedback',
    icon: <FeedbackIcon fontSize="small" />,
    route: '/feedback',
    component: <FeedBack />,
  },
  {
    type: 'collapse',
    name: 'Ảnh vệ tinh',
    key: 'satellite-image',
    icon: <SatelliteAltIcon fontSize="small" />,
    route: '/satellite-image',
    component: <SatelliteImage />,
  },
]

const routes = [
  // ...old_routes,
  ...new_routes,
  // {
  //   type: 'collapse',
  //   name: 'Sign In',
  //   key: 'sign-in',
  //   icon: <Icon fontSize="small">login</Icon>,
  //   route: '/authentication/sign-in',
  //   component: <SignIn />,
  // },
  // {
  //   type: 'collapse',
  //   name: 'Sign Up',
  //   key: 'sign-up',
  //   icon: <Icon fontSize="small">assignment</Icon>,
  //   route: '/authentication/sign-up',
  //   component: <SignUp />,
  // },
]

export default routes
