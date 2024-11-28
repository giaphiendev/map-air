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

import MDBox from 'components/MDBox'
import MDButton from 'components/MDButton'
import MDInput from 'components/MDInput'
import MDTypography from 'components/MDTypography'
import MybodyCell from 'examples/Tables/DataTable/MyBodyCell'
import MyHeadCell from 'examples/Tables/DataTable/MyHeadCell'

import TableBody from '@mui/material/TableBody'
import api from '../../api'

const dataDemo = () => {
  let arr = new Array(20)
  let rs = new Array()
  for (let i = 0; i < arr.length; i++) {
    rs.push({
      id: i + 1,
      url: `http://something${i}.com`,
      title: `new document ${i + 1}`,
      date: `${i + 1}/12/2022`,
    })
  }
  return rs
}

const DATA_DEMO = [
  {
    id: '35',
    ten: 'Bản đồ lượng mưa trung bình nửa đầu tháng 6/2022 tỉnh Ninh Thuận tỉ lệ 1: 50.000',
    uri: 'luong_mua_tb/01_15_06.jpg',
  },
  {
    id: '34',
    ten: 'Bản đồ hướng gió trung bình nửa cuối tháng 4/2023 tỉnh Ninh Thuận tỉ lệ 1: 50.000',
    uri: 'HUONG_GIO_TB_16_30_04_2023.png',
  },
  {
    id: '33',
    ten: 'Bản đồ hướng gió trung bình nửa đầu tháng 4/2023 tỉnh Ninh Thuận tỉ lệ 1: 50.000',
    uri: 'HUONG_GIO_TB_01_15_04_2023.png',
  },
  {
    id: '32',
    ten: 'Bản đồ hướng gió trung bình nửa cuối tháng 3/2023 tỉnh Ninh Thuận tỉ lệ 1: 50.000',
    uri: 'HUONG_GIO_TB_16_30_03_2023.png',
  },
  {
    id: '31',
    ten: 'Bản đồ hướng gió trung bình nửa đầu tháng 3/2023 tỉnh Ninh Thuận tỉ lệ 1: 50.000',
    uri: 'HUONG_GIO_TB_01_15_03_2023.png',
  },
  {
    id: '30',
    ten: 'Bản đồ hướng gió trung bình nửa cuối tháng 2/2023 tỉnh Ninh Thuận tỉ lệ 1: 50.000',
    uri: 'HUONG_GIO_TB_16_28_02_2023.png',
  },
  {
    id: '29',
    ten: 'Bản đồ hướng gió trung bình nửa đầu tháng 2/2023 tỉnh Ninh Thuận tỉ lệ 1: 50.000',
    uri: 'HUONG_GIO_TB_01_15_02_2023.png',
  },
  {
    id: '28',
    ten: 'Bản đồ hướng gió trung bình nửa cuối tháng 1/2023 tỉnh Ninh Thuận tỉ lệ 1: 50.000',
    uri: 'HUONG_GIO_TB_16_30_01_2023.png',
  },
  {
    id: '27',
    ten: 'Bản đồ hướng gió trung bình nửa đầu tháng 1/2023 tỉnh Ninh Thuận tỉ lệ 1: 50.000',
    uri: 'HUONG_GIO_TB_01_15_01_2023.png',
  },
  {
    id: '26',
    ten: 'Bản đồ hướng gió trung bình nửa cuối tháng 12/2022 tỉnh Ninh Thuận tỉ lệ 1: 50.000',
    uri: 'HUONG_GIO_TB_16_30_12_2022.png',
  },
]

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
            <MyHeadCell align="left">Tiêu đề</MyHeadCell>
            {/* <MyHeadCell align="center">Thời gian</MyHeadCell> */}
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
              <MybodyCell align="left">{item.ten}</MybodyCell>
              {/* <MybodyCell align="center">{item.date}</MybodyCell> */}
              <MybodyCell align="center">
                <img
                  src={`http://103.130.212.145:42521/api/public/${item.uri}`}
                  alt="image"
                  className="p-3"
                  style={{
                    maxWidth: 100,
                  }}
                />
              </MybodyCell>
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
                    Sửa
                  </MenuItem>
                  <MenuItem onClick={() => handMenuItem('DELETE')}>Xoá</MenuItem>
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
            <MDButton variant="outlined" color="primary" onClick={submitSearch}>
              Tìm kiếm
            </MDButton>
          </Box>
          <MDButton variant="outlined" color="primary" onClick={handleOpenDialog}>
            Thêm mới
          </MDButton>
        </Grid>
      </Grid>
    </MDBox>
  )
}

