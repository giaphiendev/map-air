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

// Data
import projectsTableData from 'layouts/tables/data/projectsTableData'

function UserManagement() {
  const [openDialog, setOpenDialog] = useState(false)
  const [searchText, setSearchText] = useState('user1@themenate.net')
  const { my_columns, my_rows } = projectsTableData()

  const handleSearch = () => {
    console.log('call api search text: ', searchText)
  }

  const handleClickOpen = () => {
    setOpenDialog(true)
  }

  const handleClose = () => {
    setOpenDialog(false)
  }

  const handleChangeText = (e) => {
    setSearchText(e.target.value)
  }

  const handleChangePage = (e, val) => {
    console.log('call api: ', val)
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

      <Dialog open={openDialog} onClose={handleClose}>
        <DialogTitle>Subscribe</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To subscribe to this website, please enter your email address here. We will send updates
            occasionally.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Email Address"
            type="email"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <MDButton onClick={handleClose}>Cancel</MDButton>
          <MDButton onClick={handleClose}>Subscribe</MDButton>
        </DialogActions>
      </Dialog>
    </DashboardLayout>
  )
}

export default UserManagement
