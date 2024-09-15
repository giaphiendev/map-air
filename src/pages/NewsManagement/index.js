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

const DATA_DEMO = [
  {
    id: 1,
    img: 'https://images2.thanhnien.vn/zoom/328_205/52806826…665-20-0-520-800-crop-16794138434321731260352.jpg',
    title: 'Báo động chất lượng không khí toàn cầu',
    subtitle: 'subtitle',
    date: '11/11/2022',
    view: 10,
    description: 'Ô nhiễm không khí nghiêm trọng ở Bangkok, hàng trăm ngàn người nhập viện',
  },
  {
    id: 2,
    img: '	https://images2.thanhnien.vn/zoom/328_205/Uploaded/hongkyqc/2022_10_08/zem-city-1-1869.jpeg',
    title: 'Không gian sống xanh giữa lòng thành phố - Vấn đề đang được quan tâm hàng đầu',
    subtitle: 'subtitle',
    date: '11/11/2022',
    view: 0,
    description:
      'Với mục tiêu nâng cao chất lượng cuộc sống người dân giữa đô thị, tái tạo mảng xanh đang là vấn đề được ưu tiên hàng đầu tại kế hoạch quy chuẩn của sở xây dựng TP.HCM. Đặc biệt, khi các dự án cơ sở hạ tầng mới được đưa vào sử dụng, không gian sống xanh giữa đô thị càng được quan tâm hơn.',
  },
  {
    id: 3,
    img: 'https://images2.thanhnien.vn/zoom/328_205/Uploaded/lequan/2021_08_12/onkk1_QSOQ.jpg',
    title: 'Hàng nghìn người ở Hà Nội có thể đã tử vong sớm do phơi nhiễm bụi mịn',
    subtitle: 'subtitle',
    date: '11/11/2022',
    view: 11,
    description: 'Khẩu trang nào có thể chống bụi mịn và phòng ngừa dịch Covid-19?',
  },
  {
    id: 4,
    img: 'https://images2.thanhnien.vn/zoom/328_205/Uploaded/minhnguyet/2022_03_23/khoi-mu-4332.jpg',
    title: 'Không có quốc gia nào đáp ứng tiêu chí chất lượng không khí của WHO',
    subtitle: 'subtitle',
    date: '11/11/2022',
    view: 1,
    description: '10 xu hướng sức khỏe bạn nên thử trong năm mới này',
  },

  {
    id: 5,
    img: '	https://images2.thanhnien.vn/zoom/328_205/Uploaded/lequan/2021_06_30/dotromra_UOAF.jpg',
    title: 'Hà Nội: Để ô nhiễm từ chất thải, người đứng đầu phải chịu trách nhiệm',
    subtitle: 'subtitle',
    date: '11/11/2022',
    view: 4,
    description: 'Thời tiết oi bức, khói bụi, làm gì để bảo vệ sức khỏe?',
  },
  {
    id: 6,
    img: 'https://images2.thanhnien.vn/zoom/328_205/Uploaded/congthang/2021_03_23/cay-canh_GNKB.jpg',
    title: '9 loại cây thanh lọc không khí nên có trong nhà bạn',
    subtitle: 'subtitle',
    date: '11/11/2022',
    view: 8,
    description: '5 mẹo biến ngôi nhà của bạn trở nên xanh mát và vui khỏe',
  },
]

function MediaCard({ item, handleOpenDialog, setActiveItem }) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia sx={{ height: 140 }} image={item.img} title={item.title} />
      <CardContent>
        <Box>
          <Link href="#">
            <Typography gutterBottom variant="h5" component="div">
              {item.title}
            </Typography>
          </Link>
          <MDTypography sx={{ fontSize: '13px' }} variant="body2" color="secondary">
            {item.date}
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
          {item.description}
        </Typography>
      </CardContent>
      <CardActions sx={{ justifyContent: 'space-around' }}>
        <Button size="small">Read More</Button>
        <Button
          size="small"
          onClick={() => {
            handleOpenDialog()
            setActiveItem(item)
          }}
        >
          Sửa
        </Button>
        <Button size="small">Xoá</Button>
        <Box>
          {item.view > 0 ? (
            <Typography
              variant="body2"
              color="secondary"
              sx={{ display: 'flex', alignItems: 'center', fontSize: '14px' }}
            >
              {item.view}
              <VisibilityIcon fontSize="inherit" sx={{ ml: '3px' }} />
            </Typography>
          ) : (
            <Typography
              variant="body2"
              color="secondary"
              sx={{ display: 'flex', alignItems: 'center', fontSize: '14px' }}
            >
              <VisibilityOffIcon fontSize="inherit" />
            </Typography>
          )}
        </Box>
      </CardActions>
    </Card>
  )
}

