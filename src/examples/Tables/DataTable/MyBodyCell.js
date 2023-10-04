// prop-types is a library for typechecking of props
import PropTypes from 'prop-types'

// React components
import MDBox from 'components/MDBox'

function MybodyCell({ noBorder, align, children }) {
  return (
    <MDBox
      component="td"
      textAlign={align}
      py={1.5}
      px={3}
      sx={({ typography: { size } }) => ({
        fontSize: size.sm,
      })}
    >
      <MDBox
        display="inline-block"
        width="max-content"
        color="text"
        sx={{ verticalAlign: 'middle' }}
      >
        {children}
      </MDBox>
    </MDBox>
  )
}

// Setting default values for the props of MybodyCell
MybodyCell.defaultProps = {
  align: 'left',
}

// Typechecking props for the MybodyCell
MybodyCell.propTypes = {
  children: PropTypes.node.isRequired,
  align: PropTypes.oneOf(['left', 'right', 'center']),
}

export default MybodyCell
