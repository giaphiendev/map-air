// @mui material components
import Icon from '@mui/material/Icon'

// React components
import MDBox from 'components/MDBox'
import MDTypography from 'components/MDTypography'
import MDAvatar from 'components/MDAvatar'
import MDProgress from 'components/MDProgress'

// Images
import LogoAsana from 'assets/images/small-logos/logo-asana.svg'
import logoGithub from 'assets/images/small-logos/github.svg'
import logoAtlassian from 'assets/images/small-logos/logo-atlassian.svg'
import logoSlack from 'assets/images/small-logos/logo-slack.svg'
import logoSpotify from 'assets/images/small-logos/logo-spotify.svg'
import logoInvesion from 'assets/images/small-logos/logo-invision.svg'

export default function data() {
  const Project = ({ image, name }) => (
    <MDBox display="flex" alignItems="center" lineHeight={1}>
      <MDAvatar src={image} name={name} size="sm" variant="rounded" />
      <MDTypography display="block" variant="button" fontWeight="medium" ml={1} lineHeight={1}>
        {name}
      </MDTypography>
    </MDBox>
  )

  const Progress = ({ color, value }) => (
    <MDBox display="flex" alignItems="center">
      <MDTypography variant="caption" color="text" fontWeight="medium">
        {value}%
      </MDTypography>
      <MDBox ml={0.5} width="9rem">
        <MDProgress variant="gradient" color={color} value={value} />
      </MDBox>
    </MDBox>
  )

  return {
    my_columns: [
      { key: 'id', label: 'ID' },
      { key: 'img', label: 'Image' },
      { key: 'email', label: 'Email' },
      { key: 'name', label: 'Name' },
      { key: 'role', label: 'Role' },
      { key: 'action', label: 'Action' },
    ],
    my_rows: [
      [
        { key: 'id', value: 1 },
        { key: 'img', value: LogoAsana },
        { key: 'email', value: 'hien@fabbi.io' },
        { key: 'name', value: 'Acb' },
        { key: 'role', value: 'Admin' },
        { key: 'action', id: 1 },
      ],
      [
        { key: 'id', value: 2 },
        { key: 'img', value: logoGithub },
        { key: 'email', value: 'hien@fabbi.io' },
        { key: 'name', value: 'Hien Gv' },
        { key: 'role', value: 'superadmin' },
        { key: 'action', id: 2 },
      ],
      [
        { key: 'id', value: 3 },
        { key: 'img', value: logoAtlassian },
        { key: 'email', value: 'hien@fabbi.io' },
        { key: 'name', value: 'Ngoc NTB' },
        { key: 'role', value: 'superadmin' },
        { key: 'action', id: 3 },
      ],
      [
        { key: 'id', value: 4 },
        { key: 'img', value: logoSpotify },
        { key: 'email', value: 'hien@fabbi.io' },
        { key: 'name', value: 'Cuong Ca' },
        { key: 'role', value: 'user' },
        { key: 'action', id: 4 },
      ],
      [
        { key: 'id', value: 5 },
        { key: 'img', value: logoInvesion },
        { key: 'email', value: 'hien@fabbi.io' },
        { key: 'name', value: 'Long Tran' },
        { key: 'role', value: 'user' },
        { key: 'action', id: 5 },
      ],
      [
        { key: 'id', value: 6 },
        { key: 'img', value: LogoAsana },
        { key: 'email', value: 'hien@fabbi.io' },
        { key: 'name', value: 'Acb' },
        { key: 'role', value: 'Admin' },
        { key: 'action', id: 6 },
      ],
      [
        { key: 'id', value: 7 },
        { key: 'img', value: logoGithub },
        { key: 'email', value: 'hien@fabbi.io' },
        { key: 'name', value: 'Hien Gv' },
        { key: 'role', value: 'superadmin' },
        { key: 'action', id: 7 },
      ],
      [
        { key: 'id', value: 8 },
        { key: 'img', value: logoAtlassian },
        { key: 'email', value: 'hien@fabbi.io' },
        { key: 'name', value: 'Ngoc NTB' },
        { key: 'role', value: 'superadmin' },
        { key: 'action', id: 8 },
      ],
      [
        { key: 'id', value: 9 },
        { key: 'img', value: logoSpotify },
        { key: 'email', value: 'hien@fabbi.io' },
        { key: 'name', value: 'Cuong Ca' },
        { key: 'role', value: 'user' },
        { key: 'action', id: 9 },
      ],
      [
        { key: 'id', value: 10 },
        { key: 'img', value: logoInvesion },
        { key: 'email', value: 'hien@fabbi.io' },
        { key: 'name', value: 'Long Tran' },
        { key: 'role', value: 'user' },
        { key: 'action', id: 1 },
      ],
    ],

    list_role: [
      { id: 1, name: 'Super admin' },
      { id: 2, name: 'Admin' },
      { id: 3, name: 'User' },
      { id: 4, name: 'Anonymous' },
    ],

    columns: [
      { Header: 'project', accessor: 'project', width: '30%', align: 'left' },
      { Header: 'budget', accessor: 'budget', align: 'left' },
      { Header: 'status', accessor: 'status', align: 'center' },
      { Header: 'completion', accessor: 'completion', align: 'center' },
      { Header: 'action', accessor: 'action', align: 'center' },
    ],

    rows: [
      {
        project: <Project image={LogoAsana} name="Asana" />,
        budget: (
          <MDTypography component="a" href="#" variant="button" color="text" fontWeight="medium">
            $2,500
          </MDTypography>
        ),
        status: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            working
          </MDTypography>
        ),
        completion: <Progress color="info" value={60} />,
        action: (
          <MDTypography component="a" href="#" color="text">
            <Icon>more_vert</Icon>
          </MDTypography>
        ),
      },
      {
        project: <Project image={logoGithub} name="Github" />,
        budget: (
          <MDTypography component="a" href="#" variant="button" color="text" fontWeight="medium">
            $5,000
          </MDTypography>
        ),
        status: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            done
          </MDTypography>
        ),
        completion: <Progress color="success" value={100} />,
        action: (
          <MDTypography component="a" href="#" color="text">
            <Icon>more_vert</Icon>
          </MDTypography>
        ),
      },
      {
        project: <Project image={logoAtlassian} name="Atlassian" />,
        budget: (
          <MDTypography component="a" href="#" variant="button" color="text" fontWeight="medium">
            $3,400
          </MDTypography>
        ),
        status: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            canceled
          </MDTypography>
        ),
        completion: <Progress color="error" value={30} />,
        action: (
          <MDTypography component="a" href="#" color="text">
            <Icon>more_vert</Icon>
          </MDTypography>
        ),
      },
      {
        project: <Project image={logoSpotify} name="Spotify" />,
        budget: (
          <MDTypography component="a" href="#" variant="button" color="text" fontWeight="medium">
            $14,000
          </MDTypography>
        ),
        status: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            working
          </MDTypography>
        ),
        completion: <Progress color="info" value={80} />,
        action: (
          <MDTypography component="a" href="#" color="text">
            <Icon>more_vert</Icon>
          </MDTypography>
        ),
      },
      {
        project: <Project image={logoSlack} name="Slack" />,
        budget: (
          <MDTypography component="a" href="#" variant="button" color="text" fontWeight="medium">
            $1,000
          </MDTypography>
        ),
        status: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            canceled
          </MDTypography>
        ),
        completion: <Progress color="error" value={0} />,
        action: (
          <MDTypography component="a" href="#" color="text">
            <Icon>more_vert</Icon>
          </MDTypography>
        ),
      },
      {
        project: <Project image={logoInvesion} name="Invesion" />,
        budget: (
          <MDTypography component="a" href="#" variant="button" color="text" fontWeight="medium">
            $2,300
          </MDTypography>
        ),
        status: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            done
          </MDTypography>
        ),
        completion: <Progress color="success" value={100} />,
        action: (
          <MDTypography component="a" href="#" color="text">
            <Icon>more_vert</Icon>
          </MDTypography>
        ),
      },
    ],
  }
}
