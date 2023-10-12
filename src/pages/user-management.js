import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import Pagination from '@mui/material/Pagination'
import { useEffect, useState } from 'react'
import dayjs from 'dayjs'

import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'
import TextField from '@mui/material/TextField'
import MDBox from 'components/MDBox'
import MDButton from 'components/MDButton'
import MDInput from 'components/MDInput'
import MDTypography from 'components/MDTypography'

import DashboardLayout from 'examples/LayoutContainers/DashboardLayout'
import DashboardNavbar from 'examples/Navbars/DashboardNavbar'

import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import Select from '@mui/material/Select'

import Menu from '@mui/material/Menu'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableContainer from '@mui/material/TableContainer'
import TableRow from '@mui/material/TableRow'

import Icon from '@mui/material/Icon'
import MDAvatar from 'components/MDAvatar'
import MybodyCell from 'examples/Tables/DataTable/MyBodyCell'
import MyHeadCell from 'examples/Tables/DataTable/MyHeadCell'
import { validateEmail } from 'utils'
import { useAuthContextController } from 'context/AuthContext'

import logoGithub from 'assets/images/small-logos/github.svg'
import LogoAsana from 'assets/images/small-logos/logo-asana.svg'
import logoAtlassian from 'assets/images/small-logos/logo-atlassian.svg'
import logoInvesion from 'assets/images/small-logos/logo-invision.svg'
import logoSlack from 'assets/images/small-logos/logo-slack.svg'
import logoSpotify from 'assets/images/small-logos/logo-spotify.svg'

const ROLE_USER = {
  1: 'SuperAdmin',
  2: 'Admin',
  3: 'User',
  4: 'Anonymous',
}

const dataDemo = () => {
  let list_img = [
    logoInvesion,
    logoSpotify,
    LogoAsana,
    logoGithub,
    logoAtlassian,
    logoAtlassian,
    logoSlack,
  ]
  let arr = new Array(20)
  let rs = new Array()
  for (let i = 1; i <= arr.length; i++) {
    rs.push({
      id: i,
      image: list_img[Math.floor(Math.random() * list_img.length)],
      email: `user${i}@gmail.com`,
      name: `hiengv - ${i}`,
      role: Math.ceil(Math.random() * 4),
      password: '',
    })
  }
  return rs
}

const DATA_DEMO = dataDemo()

const ImageComponent = ({ image }) => (
  <MDBox display="flex" alignItems="center" lineHeight={1}>
    <MDAvatar src={image} size="sm" variant="rounded" />
  </MDBox>
)

