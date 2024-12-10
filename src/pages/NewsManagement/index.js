import DashboardLayout from 'examples/LayoutContainers/DashboardLayout'
import DashboardNavbar from 'examples/Navbars/DashboardNavbar'
import { useEffect, useState } from 'react'
import VisibilityIcon from '@mui/icons-material/Visibility'
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogTitle'
import FormControl from '@mui/material/FormControl'
import Grid from '@mui/material/Grid'
import Link from '@mui/material/Link'
import MenuItem from '@mui/material/MenuItem'
import Pagination from '@mui/material/Pagination'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import FileUpload from 'react-material-file-upload'
import MDBox from 'components/MDBox'
import MDButton from 'components/MDButton'
import MDInput from 'components/MDInput'
import MDTypography from 'components/MDTypography'
import axiosInstance from 'services/axios'
import api from 'api'
import { Modal } from '@mui/material'

function MediaCard({
  item,
  handleOpenDialog,
  setActiveItem,
  fetchData,
  onOpenDialog,
}) {
  const onDeleteItem = async (item) => {
    console.log(item)
    const rescreateUser = await api.xoaTinTuc(item.idtintuc)
    fetchData()
  }

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={item.anhdaidien}
        title={item.title}
      />
      <CardContent>
        <Box>
          <Link href="#">
            <Typography gutterBottom variant="h5" component="div">
              {item.tieude}
            </Typography>
          </Link>
          <MDTypography
            sx={{ fontSize: '13px' }}
            variant="body2"
            color="secondary"
          >
            {item.ngaytaotintuc}
          </MDTypography>
        </Box>
        <Typography
          variant="body2"
          color="secondary"
          sx={{
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            display: '-webkit-box',
            WebkitLineClamp: '3',
            WebkitBoxOrient: 'vertical',
          }}
        >
          {item.tieudecon}
        </Typography>
      </CardContent>
      <CardActions sx={{ justifyContent: 'space-around' }}>
        <Button size="small" onClick={() => onOpenDialog(item)}>
          Xem thêm
        </Button>
        <Button
          size="small"
          onClick={() => {
            handleOpenDialog()
            setActiveItem(item)
          }}
        >
          Sửa
        </Button>
        <Button onClick={() => onDeleteItem(item)} size="small">
          Xoá
        </Button>
      </CardActions>
    </Card>
  )
}

const RenderNews = ({
  list_news,
  handleOpenDialog,
  setActiveItem,
  fetchData,
  onOpenDialog,
}) => {
  return (
    <Grid
      container
      spacing={{ xs: 2, md: 3 }}
      columns={{ xs: 4, sm: 8, md: 12 }}
    >
      {list_news.map((item, id) => (
        <Grid key={id} item xs={2} sm={3} md={3}>
          <MediaCard
            item={item}
            handleOpenDialog={handleOpenDialog}
            setActiveItem={setActiveItem}
            fetchData={fetchData}
            onOpenDialog={onOpenDialog}
          />
        </Grid>
      ))}
    </Grid>
  )
}

const ControlFilter = ({
  dataFilter,
  setDataFilter,
  handleOpenDialog,
  submitSearch,
}) => {
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
            <MDBox pr={1} sx={{ width: '300px' }}>
              <MDInput
                sx={{ width: '100%' }}
                label="Nhập tìm kiếm...."
                value={dataFilter.keySearch}
                onChange={(e) =>
                  setDataFilter({ ...dataFilter, keySearch: e.target.value })
                }
              />
            </MDBox>

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
                  <MenuItem value={1}>3</MenuItem>
                  <MenuItem value={2}>6</MenuItem>
                  <MenuItem value={3}>9</MenuItem>
                </TextField>
              </FormControl>
            </Box>
            <MDButton variant="outlined" color="primary" onClick={submitSearch}>
              Tìm kiếm
            </MDButton>
          </Box>
          <MDButton
            variant="outlined"
            color="primary"
            onClick={handleOpenDialog}
          >
            Thêm mới
          </MDButton>
        </Grid>
      </Grid>
    </MDBox>
  )
}

