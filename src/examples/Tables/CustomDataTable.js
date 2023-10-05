import { useState } from 'react'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableContainer from '@mui/material/TableContainer'
import TableRow from '@mui/material/TableRow'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'

// React components
import MDBox from 'components/MDBox'
import MDTypography from 'components/MDTypography'
import MDAvatar from 'components/MDAvatar'
import Icon from '@mui/material/Icon'

// React example components
import MybodyCell from 'examples/Tables/DataTable/MyBodyCell'
import MyHeadCell from 'examples/Tables/DataTable/MyHeadCell'

function RenderHeader({ cols }) {
  return (
    <TableRow>
      {cols.map((val, idx) => {
        if (val.key == 'id') {
          return (
            <MyHeadCell key={idx} width={'10%'} align={'left'}>
              {val.label}
            </MyHeadCell>
          )
        } else if (val.key == 'img') {
          return (
            <MyHeadCell key={idx} align={'left'}>
              {val.label}
            </MyHeadCell>
          )
        } else if (val.key == 'email') {
          return (
            <MyHeadCell key={idx} align={'center'}>
              {val.label}
            </MyHeadCell>
          )
        } else if (val.key == 'name') {
          return (
            <MyHeadCell key={idx} align={'center'}>
              {val.label}
            </MyHeadCell>
          )
        } else if (val.key == 'role') {
          return (
            <MyHeadCell key={idx} align={'center'}>
              {val.label}
            </MyHeadCell>
          )
        } else if (val.key == 'action') {
          return (
            <MyHeadCell key={idx} align={'center'}>
              {val.label}
            </MyHeadCell>
          )
        }
      })}
    </TableRow>
  )
}

const Project = ({ image }) => (
  <MDBox display="flex" alignItems="center" lineHeight={1}>
    <MDAvatar src={image} size="sm" variant="rounded" />
  </MDBox>
)

function CustomDataTable({ rows, cols }) {
  const [anchorEl, setAnchorEl] = useState(null)
  const [itemActive, setItemAction] = useState(null)

  const handleClick = (index, event) => {
    setAnchorEl({ [index]: event.currentTarget })
    setItemAction(index)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const handMenuItem = (type) => {
    handleClose()
  }
  return (
    <TableContainer sx={{ boxShadow: 'none' }}>
      <Table>
        <MDBox component="thead">
          <RenderHeader cols={cols} />
        </MDBox>
        <TableBody>
          {rows.map((val, idx) => (
            <TableRow key={idx}>
              {val.map((item, id) => {
                if (item.key == 'id') {
                  return (
                    <MybodyCell key={id} width={'10%'} align={'left'}>
                      {item.value}
                    </MybodyCell>
                  )
                } else if (item.key == 'img') {
                  return (
                    <MybodyCell key={id} align={'left'}>
                      <Project image={item.value} />
                    </MybodyCell>
                  )
                } else if (item.key == 'email') {
                  return (
                    <MybodyCell key={id} align={'center'}>
                      <MDTypography
                        component="a"
                        href="#"
                        variant="button"
                        color="text"
                        fontWeight="medium"
                      >
                        {item.value}
                      </MDTypography>
                    </MybodyCell>
                  )
                } else if (item.key == 'name') {
                  return (
                    <MybodyCell key={id} align={'center'}>
                      <MDTypography
                        component="a"
                        href="#"
                        variant="button"
                        color="text"
                        fontWeight="medium"
                      >
                        {item.value}
                      </MDTypography>
                    </MybodyCell>
                  )
                } else if (item.key == 'role') {
                  return (
                    <MybodyCell key={id} align={'center'}>
                      <MDTypography
                        component="a"
                        href="#"
                        variant="button"
                        color="text"
                        fontWeight="medium"
                      >
                        {item.value}
                      </MDTypography>
                    </MybodyCell>
                  )
                } else if (item.key == 'action') {
                  return (
                    <MybodyCell key={id} align={'center'}>
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
                        <MenuItem onClick={() => handMenuItem('EDIT')}>Edit</MenuItem>
                        <MenuItem onClick={() => handMenuItem('DELETE')}>Delete</MenuItem>
                        <MenuItem onClick={() => handMenuItem('BLOCK')}>Block</MenuItem>
                        <MenuItem onClick={() => handMenuItem('RESET_PASSWORD')}>
                          Reset password
                        </MenuItem>
                      </Menu>
                    </MybodyCell>
                  )
                }
              })}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default CustomDataTable