function CustomDataTable({ dataRows, handleOpenDialog, setActiveItem }) {
  const [anchorEl, setAnchorEl] = useState(null)

  const handleClick = (index, event) => {
    setAnchorEl({ [index]: event.currentTarget })
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const handMenuItem = (type, item) => {
    if (type === 'EDIT') {
      handleOpenDialog()
      setActiveItem(item)
    }
    handleClose()
  }
  return (
    <TableContainer sx={{ boxShadow: 'none' }}>
      <Table>
        <MDBox component="thead">
          <TableRow>
            <MyHeadCell width={'10%'} align={'left'}>
              ID
            </MyHeadCell>
            <MyHeadCell align={'left'}>Image</MyHeadCell>
            <MyHeadCell align={'center'}>Email</MyHeadCell>
            <MyHeadCell align={'center'}>User Name</MyHeadCell>
            <MyHeadCell align={'center'}>Role</MyHeadCell>
            <MyHeadCell align={'center'}>Action</MyHeadCell>
          </TableRow>
        </MDBox>
        <TableBody>
          {dataRows.map((item, idx) => (
            <TableRow key={idx}>
              <MybodyCell width={'10%'} align={'left'}>
                {item.id}
              </MybodyCell>

              <MybodyCell align={'left'}>
                <ImageComponent image={item.image} />
              </MybodyCell>

              <MybodyCell align={'center'}>
                <MDTypography
                  component="a"
                  href="#"
                  variant="button"
                  color="text"
                  fontWeight="medium"
                >
                  {item.email}
                </MDTypography>
              </MybodyCell>

              <MybodyCell align={'center'}>
                <MDTypography
                  component="a"
                  href="#"
                  variant="button"
                  color="text"
                  fontWeight="medium"
                >
                  {item.name}
                </MDTypography>
              </MybodyCell>

              <MybodyCell align={'center'}>
                <MDTypography
                  component="a"
                  href="#"
                  variant="button"
                  color="text"
                  fontWeight="medium"
                >
                  {ROLE_USER[item.role]}
                </MDTypography>
              </MybodyCell>

              <MybodyCell align={'center'}>
                <MDTypography color="text" onClick={(e) => handleClick(item.id, e)}>
                  <Icon>more_vert</Icon>
                </MDTypography>
                <Menu
                  anchorEl={anchorEl && anchorEl[item.id]}
                  keepMounted
                  open={Boolean(anchorEl && anchorEl[item.id])}
                  onClose={handleClose}
                  anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
                  transformOrigin={{ vertical: 'top', horizontal: 'center' }}
                >
                  <MenuItem onClick={() => handMenuItem('EDIT', item)}>Edit</MenuItem>
                  <MenuItem onClick={() => handMenuItem('DELETE')}>Delete</MenuItem>
                  <MenuItem onClick={() => handMenuItem('BLOCK')}>Block</MenuItem>
                  <MenuItem onClick={() => handMenuItem('RESET_PASSWORD')}>Reset password</MenuItem>
                </Menu>
              </MybodyCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

function DialogCreateUser({ activeItem, isOpen, handleClose, handleSubmit }) {
  const [formData, setFormData] = useState({ email: '', name: '', password: '', role: '' })
  const [validateForm, setValidateForm] = useState({})
  useEffect(() => {
    if (activeItem) {
      setFormData({ ...activeItem })
    }
  }, [activeItem])

  const handleSubmitForm = () => {
    setValidateForm({})
    const temp_error = {}
    if (Object.keys(formData).length > 0) {
      Object.keys(formData).forEach((key) => {
        let item = formData[key]
        if (!item) {
          temp_error[key] = true
        }
        if (key === 'email' && !validateEmail(item)) {
          temp_error[key] = true
        }
      })
    }
    if (Object.keys(temp_error).length > 0) {
      setValidateForm(temp_error)
      return false
    }
    return true
  }

  const internalSubmit = () => {
    // validate
    if (!handleSubmitForm()) return
    handleSubmit({ ...formData })
    setFormData({})
  }

  const internalClose = () => {
    setFormData({})
    handleClose()
  }
  return (
    <Dialog open={isOpen} onClose={internalClose}>
      <DialogTitle>Create new user</DialogTitle>
      <DialogContent sx={{ width: '500px' }}>
        <DialogContentText>Enter your information here.</DialogContentText>
        <FormControl sx={{ paddingBottom: '10px' }} fullWidth>
          <TextField
            margin="dense"
            label="Email Address"
            type="email"
            value={formData.email}
            fullWidth
            variant="standard"
            error={!!validateForm.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          />
        </FormControl>
        <FormControl sx={{ paddingBottom: '10px' }} fullWidth>
          <TextField
            margin="dense"
            label="User name"
            value={formData.name}
            type="text"
            fullWidth
            variant="standard"
            error={!!validateForm.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
        </FormControl>
        <MDBox sx={{ paddingBottom: '10px' }}>
          <FormControl
            fullWidth
            variant="standard"
            sx={{ mt: 1, mb: 1, pt: 1, pb: 1, minWidth: 120 }}
            error={!!validateForm.role}
          >
            <InputLabel id="select_role_label">User role</InputLabel>
            <Select
              labelId="select_role_label"
              value={formData.role}
              label="Age"
              autoWidth
              onChange={(e) => setFormData({ ...formData, role: e.target.value })}
            >
              {Object.keys(ROLE_USER).map((key) => (
                <MenuItem key={key} value={key}>
                  {ROLE_USER[key]}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </MDBox>
        <FormControl sx={{ paddingBottom: '10px' }} fullWidth>
          <TextField
            margin="dense"
            label="Password"
            value={formData.password}
            type="password"
            fullWidth
            variant="standard"
            error={!!validateForm.password}
            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
          />
        </FormControl>
      </DialogContent>
      <DialogActions>
        <MDButton onClick={internalClose}>Cancel</MDButton>
        <MDButton onClick={internalSubmit}>Create</MDButton>
      </DialogActions>
    </Dialog>
  )
}

function UserManagement() {
  const [controllerAuth, dispatchAuth] = useAuthContextController()
  const { isAuth, meData } = controllerAuth
  const [dataRows, setDataRows] = useState(DATA_DEMO)

  const [openDialog, setOpenDialog] = useState(false)
  const [paginator, setPaginator] = useState({ total: 10, current: 1 })
  const [activeItem, setActiveItem] = useState(null)

  const [dataFilter, setDataFilter] = useState({
    searchText: '',
  })

  const handleCloseDialog = () => {
    setOpenDialog(false)
    setActiveItem(null)
  }
  const handleSubmitDialog = (data) => {
    console.log('data submit: ', data)
    handleCloseDialog()
  }
  const handleOpenDialog = () => {
    setOpenDialog(true)
  }

  const submitSearch = () => {
    console.log('dataFilter: ', dataFilter)
  }

  const handleChangePage = (e, val) => {
    console.log('call api: ', val)
    setPaginator({ ...paginator, current: val })
  }

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox pt={2} pb={2}>
        <Grid container spacing={6}>
          <Grid
            item
            xs={12}
            sx={{ width: '100%', display: 'flex', justifyContent: 'space-between' }}
          >
            <Box sx={{ display: 'flex' }}>
              <MDBox pr={1} sx={{ width: '300px' }}>
                <TextField
                  sx={{ width: '100%' }}
                  label="Search here"
                  autoComplete="off"
                  value={dataFilter.searchText}
                  onChange={(e) => setDataFilter({ ...dataFilter, searchText: e.target.value })}
                />
              </MDBox>
              <MDButton variant="outlined" color="primary" onClick={submitSearch}>
                Seach
              </MDButton>
            </Box>
            <MDButton variant="outlined" color="primary" onClick={handleOpenDialog}>
              Add new user
            </MDButton>
          </Grid>
          <Grid item xs={12}>
            <Card>
              <MDBox
                mx={2}
                mt={-3}
                py={3}
                px={2}
                variant="gradient"
                bgColor="info"
                borderRadius="lg"
                coloredShadow="info"
              >
                <MDTypography variant="h6" color="white">
                  Users Table
                </MDTypography>
              </MDBox>
              <MDBox pt={3}>
                <CustomDataTable
                  dataRows={dataRows}
                  handleOpenDialog={handleOpenDialog}
                  setActiveItem={setActiveItem}
                />
              </MDBox>
            </Card>
          </Grid>
        </Grid>
      </MDBox>
      <Pagination count={6} page={1} onChange={handleChangePage} />
      {(activeItem || openDialog) && (
        <DialogCreateUser
          isOpen={openDialog}
          activeItem={activeItem}
          handleClose={handleCloseDialog}
          handleSubmit={handleSubmitDialog}
        />
      )}
    </DashboardLayout>
  )
}

export default UserManagement