const DialogUpdateBlog = ({
  activeItem,
  isOpen,
  handleClose,
  handleSubmit,
}) => {
  const [dataFilter, setDataFilter] = useState({
    searchText: '',
  })
  const [files, setFiles] = useState([])
  const [formData, setFormData] = useState({
    tieude: '',
    tieudecon: '',
    anhdaidien: '',
    motangan: '',
    chitiet: '',
    ngaytaotintuc: '',
  })
  const [formError, setFormError] = useState({
    tieude: false,
    tieudecon: false,
    anhdaidien: false,
    motangan: false,
    chitiet: false,
    ngaytaotintuc: false,
  })
  console.log(formData)
  useEffect(() => {
    if (activeItem) {
      setFormData({ ...activeItem })
      setFormError({
        tieude: false,
        tieudecon: false,
        anhdaidien: false,
        motangan: false,
        chitiet: false,
        ngaytaotintuc: false,
      })
    }
  }, [activeItem])

  const internalSubmit = () => {
    // validate
    let temp = {
      tieude: false,
      tieudecon: false,
      anhdaidien: false,
      motangan: false,
      chitiet: false,
      ngaytaotintuc: false,
    }
    // if (files.length <= 0) {
    //   temp.file = true
    // }
    for (const [key, val] of Object.entries(formData)) {
      if (!!!val) {
        temp[key] = true
      }
    }

    let lCheck = Object.values(temp).filter((e) => !!e)
    if (lCheck.length > 0) {
      setFormError(temp)
      return
    }
    handleSubmit({ ...formData, file: files })
  }

  const handleCloseInternal = () => {
    setFormError({
      tieude: false,
      tieudecon: false,
      anhdaidien: false,
      motangan: false,
      chitiet: false,
      ngaytaotintuc: false,
    })
    handleClose()
  }

  return (
    <Dialog
      open={isOpen}
      maxWidth="md"
      fullWidth
      onClose={handleCloseInternal}
      scroll="paper"
      aria-labelledby="scroll-dialog-title"
      aria-describedby="scroll-dialog-description"
    >
      <DialogTitle>
        {formData?.id ? 'Cập nhật thông tin' : 'Thêm mới thông tin'}
      </DialogTitle>
      <DialogContent dividers>
        <MDBox sx={{ width: '100%', mt: 2 }}>
          <TextField
            fullWidth
            label="Tiêu đề"
            variant="outlined"
            value={formData?.tieude}
            onChange={(e) =>
              setFormData({ ...formData, tieude: e.target.value })
            }
            error={formError.tieude}
          />
        </MDBox>
        <MDBox sx={{ width: '100%', mt: 2 }}>
          <TextField
            fullWidth
            label="Tiêu đề phụ"
            variant="outlined"
            value={formData?.tieudecon}
            onChange={(e) =>
              setFormData({ ...formData, tieudecon: e.target.value })
            }
            error={formError.tieudecon}
          />
        </MDBox>
        <MDBox sx={{ width: '100%', mt: 2 }}>
          <TextField
            fullWidth
            label="Mô tả ngắn"
            variant="outlined"
            multiline
            maxRows={10}
            rows={5}
            value={formData?.motangan}
            onChange={(e) =>
              setFormData({ ...formData, motangan: e.target.value })
            }
            error={formError.motangan}
          />
        </MDBox>
        <MDBox sx={{ width: '100%', mt: 2 }}>
          <TextField
            fullWidth
            label="Chi tiết"
            variant="outlined"
            multiline
            maxRows={10}
            rows={5}
            value={formData?.chitiet}
            onChange={(e) =>
              setFormData({ ...formData, chitiet: e.target.value })
            }
            error={formError.chitiet}
          />
        </MDBox>
        {/*  */}
        <MDBox sx={{ width: '100%', mt: 2 }}>
          <TextField
            fullWidth
            label=""
            variant="outlined"
            type="date"
            value={formData?.ngaytaotintuc}
            onChange={(e) =>
              setFormData({ ...formData, ngaytaotintuc: e.target.value })
            }
            error={formError.ngaytaotintuc}
          />
        </MDBox>
        <MDBox sx={{ width: '100%', mt: 2 }}>
          <TextField
            fullWidth
            label="Ảnh đại diện"
            variant="outlined"
            value={formData?.anhdaidien}
            onChange={(e) =>
              setFormData({ ...formData, anhdaidien: e.target.value })
            }
            error={formError.anhdaidien}
          />
        </MDBox>
      </DialogContent>
      <DialogActions>
        <Button color="secondary" onClick={handleCloseInternal}>
          Hủy
        </Button>
        <Button onClick={internalSubmit}>Lưu</Button>
      </DialogActions>
    </Dialog>
  )
}

