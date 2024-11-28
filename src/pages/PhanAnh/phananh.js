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
import IconButton from '@mui/material/IconButton'
import MenuItem from '@mui/material/MenuItem'
import Pagination from '@mui/material/Pagination'
import Table from '@mui/material/Table'
import TableContainer from '@mui/material/TableContainer'
import TableRow from '@mui/material/TableRow'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'

import VisibilityIcon from '@mui/icons-material/Visibility'
import MDBox from 'components/MDBox'
import MDButton from 'components/MDButton'
import MDTypography from 'components/MDTypography'
import MybodyCell from 'examples/Tables/DataTable/MyBodyCell'
import MyHeadCell from 'examples/Tables/DataTable/MyHeadCell'

import TableBody from '@mui/material/TableBody'

import DoneIcon from '@mui/icons-material/Done'
import ThumbDownAltIcon from '@mui/icons-material/ThumbDownAlt'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardHeader from '@mui/material/CardHeader'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import dayjs from 'dayjs'

const STATUS_FEEDBACK = {
  1: 'Đã duyệt',
  2: 'Đang chờ',
  3: 'Từ chối',
}

const dataDemo = () => {
  let arr = new Array(20)
  let rs = new Array()
  for (let i = 1; i <= arr.length; i++) {
    rs.push({
      id: i,
      user: `user ${i}`,
      title: `new document ${i}`,
      status: Math.ceil(Math.random() * 3),
      date: `${i}/12/2022`,
      context: `${i} - Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10 minutes. Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high heat. Add chicken, shrimp and chorizo, and cook, stirring occasionally until lightly browned, 6 to 8 minutes. Transfer shrimp to a large plate and set aside, leaving chicken and chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes, onion, salt and pepper, and cook, stirring often until thickened and fragrant, about 10 mi medium-high heat.broth in a pot until simmering, add saffron and set aside for 10 minutes. Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high heat. Add chicken, shrimp and chorizo, and cook, stirring occasionally until lightly browned, 6 to 8 minutes. Transfer shrimp to a large plate and set aside, leaving chicken and chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes, onion, salt and pepper, and cook, stirring often until thickened and fragrant, about 10 mi medium-high heat.`,
    })
  }
  return rs
}
const DATA_DEMO = dataDemo()

function RecipeReviewCard({ item }) {
  return (
    <Box>
      <CardHeader
        title={item.useridnoiphananh}
        subheader={item.ngaytaophananh}
        action={
          <CardActions disableSpacing>
            <IconButton aria-label="add to favorites">
              <ThumbDownAltIcon />
            </IconButton>
            <IconButton aria-label="share">
              <DoneIcon />
            </IconButton>
          </CardActions>
        }
      />
      <CardContent>
        <Typography variant="h6" color="secondary">
          {item.useridnoiphananh}
        </Typography>
        <Typography variant="subtitle2" color="secondary">
          {item.noidung}
        </Typography>
        <Typography variant="subtitle2" color="secondary">
          {item.ngaytaophananh}
        </Typography>
        <Typography variant="subtitle2" color="secondary">
          {item.trangthai}
        </Typography>
      </CardContent>
    </Box>
  )
}