const RenderNews = ({ list_news, handleOpenDialog, setActiveItem }) => {
  return (
    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
      {list_news.map((item, id) => (
        <Grid key={id} item xs={2} sm={4} md={4}>
          <MediaCard
            item={item}
            handleOpenDialog={handleOpenDialog}
            setActiveItem={setActiveItem}
          />
        </Grid>
      ))}
    </Grid>
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
  const [formData, setFormData] = useState({ title: '', subtitle: '', description: '' })
  const [formError, setFormError] = useState({
    title: false,
    subtitle: false,
    description: false,
    file: false,
  })

  useEffect(() => {
    if (activeItem) {
      setFormData({ ...activeItem })
      setFormError({
        title: false,
        subtitle: false,
        description: false,
        file: false,
      })
    }
  }, [activeItem])

  const internalSubmit = () => {
    // validate
    let temp = {
      title: false,
      subtitle: false,
      description: false,
      file: false,
    }
    if (files.length <= 0) {
      temp.file = true
    }
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
      title: false,
      subtitle: false,
      description: false,
      file: false,
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
      <DialogTitle>{formData?.id ? 'Update Blog' : 'New Blog'}</DialogTitle>
      <DialogContent dividers>
        <MDBox sx={{ width: '100%', mt: 2 }}>
          <TextField
            fullWidth
            label="Title"
            variant="outlined"
            value={formData?.title}
            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
            error={formError.title}
          />
        </MDBox>
        <MDBox sx={{ width: '100%', mt: 2 }}>
          <TextField
            fullWidth
            label="Subtitle"
            variant="outlined"
            value={formData?.subtitle}
            onChange={(e) => setFormData({ ...formData, subtitle: e.target.value })}
            error={formError.subtitle}
          />
        </MDBox>
        <MDBox sx={{ width: '100%', mt: 2 }}>
          <TextField
            fullWidth
            label="Description"
            variant="outlined"
            multiline
            maxRows={10}
            rows={5}
            value={formData?.description}
            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
            error={formError.description}
          />
        </MDBox>
        {/*  */}
        <MDBox sx={{ mt: 2 }}>
          <Typography gutterBottom variant="title2" component="div">
            Background Image
          </Typography>
          <FileUpload
            title="Drag or drop some files here"
            multiple={false}
            accept={['image/*']}
            value={files}
            onChange={setFiles}
            buttonProps={{ variant: 'contained', sx: { color: '#fff' } }}
            buttonText="Upload image"
            maxFiles={1}
            sx={
              formError.file && {
                borderColor: 'red',
                '&:hover': {
                  borderColor: 'red',
                },
              }
            }
          />
        </MDBox>
      </DialogContent>
      <DialogActions>
        <Button color="secondary" onClick={handleCloseInternal}>
          Cancel
        </Button>
        <Button onClick={internalSubmit}>Submit</Button>
      </DialogActions>
    </Dialog>
  )
}

const NewsManagement = () => {
  const [paginator, setPaginator] = useState({ total: 10, current: 1 })
  const [listBlog, setListBlog] = useState([])
  const [openDialog, setOpenDialog] = useState(false)
  const [activeItem, setActiveItem] = useState(null)
  const [dataFilter, setDataFilter] = useState({ keySearch: '', sortByDate: 1, limitBlog: 2 })

  useEffect(() => {
    // initValue
    fetchListBlog()
  }, [])

  const fetchListBlog = () => {
    axiosInstance
      .get('api/tintuc')
      .then((res) => {
        const data = res.data
        // console.log('data res: ', data.data.tinTucs)
        setListBlog(DATA_DEMO)
      })
      .catch((e) => {
        console.log(e)
      })
  }

  const handleCloseDialog = () => {
    setOpenDialog(false)
    setActiveItem(null)
  }
  const handleSubmitDialog = (data) => {
    var bodyFormData = new FormData()
    bodyFormData.append('anhdaidien', data.file)
    bodyFormData.append('tieude', data.title)
    bodyFormData.append('tieudecon', data.subtitle)
    bodyFormData.append('chitiet', data.description)
    bodyFormData.append('luotxem', 1)

    axiosInstance
      .post('api/tintuc', bodyFormData, { headers: { 'Content-Type': 'multipart/form-data' } })
      .then((res) => {
        // const data = res.data
        // console.log('data res: ', data)
        handleCloseDialog()
      })
      .catch((e) => {
        console.log(e)
      })
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

      <ControlFilter
        dataFilter={dataFilter}
        setDataFilter={setDataFilter}
        handleOpenDialog={handleOpenDialog}
        submitSearch={submitSearch}
      />

      <RenderNews
        list_news={listBlog}
        handleOpenDialog={handleOpenDialog}
        setActiveItem={setActiveItem}
      />
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
export default NewsManagement