const NewsManagement = () => {
  const [paginator, setPaginator] = useState({ total: 10, current: 1 })
  const [openDialog, setOpenDialog] = useState(false)
  const [activeItem, setActiveItem] = useState(null)
  const [dataFilter, setDataFilter] = useState({
    searchText: '',
  })
  const [isOpenReadMore, setIsOpenReadMore] = useState(false)
  const [content, setContent] = useState({})
  const [dsTinTuc, setDsTinTuc] = useState([])
  const [limit, setLimit] = useState(12)
  const [page, setPage] = useState(1)
  const [tong, setTong] = useState(1)
  const [t, setT] = useState([])

  const fetchData = async () => {
    const resgetAllBlog = await api.getTinTuc(
      `limit=${limit}&page=${page}&search=${dataFilter.searchText}`
    )
    if (resgetAllBlog.success) {
      setDsTinTuc(resgetAllBlog.data.tinTucs)
      setTong(resgetAllBlog.data.totalItems)
      let to = []
      for (
        let index = 1;
        index <= resgetAllBlog.data.totalItems / 12 + 1;
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
  // const handleSubmitDialog = async (data) => {

  //   var bodyFormData = new FormData()
  //   bodyFormData.append('anhdaidien', data.anhdaidien)
  //   bodyFormData.append('tieude', data.tieude)
  //   bodyFormData.append('tieudecon', data.tieudecon)
  //   bodyFormData.append('chitiet', data.chitiet)
  //   bodyFormData.append('motangan', data.motangan)
  //   bodyFormData.append('ngaytaotintuc', ngaytaotintuc)

  //   axiosInstance
  //     .post('api/tintuc', bodyFormData, {
  //       headers: { 'Content-Type': 'application/json' },
  //     })
  //     .then((res) => {
  //       // const data = res.data
  //       // console.log('data res: ', data)
  //       handleCloseDialog()
  //     })
  //     .catch((e) => {
  //       console.log(e)
  //     })
  // }

  const handleSubmitDialog = async (data) => {
    console.log('data submit: ', data)
    var body = {
      anhdaidien: data.anhdaidien,
      tieude: data.tieude,
      tieudecon: data.tieudecon,
      chitiet: data.chitiet,
      motangan: data.motangan,
      ngaytaotintuc: data.ngaytaotintuc,
    }
    const rescreateUser = await api.taoTinTuc(body)
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

  const onOpenDialog = (item) => {
    setIsOpenReadMore(true)
    setContent(item)
  }
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 1000,
    bgcolor: 'background.paper',
    border: '2px solid #e1e1e1',
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
    overflow: 'auto',
    height: '80vh',
    padding: '20px 28px',
  }

  return (
    <DashboardLayout>
      <DashboardNavbar />
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
          <Box sx={{ display: 'flex', marginBottom: 3 }}>
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
            <MDButton variant="outlined" color="primary" onClick={submitSearch}>
              Tìm kiếm
            </MDButton>
          </Box>
          <MDButton
            variant="outlined"
            color="primary"
            onClick={handleOpenDialog}
          >
            Thêm tin tức
          </MDButton>
        </Grid>
      </Grid>
      <RenderNews
        list_news={dsTinTuc}
        handleOpenDialog={handleOpenDialog}
        setActiveItem={setActiveItem}
        fetchData={fetchData}
        onOpenDialog={onOpenDialog}
      />
      <Pagination
        count={tong / 12 + 1}
        page={page}
        onChange={handleChangePage}
        style={{ marginTop: 12 }}
      />
      <DialogUpdateBlog
        activeItem={activeItem}
        setActiveItem={setActiveItem}
        isOpen={openDialog}
        handleClose={handleCloseDialog}
        handleSubmit={handleSubmitDialog}
      />
      <Modal
        open={isOpenReadMore}
        onClose={() => setIsOpenReadMore(false)}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <Box sx={{ ...style, width: 1000, overflow: 'auto' }}>
          <h2 id="child-modal-title">{content.tieude}</h2>
          <p style={{ fontSize: 12, color: '#6e6e6e' }}>
            {content.ngaytaotintuc}{' '}
          </p>
          {/* <p id="child-modal-description">{content.tieudecon}</p>
          <p id="child-modal-description">{content.motangan}</p> */}
          <p id="child-modal-description">{content.chitiet}</p>

          <Button onClick={() => setIsOpenReadMore(false)}>Đóng</Button>
        </Box>
      </Modal>
    </DashboardLayout>
  )
}
export default NewsManagement