const CustomDataTable = ({ dataRows, handleOpenDialog, setActiveItem }) => {
  return (
    <TableContainer sx={{ boxShadow: 'none' }}>
      <Table>
        <MDBox component="thead">
          <TableRow>
            <MyHeadCell align="center">Người phản ánh</MyHeadCell>
            <MyHeadCell align="center">Nội dung</MyHeadCell>
            <MyHeadCell align="center">Ngày tạo</MyHeadCell>
            <MyHeadCell align="center">Trạng thái</MyHeadCell>
            <MyHeadCell align="center">Hành động</MyHeadCell>
          </TableRow>
        </MDBox>
        <TableBody>
          {dataRows?.map((item, idx) => (
            <TableRow key={idx}>
              <MybodyCell align="center">{item.useridnoiphananh}</MybodyCell>
              <MybodyCell align="center">{item.noidung}</MybodyCell>
              <MybodyCell align="center">{item.ngaytaophananh}</MybodyCell>
              <MybodyCell align="center">{item.trangthai}</MybodyCell>

              <MybodyCell align={'center'}>
                <MDTypography
                  color="text"
                  onClick={(e) => handleClick(item.id, e)}
                >
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
                  <MenuItem onClick={() => handMenuItem('EDIT', item)}>
                    Sửa
                  </MenuItem>
                  <MenuItem onClick={() => handMenuItem('DELETE')}>
                    Xoá
                  </MenuItem>
                  {/* <MenuItem onClick={() => handMenuItem('BLOCK')}>Chặn</MenuItem>
                  <MenuItem onClick={() => handMenuItem('RESET_PASSWORD')}>Reset password</MenuItem> */}
                </Menu>
              </MybodyCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

const ControlFilter = ({ dataFilter, setDataFilter, submitSearch }) => {
  const handleOutputDate = (e) => {
    const newDate = dayjs(e.$d.toISOString()).format('DD-MM-YYYY')
    setDataFilter({ ...dataFilter, dateFilter: newDate })
  }
  return (
    <MDBox pt={2} pb={2}>
      <Grid container spacing={6}>
        <Grid
          item
          xs={12}
          sx={{
            width: '100%',
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          <Box sx={{ display: 'flex' }}>
            <MDBox>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DesktopDatePicker
                  defaultValue={dataFilter.dateFilter}
                  onChange={handleOutputDate}
                />
              </LocalizationProvider>
            </MDBox>

            <Box sx={{ width: '150px', mx: 1 }}>
              <FormControl fullWidth>
                <TextField
                  select
                  label="Phân loại trạng thái"
                  onChange={(e) =>
                    setDataFilter({
                      ...dataFilter,
                      classifyStatus: e.target.value,
                    })
                  }
                  value={dataFilter.classifyStatus}
                  className="custom-text-select"
                >
                  <MenuItem value={0}>All</MenuItem>
                  {Object.keys(STATUS_FEEDBACK).map((key) => (
                    <MenuItem key={key} value={key}>
                      {STATUS_FEEDBACK[key]}
                    </MenuItem>
                  ))}
                </TextField>
              </FormControl>
            </Box>
            <Box sx={{ width: '150px', mx: 1 }}>
              <FormControl fullWidth>
                <TextField
                  select
                  label="Sắp xếp theo thời gian"
                  onChange={(e) =>
                    setDataFilter({ ...dataFilter, sortByDate: e.target.value })
                  }
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
                  onChange={(e) =>
                    setDataFilter({ ...dataFilter, limitBlog: e.target.value })
                  }
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
        </Grid>
      </Grid>
    </MDBox>
  )
}

const DialogUpdateBlog = ({ activeItem, isOpen, handleClose }) => {
  return (
    <Dialog
      open={isOpen}
      maxWidth="md"
      fullWidth
      onClose={() => handleClose()}
      scroll="paper"
      aria-labelledby="scroll-dialog-title"
      aria-describedby="scroll-dialog-description"
    >
      <DialogTitle>Chi tiết</DialogTitle>
      <DialogContent dividers>
        <RecipeReviewCard item={activeItem} />
      </DialogContent>
      <DialogActions>
        <Button color="secondary" onClick={() => handleClose()}>
          Đóng
        </Button>
      </DialogActions>
    </Dialog>
  )
}

const PhanAnhManagement = () => {
  const [data, setData] = useState(DATA_DEMO)
  const [paginator, setPaginator] = useState({ total: 5, current: 1 })

  const [openDialog, setOpenDialog] = useState(false)
  const [activeItem, setActiveItem] = useState(null)
  const [dataFilter, setDataFilter] = useState({
    dateFilter: dayjs('05-10-2023', 'DD-MM-YYYY'),
    sortByDate: 1,
    limitBlog: 6,
    classifyStatus: 0,
  })

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
                  Phản ánh
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
      {activeItem && (
        <DialogUpdateBlog
          activeItem={activeItem}
          isOpen={openDialog}
          handleClose={handleCloseDialog}
        />
      )}
    </DashboardLayout>
  )
}
export default PhanAnhManagement
