// prop-types is a library for typechecking of props.
import PropTypes from 'prop-types'

// @mui material components
import Menu from '@mui/material/Menu'

// React components
import MDBox from 'components/MDBox'

// React example components
import DefaultNavbarLink from 'examples/Navbars/DefaultNavbar/DefaultNavbarLink'

function DefaultNavbarMobile({ open, close }) {
  const { width } = open && open.getBoundingClientRect()

  return (
    <Menu
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'center',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'center',
      }}
      anchorEl={open}
      open={Boolean(open)}
      onClose={close}
      MenuListProps={{ style: { width: `calc(${width}px - 4rem)` } }}
    >
      <MDBox px={0.5}>
        <DefaultNavbarLink light={false} icon="donut_large" name="dashboard" route="/dashboard" />
        <DefaultNavbarLink light={false} icon="person" name="profile" route="/profile" />
        <DefaultNavbarLink
          light={false}
          icon="account_circle"
          name="sign up"
          route="/authentication/sign-up"
        />
        <DefaultNavbarLink
          light={false}
          icon="key"
          name="sign in"
          route="/authentication/sign-in"
        />
      </MDBox>
    </Menu>
  )
}

// Typechecking props for the DefaultNavbarMenu
DefaultNavbarMobile.propTypes = {
  open: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]).isRequired,
  close: PropTypes.oneOfType([PropTypes.func, PropTypes.bool, PropTypes.object]).isRequired,
}

export default DefaultNavbarMobile
