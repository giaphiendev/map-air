import DashboardLayout from 'examples/LayoutContainers/DashboardLayout'
import DashboardNavbar from 'examples/Navbars/DashboardNavbar'
import { useEffect, useState } from 'react'

import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogTitle'
import FormControl from '@mui/material/FormControl'
import Grid from '@mui/material/Grid'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import Pagination from '@mui/material/Pagination'
import Table from '@mui/material/Table'
import TableContainer from '@mui/material/TableContainer'
import TableRow from '@mui/material/TableRow'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import FileUpload from 'react-material-file-upload'

import Icon from '@mui/material/Icon'
import InputLabel from '@mui/material/InputLabel'
import OutlinedInput from '@mui/material/OutlinedInput'
import Select from '@mui/material/Select'

import TableBody from '@mui/material/TableBody'
import MDBox from 'components/MDBox'
import MDButton from 'components/MDButton'
import MDInput from 'components/MDInput'
import MDTypography from 'components/MDTypography'
import MybodyCell from 'examples/Tables/DataTable/MyBodyCell'
import MyHeadCell from 'examples/Tables/DataTable/MyHeadCell'

const PERMISSION = {
  1: 'ABC',
  2: 'XYZ',
  3: 'VIC',
}

const TYPE_FILE = {
  1: 'Excel',
  2: 'Shapefile',
}

const dataDemo = () => {
  let arr = new Array(20)
  let rs = new Array()
  for (let i = 1; i < arr.length; i++) {
    rs.push({
      id: i,
      title: `new document ${i}`,
      date: `${i}/12/2022`,
      type: i % 2 == 0 ? 1 : 2,
      url: `http://something${i}.com`,
      permission: [Math.ceil(Math.random() * Object.keys(PERMISSION).length)],
    })
  }
  return rs
}

const DATA_DEMO = dataDemo()

