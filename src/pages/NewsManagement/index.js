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

const DATA_DEMO = [
  {
    id: 1,
    img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8?w=242&h=121&fit=crop&auto=format&dpr=2',
    title: 'Lizard',
    subtitle: 'subtitle',
    date: '11/11/2022',
    view: 10,
    description:
      'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica',
  },
  {
    id: 2,
    img: 'https://mui.com/static/images/cards/contemplative-reptile.jpg',
    title: 'K hieu kieu gi',
    subtitle: 'subtitle',
    date: '11/11/2022',
    view: 0,
    description:
      'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica',
  },
  {
    id: 3,
    img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6?w=242&h=121&fit=crop&auto=format&dpr=2',
    title: 'K hieu kieu gi',
    subtitle: 'subtitle',
    date: '11/11/2022',
    view: 11,
    description:
      'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica',
  },
  {
    id: 4,
    img: 'https://images.unsplash.com/photo-1563298723-dcfebaa392e3?w=248&fit=crop&auto=format&dpr=2',
    title: 'ABC xyz',
    subtitle: 'subtitle',
    date: '11/11/2022',
    view: 1,
    description:
      'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica',
  },

  {
    id: 5,
    img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6?w=242&h=121&fit=crop&auto=format&dpr=2',
    title: 'K hieu kieu gi',
    subtitle: 'subtitle',
    date: '11/11/2022',
    view: 4,
    description:
      'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica',
  },
  {
    id: 6,
    img: 'https://images.unsplash.com/photo-1563298723-dcfebaa392e3?w=248&fit=crop&auto=format&dpr=2',
    title: 'ABC xyz',
    subtitle: 'subtitle',
    date: '11/11/2022',
    view: 8,
    description:
      'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica',
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
          Edit
        </Button>
        <Button size="small">Delete</Button>
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
    <MDBox pt={6} pb={3}>
      <Grid container spacing={6}>
        <Grid item xs={12} sx={{ width: '100%', display: 'flex', justifyContent: 'space-between' }}>
          <Box sx={{ display: 'flex' }}>
            <MDBox pr={1} sx={{ width: '300px' }}>
              <MDInput
                sx={{ width: '100%' }}
                label="Looking...."
                value={dataFilter.keySearch}
                onChange={(e) => setDataFilter({ ...dataFilter, keySearch: e.target.value })}
              />
            </MDBox>

            <Box sx={{ width: '100px', mx: 1 }}>
              <FormControl fullWidth>
                <TextField
                  select
                  label="Sort by date"
                  onChange={(e) => setDataFilter({ ...dataFilter, sortByDate: e.target.value })}
                  value={dataFilter.sortByDate}
                  className="custom-text-select"
                >
                  <MenuItem value={1}>Descending</MenuItem>
                  <MenuItem value={2}>Ascending</MenuItem>
                </TextField>
              </FormControl>
            </Box>
            <Box sx={{ width: '100px', mx: 1 }}>
              <FormControl fullWidth>
                <TextField
                  select
                  label="Limit blog"
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
              Seach
            </MDButton>
          </Box>
          <MDButton variant="outlined" color="primary" onClick={handleOpenDialog}>
            Add new paper
          </MDButton>
        </Grid>
      </Grid>
    </MDBox>
  )
}

const DialogUpdateBlog = ({ activeItem, isOpen, handleClose, handleSubmit }) => {
  const [files, setFiles] = useState([])
  const [formData, setFormData] = useState({ title: '', subtitle: '', description: '' })

  useEffect(() => {
    if (activeItem) {
      setFormData({ ...activeItem })
    }
  }, [activeItem])

  const internalSubmit = () => {
    // validate
    handleSubmit({ ...formData, file: files })
  }

  return (
    <Dialog
      open={isOpen}
      maxWidth="md"
      fullWidth
      onClose={handleClose}
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
          />
        </MDBox>
        <MDBox sx={{ width: '100%', mt: 2 }}>
          <TextField
            fullWidth
            label="Subtitle"
            variant="outlined"
            value={formData?.subtitle}
            onChange={(e) => setFormData({ ...formData, subtitle: e.target.value })}
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
            // accept={['img', 'png', 'image', 'pdf']}
            value={files}
            onChange={setFiles}
            buttonProps={{ variant: 'contained', sx: { color: '#fff' } }}
            buttonText="Upload image"
            maxFiles={1}
          />
        </MDBox>
      </DialogContent>
      <DialogActions>
        <Button color="secondary" onClick={handleClose}>
          Cancel
        </Button>
        <Button onClick={internalSubmit}>Submit</Button>
      </DialogActions>
    </Dialog>
  )
}

const NewsManagement = () => {
  const [paginator, setPaginator] = useState({ total: 10, current: 1 })

  const [openDialog, setOpenDialog] = useState(false)
  const [activeItem, setActiveItem] = useState(null)
  const [dataFilter, setDataFilter] = useState({ keySearch: '', sortByDate: 1, limitBlog: 2 })

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
        list_news={DATA_DEMO}
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
