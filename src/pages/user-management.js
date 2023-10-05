import { useState } from 'react'
// @mui material components
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import Pagination from '@mui/material/Pagination'

// React components
import MDBox from 'components/MDBox'
import MDInput from 'components/MDInput'
import MDTypography from 'components/MDTypography'
import MDButton from 'components/MDButton'
import TextField from '@mui/material/TextField'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'

// React example components
import DashboardLayout from 'examples/LayoutContainers/DashboardLayout'
import DashboardNavbar from 'examples/Navbars/DashboardNavbar'
import CustomDataTable from 'examples/Tables/CustomDataTable'

import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'

// Data
import projectsTableData from 'layouts/tables/data/projectsTableData'

import { validateEmail } from 'utils'

function DialogCreateUser({
  formCreate,
  validateFormCreate,
  openDialog,
  handleCloseDialog,
  handleSubmitForm,
  setFormCreate,
}) {
  const { list_role } = projectsTableData()

  return (
    <Dialog open={openDialog} onClose={handleCloseDialog}>
      <DialogTitle>Create new user</DialogTitle>
      <DialogContent sx={{ width: '500px' }}>
        <DialogContentText>Enter your information here.</DialogContentText>
        <FormControl sx={{ paddingBottom: '10px' }} fullWidth>
          <TextField
            autoFocus
            margin="dense"
            label="Email Address"
            type="email"
            value={formCreate.email}
            fullWidth
            variant="standard"
            error={!!validateFormCreate.email}
            onChange={(e) => setFormCreate({ ...formCreate, email: e.target.value })}
          />
        </FormControl>
        <FormControl sx={{ paddingBottom: '10px' }} fullWidth>
          <TextField
            autoFocus
            margin="dense"
            label="User name"
            value={formCreate.username}
            type="text"
            fullWidth
            variant="standard"
            error={!!validateFormCreate.username}
            onChange={(e) => setFormCreate({ ...formCreate, username: e.target.value })}
          />
        </FormControl>
        <MDBox sx={{ paddingBottom: '10px' }}>
          <FormControl
            fullWidth
            variant="standard"
            sx={{ mt: 1, mb: 1, pt: 1, pb: 1, minWidth: 120 }}
            error={!!validateFormCreate.role}
          >
            <InputLabel id="select_role_label">User role</InputLabel>
            <Select
              labelId="select_role_label"
              value={formCreate.role}
              label="Age"
              autoWidth
              onChange={(e) => setFormCreate({ ...formCreate, role: e.target.value })}
            >
              {list_role.map((item, id) => (
                <MenuItem key={id} value={item.id}>
                  {item.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </MDBox>
        <FormControl sx={{ paddingBottom: '10px' }} fullWidth>
          <TextField
            autoFocus
            margin="dense"
            label="Password"
            value={formCreate.password}
            type="password"
            fullWidth
            variant="standard"
            error={!!validateFormCreate.password}
            onChange={(e) => setFormCreate({ ...formCreate, password: e.target.value })}
          />
        </FormControl>
      </DialogContent>
      <DialogActions>
        <MDButton onClick={handleCloseDialog}>Cancel</MDButton>
        <MDButton onClick={handleSubmitForm}>Create</MDButton>
      </DialogActions>
    </Dialog>
  )
}

function UserManagement() {
  const { my_columns, my_rows } = projectsTableData()

  const [openDialog, setOpenDialog] = useState(false)
  const [formCreate, setFormCreate] = useState({ email: '', username: '', password: '', role: '' })
  const [validateFormCreate, setValidateFormCreate] = useState({})
  const [searchText, setSearchText] = useState('user1@themenate.net')

  const handleSearch = () => {
    console.log('call api search text: ', searchText)
  }

  const handleChangeText = (e) => {
    setSearchText(e.target.value)
  }

  const handleChangePage = (e, val) => {
    console.log('call api: ', val)
  }

  const handleClickOpen = () => {
    setOpenDialog(true)
  }

  const handleCloseDialog = () => {
    setValidateFormCreate({})
    setFormCreate({ email: '', username: '', password: '', role: '' })
    setOpenDialog(false)
  }

  const handleSubmitForm = () => {
    setValidateFormCreate({})
    const temp_error = {}
    if (Object.keys(formCreate).length > 0) {
      Object.keys(formCreate).forEach((key) => {
        let item = formCreate[key]
        console.log('item: ', item)
        if (!item) {
          temp_error[key] = true
        }
        if (key === 'email' && !validateEmail(item)) {
          temp_error[key] = true
        }
      })
    }
    if (Object.keys(temp_error).length > 0) {
      setValidateFormCreate(temp_error)
      return
    }
    console.log('continue formCreate: ', formCreate)
    // call api here
  }

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox pt={6} pb={3}>
        <Grid container spacing={6}>
          <Grid
            item
            xs={12}
            sx={{ width: '100%', display: 'flex', justifyContent: 'space-between' }}
          >
            <Box sx={{ display: 'flex' }}>
              <MDBox pr={1} sx={{ width: '300px' }}>
                <MDInput
                  sx={{ width: '100%' }}
                  label="Search here"
                  value={searchText}
                  onChange={handleChangeText}
                />
              </MDBox>
              <MDButton variant="outlined" color="primary" onClick={handleSearch}>
                Seach
              </MDButton>
            </Box>
            <MDButton variant="outlined" color="primary" onClick={handleClickOpen}>
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
                <CustomDataTable cols={my_columns} rows={my_rows} />
              </MDBox>
            </Card>
          </Grid>
        </Grid>
      </MDBox>
      <Pagination count={10} page={3} onChange={handleChangePage} />
      <DialogCreateUser
        formCreate={formCreate}
        openDialog={openDialog}
        validateFormCreate={validateFormCreate}
        handleCloseDialog={handleCloseDialog}
        handleSubmitForm={handleSubmitForm}
        setFormCreate={setFormCreate}
      />
    </DashboardLayout>
  )
}

export default UserManagement