const CustomDataTable = ({ data, handleOpenDialog, setActiveItem }) => {
  const [anchorEl, setAnchorEl] = useState(null)

  const handleClick = (index, event) => {
    setAnchorEl({ [index]: event.currentTarget })
    // setItemAction(index)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const handMenuItem = (type) => {
    handleClose()
    console.log('type: ', type)
  }
  return (
    <TableContainer sx={{ boxShadow: 'none' }}>
      <Table>
        <MDBox component="thead">
          <TableRow>
            <MyHeadCell width="5%" align="left">
              ID
            </MyHeadCell>
            <MyHeadCell align="left">Tiều đề</MyHeadCell>
            <MyHeadCell align="center">Loại</MyHeadCell>
            <MyHeadCell align="center">Thời gian</MyHeadCell>
            <MyHeadCell align="center">URL</MyHeadCell>
            <MyHeadCell align="center">Hành động</MyHeadCell>
          </TableRow>
        </MDBox>
        <TableBody>
          {data.map((item, id) => (
            <TableRow key={id}>
              <MybodyCell align="left" width="5%">
                {item.id}
              </MybodyCell>
              <MybodyCell align="left">{item.title}</MybodyCell>
              <MybodyCell align="center">{TYPE_FILE[item.type]}</MybodyCell>
              <MybodyCell align="center">{item.date}</MybodyCell>
              <MybodyCell align="center">{item.url}</MybodyCell>
              <MybodyCell align="center">
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
                  <MenuItem
                    onClick={() => {
                      handleClose()
                      handleOpenDialog()
                      setActiveItem(item)
                    }}
                  >
                    Edit
                  </MenuItem>
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

const ControlFilter = ({ dataFilter, setDataFilter, handleOpenDialog, submitSearch }) => {
  return (
    <MDBox pt={2} pb={2}>
      <Grid container spacing={6}>
        <Grid item xs={12} sx={{ width: '100%', display: 'flex', justifyContent: 'space-between' }}>
          <Box sx={{ display: 'flex' }}>
            <MDBox pr={1} sx={{ width: '300px' }}>
              <MDInput
                sx={{ width: '100%' }}
                label="Nhập tìm kiếm...."
                value={dataFilter.keySearch}
                onChange={(e) => setDataFilter({ ...dataFilter, keySearch: e.target.value })}
              />
            </MDBox>

            <Box sx={{ width: '150px', mx: 1 }}>
              <FormControl fullWidth>
                <TextField
                  select
                  label="Sắp xếp theo thời gian"
                  onChange={(e) => setDataFilter({ ...dataFilter, sortByDate: e.target.value })}
                  value={dataFilter.sortByDate}
                  className="custom-text-select"
                >
                  <MenuItem value={1}>Giảm dần</MenuItem>
                  <MenuItem value={2}>Tăng dần</MenuItem>
                </TextField>
              </FormControl>
            </Box>
            <Box sx={{ width: '100px', mx: 1 }}>
              <FormControl fullWidth>
                <TextField
                  select
                  label="Giới hạn"
                  onChange={(e) => setDataFilter({ ...dataFilter, limitBlog: e.target.value })}
                  value={dataFilter.limitBlog}
                  className="custom-text-select"
                >
                  <MenuItem value={3}>3</MenuItem>
                  <MenuItem value={6}>6</MenuItem>
                  <MenuItem value={9}>9</MenuItem>
                </TextField>
              </FormControl>
            </Box>
            <MDButton variant="outlined" color="primary" onClick={submitSearch}>
              Tìm kiếm
            </MDButton>
          </Box>
          <MDButton variant="outlined" color="primary" onClick={handleOpenDialog}>
            Add new
          </MDButton>
        </Grid>
      </Grid>
    </MDBox>
  )
}

const DialogUpdateBlog = ({ activeItem, isOpen, handleClose, handleSubmit }) => {
  const [files, setFiles] = useState([])
  const [formData, setFormData] = useState({ title: '', permission: [] })

  useEffect(() => {
    if (activeItem) {
      let rawPermission = activeItem?.permission || []
      let mapPermiss = rawPermission.map((item) => item.toString())
      setFormData({ ...activeItem, permission: Array.from(new Set(mapPermiss)) })
    }
  }, [activeItem])

  const internalSubmit = () => {
    // validate
    handleSubmit({ ...formData, file: files })
    setFormData({ title: '', permission: [] })
  }

  const internalClose = () => {
    setFormData({ title: '', permission: [] })
    handleClose()
  }

  return (
    <Dialog
      open={isOpen}
      maxWidth="md"
      fullWidth
      onClose={internalClose}
      scroll="paper"
      aria-labelledby="scroll-dialog-title"
      aria-describedby="scroll-dialog-description"
    >
      <DialogTitle>{formData?.id ? 'Update Report' : 'New Report'}</DialogTitle>
      <DialogContent dividers>
        <MDBox sx={{ width: '100%', mt: 2 }}>
          <TextField
            fullWidth
            label="Title"
            variant="outlined"
            value={formData?.title}
            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
          />
        </MDBox>
        <MDBox sx={{ width: '100%', mt: 2 }}>
          <FormControl fullWidth>
            <InputLabel>Select Permission</InputLabel>
            <Select
              sx={{ py: '12px' }}
              multiple
              value={formData?.permission}
              onChange={(e) => setFormData({ ...formData, permission: e.target.value })}
              input={<OutlinedInput label="Select Permission" />}
            >
              {Object.keys(PERMISSION).map((key) => (
                <MenuItem key={key} value={key}>
                  {PERMISSION[key]}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </MDBox>
        <MDBox sx={{ mt: 2 }}>
          <Typography gutterBottom variant="title2" component="div">
            File map data class (excel, shapefile,...)
          </Typography>
          <FileUpload
            title="Drag or drop some files here"
            multiple={false}
            // accept={['img', 'png', 'image', 'pdf']}
            value={files}
            onChange={setFiles}
            buttonProps={{ variant: 'contained', sx: { color: '#fff' } }}
            buttonText="Upload File"
            maxFiles={1}
          />
        </MDBox>
      </DialogContent>
      <DialogActions>
        <Button color="secondary" onClick={internalClose}>
          Cancel
        </Button>
        <Button onClick={internalSubmit}>Submit</Button>
      </DialogActions>
    </Dialog>
  )
}

const MapDataClass = () => {
  const [data, setData] = useState(DATA_DEMO)
  const [paginator, setPaginator] = useState({ total: 10, current: 1 })

  const [openDialog, setOpenDialog] = useState(false)
  const [activeItem, setActiveItem] = useState(null)
  const [dataFilter, setDataFilter] = useState({ keySearch: '', sortByDate: 1, limitBlog: 6 })

  useEffect(() => {
    let cloneArr = [...DATA_DEMO]
    if (dataFilter.sortByDate === 1) {
      cloneArr = [...DATA_DEMO].reverse()
    }
    const newData = cloneArr.slice(0, dataFilter.limitBlog)
    setData(newData)
  }, [])

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
    let cloneArr = [...DATA_DEMO]
    if (dataFilter.sortByDate === 1) {
      cloneArr = [...DATA_DEMO].reverse()
    }
    const newData = cloneArr.slice(0, dataFilter.limitBlog)
    setData(newData)
  }

  const handleChangePage = (e, val) => {
    console.log('call api: ', val)
    setPaginator({ ...paginator, current: val })
  }
  return (
    <DashboardLayout>
      <DashboardNavbar />

      <ControlFilter
        dataFilter={dataFilter}
        setDataFilter={setDataFilter}
        handleOpenDialog={handleOpenDialog}
        submitSearch={submitSearch}
      />

      <MDBox pt={4}>
        <Grid container>
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
                  Lớp dữ liệu bản đồ
                </MDTypography>
              </MDBox>
              <MDBox pt={3}>
                <CustomDataTable
                  data={data}
                  handleOpenDialog={handleOpenDialog}
                  setActiveItem={setActiveItem}
                />
              </MDBox>
            </Card>
          </Grid>
        </Grid>
      </MDBox>

      <Pagination
        sx={{ mt: 2 }}
        count={paginator.total}
        page={paginator.current}
        onChange={handleChangePage}
      />
      <DialogUpdateBlog
        activeItem={activeItem}
        setActiveItem={setActiveItem}
        isOpen={openDialog}
        handleClose={handleCloseDialog}
        handleSubmit={handleSubmitDialog}
      />
    </DashboardLayout>
  )
}
export default MapDataClass
