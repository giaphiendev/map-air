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
import api from '../../api'
import { Button, Typography } from '@mui/material'
import FileUpload from 'react-material-file-upload'

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

function CustomDataTable({
  dataRows,
  handleOpenDialog,
  setActiveItem,
  fetchData,
}) {
  const [anchorEl, setAnchorEl] = useState(null)

  const onDeleteItem = async (item) => {
    console.log(item)
    const rescreateUser = await api.xoaBaoCao(item.idbaocao)
    fetchData()
  }

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
            <MyHeadCell align={'left'}>Tên báo cáo</MyHeadCell>
            <MyHeadCell align={'center'}>URI báo cáo</MyHeadCell>
            <MyHeadCell align={'center'}>Ngày báo cáo</MyHeadCell>
            <MyHeadCell align={'center'}>Người báo cáo</MyHeadCell>
            <MyHeadCell align="center">Hành động</MyHeadCell>
          </TableRow>
        </MDBox>
        <TableBody>
          {dataRows.map((item, idx) => (
            <TableRow key={idx}>
              <MybodyCell width={'10%'} align={'left'}>
                {item.tenbaocao}
              </MybodyCell>

              <MybodyCell align={'left'}>
                <a
                  href={`http://103.130.212.145:42521/api/public/${item.uribaocao}`}
                  target="_blank"
                >
                  {item.uribaocao}
                </a>
              </MybodyCell>

              <MybodyCell align={'center'}>
                <MDTypography
                  component="a"
                  href="#"
                  variant="button"
                  color="text"
                  fontWeight="medium"
                >
                  {item.ngaytaobaocao}
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
                  {item.firstname} {item.lastname}
                </MDTypography>
              </MybodyCell>

              <MybodyCell align={'center'}>
                <MDTypography
                  color="text"
                  onClick={(e) => handleClick(item.idbaocao, e)}
                >
                  <Icon>more_vert</Icon>
                </MDTypography>
                <Menu
                  anchorEl={anchorEl && anchorEl[item.idbaocao]}
                  keepMounted
                  open={Boolean(anchorEl && anchorEl[item.idbaocao])}
                  onClose={handleClose}
                  anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
                  transformOrigin={{ vertical: 'top', horizontal: 'center' }}
                >
                  <MenuItem onClick={() => handMenuItem('EDIT', item)}>
                    Sửa
                  </MenuItem>
                  <MenuItem onClick={() => onDeleteItem(item)}>Xoá</MenuItem>
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

function DialogCreateUser({
  activeItem,
  isOpen,
  handleClose,
  handleSubmit,
  files,
  setFiles,
}) {
  const [formData, setFormData] = useState({
    tenbaocao: '',
    uribaocao: '',
    ngaytaobaocao: '',
  })
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
    // if (!handleSubmitForm()) return
    handleSubmit({ ...formData })
    setFormData({})
  }

  const internalClose = () => {
    setFormData({})
    handleClose()
  }
  return (
    <Dialog open={isOpen} onClose={internalClose}>
      <DialogTitle>
        {formData?.idbaocao ? 'Cập nhật thông tin' : 'Thêm mới thông tin'}
      </DialogTitle>
      <DialogContent sx={{ width: '500px' }}>
        <DialogContentText>Nhập thông tin của bạn ở đây.</DialogContentText>
        <FormControl sx={{ paddingBottom: '10px' }} fullWidth>
          <TextField
            margin="dense"
            label="Tên báo cáo"
            type="text"
            value={formData.tenbaocao}
            fullWidth
            variant="standard"
            error={!!validateForm.tenbaocao}
            onChange={(e) =>
              setFormData({ ...formData, tenbaocao: e.target.value })
            }
          />
        </FormControl>
        <FormControl sx={{ paddingBottom: '10px' }} fullWidth>
          <TextField
            margin="dense"
            label=""
            value={formData.ngaytaobaocao}
            type="date"
            fullWidth
            variant="standard"
            error={!!validateForm.ngaytaobaocao}
            onChange={(e) =>
              setFormData({ ...formData, ngaytaobaocao: e.target.value })
            }
          />
        </FormControl>
        <MDBox sx={{ mt: 2 }}>
          <Typography gutterBottom variant="title2" component="div">
            File báo cáo pdf
          </Typography>
          <FileUpload
            title="Kéo hoặc thả tệp vào đây"
            multiple={false}
            // accept={['img', 'png', 'image', 'pdf']}
            value={files}
            onChange={setFiles}
            buttonProps={{ variant: 'contained', sx: { color: '#fff' } }}
            buttonText="Tải tệp lên"
            maxFiles={1}
          />
        </MDBox>
        {/* <MDBox sx={{ paddingBottom: '10px' }}>
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
              label="Tuổi"
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
        </MDBox> */}
      </DialogContent>
      <DialogActions>
        <MDButton onClick={internalClose}>Huỷ</MDButton>
        <MDButton onClick={internalSubmit}>Thêm mới</MDButton>
      </DialogActions>
    </Dialog>
  )
}

function ReportManagement() {
  const [controllerAuth, dispatchAuth] = useAuthContextController()
  const { isAuth, meData } = controllerAuth
  const [dataRows, setDataRows] = useState(DATA_DEMO)

  const [openDialog, setOpenDialog] = useState(false)
  const [paginator, setPaginator] = useState({ total: 10, current: 1 })
  const [activeItem, setActiveItem] = useState(null)

  const [dataFilter, setDataFilter] = useState({
    searchText: '',
  })
  const [dsNguoiDung, setDsNguoiDung] = useState([])
  const [limit, setLimit] = useState(12)
  const [page, setPage] = useState(1)
  const [tong, setTong] = useState(1)
  const [t, setT] = useState([])
  const [files, setFiles] = useState([])

  const fetchData = async () => {
    const resgetAllUser = await api.getBaoCao(
      `limit=${limit}&page=${page}&search=${dataFilter.searchText}`
    )
    if (resgetAllUser.success) {
      setDsNguoiDung(resgetAllUser.data.baocaos)
      setTong(resgetAllUser.data.totalItems)
      let to = []
      for (
        let index = 1;
        index <= resgetAllUser.data.totalItems / 12 + 1;
        index++
      ) {
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
    const formData = new FormData()
    formData.append('tenbaocao', data.tenbaocao)
    formData.append('ngaytaobaocao', data.ngaytaobaocao)
    formData.append('baocao', files[0])

    const rescreateUser = await api.createBaoCao(formData)
    handleCloseDialog()
    fetchData()
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
    // setPaginator({ ...paginator, current: val });
    if (val <= tong / 12 + 1) {
      setPage(val)
    }
  }

  return (
    <DashboardLayout>
      <DashboardNavbar />
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
              <MDBox pr={1} sx={{ width: '300px' }}>
                <TextField
                  sx={{ width: '100%' }}
                  label="Nhập tìm kiếm"
                  autoComplete="off"
                  value={dataFilter.searchText}
                  onChange={(e) =>
                    setDataFilter({ ...dataFilter, searchText: e.target.value })
                  }
                />
              </MDBox>
              <MDButton
                variant="outlined"
                color="primary"
                onClick={submitSearch}
              >
                Tìm kiếm
              </MDButton>
            </Box>
            <MDButton
              variant="outlined"
              color="primary"
              onClick={handleOpenDialog}
            >
              Thêm báo cáo
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
                  Danh sách báo cáo
                </MDTypography>
              </MDBox>
              <MDBox pt={3}>
                <CustomDataTable
                  dataRows={dsNguoiDung}
                  handleOpenDialog={handleOpenDialog}
                  setActiveItem={setActiveItem}
                  fetchData={fetchData}
                />
              </MDBox>
            </Card>
          </Grid>
        </Grid>
      </MDBox>
      <Pagination
        count={tong / 12 + 1}
        page={page}
        onChange={handleChangePage}
      />
      {(activeItem || openDialog) && (
        <DialogCreateUser
          isOpen={openDialog}
          activeItem={activeItem}
          handleClose={handleCloseDialog}
          handleSubmit={handleSubmitDialog}
          setFiles={setFiles}
          files={files}
        />
      )}
    </DashboardLayout>
  )
}

export default ReportManagement
