// @mui material components
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'

// React components
import MDBox from 'components/MDBox'
import MDTypography from 'components/MDTypography'

// React example components
import Footer from 'examples/Footer'
import DashboardLayout from 'examples/LayoutContainers/DashboardLayout'
import DashboardNavbar from 'examples/Navbars/DashboardNavbar'
import DataTable from 'examples/Tables/DataTable'

// Data
import projectsTableData from 'layouts/tables/data/projectsTableData'

function UserManagement() {
  const { columns, rows } = projectsTableData()

  // const [anchorEl, setAnchorEl] = (React.useState < null) | (HTMLElement > null)
  // const open = Boolean(anchorEl)
  // const handleClick = (event) => {
  //   setAnchorEl(event.currentTarget)
  // }
  // const handleClose = () => {
  //   setAnchorEl(null)
  // }

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox pt={6} pb={3}>
        <Grid container spacing={6}>
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
                <DataTable
                  table={{ columns, rows }}
                  isSorted={false}
                  entriesPerPage={false}
                  showTotalEntries={false}
                  noEndBorder
                />
              </MDBox>
            </Card>
          </Grid>
        </Grid>
      </MDBox>
      {/* <Footer /> */}
    </DashboardLayout>
  )
}

export default UserManagement
