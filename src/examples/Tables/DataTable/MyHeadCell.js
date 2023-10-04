// prop-types is a library for typechecking of props
import PropTypes from 'prop-types'

// @mui material components
import Icon from '@mui/material/Icon'

// React components
import MDBox from 'components/MDBox'

// React contexts
import { useMaterialUIController } from 'context'

function MyHeadCell({ width, children, align, ...rest }) {
  const [controller] = useMaterialUIController()
  const { darkMode } = controller

  return (
    <MDBox
      component="th"
      width={width}
      py={1.5}
      px={3}
      sx={({ palette: { light }, borders: { borderWidth } }) => ({
        borderBottom: `${borderWidth[1]} solid ${light.main}`,
      })}
    >
      <MDBox
        {...rest}
        position="relative"
        textAlign={align}
        color={darkMode ? 'white' : 'secondary'}
        opacity={0.7}
        sx={({ typography: { size, fontWeightBold } }) => ({
          fontSize: size.xxs,
          fontWeight: fontWeightBold,
          textTransform: 'uppercase',
        })}
      >
        {children}
      </MDBox>
    </MDBox>
  )
}

// Setting default values for the props of DataTableHeadCell
MyHeadCell.defaultProps = {
  width: 'auto',
  align: 'left',
}

// Typechecking props for the DataTableHeadCell
MyHeadCell.propTypes = {
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  children: PropTypes.node.isRequired,
  align: PropTypes.oneOf(['left', 'right', 'center']),
}

export default MyHeadCell