const DialogUpdateBlog = ({ activeItem, isOpen, handleClose, handleSubmit }) => {
  const [files, setFiles] = useState([])
  const [formData, setFormData] = useState({ title: '' })

  useEffect(() => {
    if (activeItem) {
      setFormData({ ...activeItem })
    }
  }, [activeItem])

  const internalSubmit = () => {
    // validate
    handleSubmit({ ...formData, file: files })
    setFormData({ title: '' })
  }

  const internalClose = () => {
    setFormData({ title: '' })
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
      <DialogTitle>{formData?.id ? 'Cập nhật' : 'Thêm mới'}</DialogTitle>
      <DialogContent dividers>
        <MDBox sx={{ width: '100%', mt: 2 }}>
          <TextField
            fullWidth
            label="Tên bản đồ"
            variant="outlined"
            value={formData?.title}
            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
          />
        </MDBox>
        <MDBox sx={{ mt: 2 }}>
          <Typography gutterBottom variant="title2" component="div">
            File bản đồ chuyên đề
          </Typography>
          <FileUpload
            title="Kéo hoặc thả một số tệp vào đây"
            multiple={false}
            // accept={['img', 'png', 'image', 'pdf']}
            value={files}
            onChange={setFiles}
            buttonProps={{ variant: 'contained', sx: { color: '#fff' } }}
            buttonText="Tải têp lên"
            maxFiles={1}
          />
        </MDBox>
      </DialogContent>
      <DialogActions>
        <Button color="secondary" onClick={internalClose}>
          Huỷ
        </Button>
        <Button onClick={internalSubmit}>Thêm</Button>
      </DialogActions>
    </Dialog>
  )
}

const PDFMap = () => {
  const [data, setData] = useState(DATA_DEMO)
  const [paginator, setPaginator] = useState({ total: 10, current: 1 })

  const [openDialog, setOpenDialog] = useState(false)
  const [activeItem, setActiveItem] = useState(null)
  const [dataFilter, setDataFilter] = useState({ keySearch: '' })

  const [dsBanDo, setDsBanDo] = useState([])
  const [limit, setLimit] = useState(12)
  const [page, setPage] = useState(1)
  const [tong, setTong] = useState(1)
  const [t, setT] = useState([])

  const fetchData = async () => {
    const resgetDanhSachBanDoChuyenDe = await api.getDanhSachBanDoChuyenDe(
      `limit=${limit}&page=${page}&search=${dataFilter.keySearch}`
    )
    if (resgetDanhSachBanDoChuyenDe.success) {
      setDsBanDo(resgetDanhSachBanDoChuyenDe.data.bandochuyendes)
      setTong(resgetDanhSachBanDoChuyenDe.data.totalItems)
      let to = []
      for (let index = 1; index <= resgetDanhSachBanDoChuyenDe.data.totalItems / 12 + 1; index++) {
        to.push(index)
      }
      setT(to)
    }
  }

  useEffect(() => {
    fetchData()
  }, [page])

  const handleCloseDialog = () => {
    setOpenDialog(false)
    setActiveItem(null)
  }
  const handleSubmitDialog = async (data) => {
    console.log('data submit: ', data)
    var formData = new FormData()
    formData.append('img', data.file[0], data.file[0].name)
    const resupanhbandochuyende = await api.upanhbandochuyende(formData)
    if (resupanhbandochuyende.success) {
      var body = {
        ten: data.title,
        filename: resupanhbandochuyende.res,
      }
      const rescreatebandochuyende = await api.createbandochuyende(body)
      fetchData()
    }
    handleCloseDialog()
  }
  const handleOpenDialog = () => {
    setOpenDialog(true)
  }

  const submitSearch = () => {
    console.log('dataFilter: ', dataFilter)
    fetchData()
  }

  const handleChangePage = (e, val) => {
    console.log('call api: ', val)
    if (val <= tong / 12 + 1) {
      setPage(val)
    }
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
                  Quản lí Bản đồ chuyên đề
                </MDTypography>
              </MDBox>
              <MDBox pt={3}>
                <CustomDataTable
                  data={dsBanDo}
                  handleOpenDialog={handleOpenDialog}
                  setActiveItem={setActiveItem}
                />
              </MDBox>
            </Card>
          </Grid>
        </Grid>
      </MDBox>

      <Pagination sx={{ mt: 2 }} count={tong / 12 + 1} page={page} onChange={handleChangePage} />
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
export default PDFMap
