import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import TopBar from '../components/layout/Topbar';
import {
  PieChartRounded,
  StorageRounded,
  TabRounded,
} from '@mui/icons-material';
import SettingsBox from '../components/settings/SettingsBox';
import { JSX } from 'react/jsx-dev-runtime';

const drawerWidth = 240;

function DisplayButton() {
  return (
    <ListItem disablePadding>
      <ListItemButton href='/settings.display'>
        <ListItemIcon>
          <TabRounded />
        </ListItemIcon>
        <ListItemText primary='Display' />
      </ListItemButton>
    </ListItem>
  );
}
function DashboardButton() {
  return (
    <ListItem disablePadding>
      <ListItemButton divider component='a' href='/settings.dashboard'>
        <ListItemIcon>
          <PieChartRounded />
        </ListItemIcon>
        <ListItemText primary='Dashboard' />
      </ListItemButton>
    </ListItem>
  );
}
function ComputerTableButton() {
  return (
    <ListItem disablePadding>
      <ListItemButton divider component='a' href='/settings.computers_table'>
        <ListItemIcon>
          <StorageRounded />
        </ListItemIcon>
        <ListItemText primary='computer table' />
      </ListItemButton>
    </ListItem>
  );
}

export default function ClippedDrawer(props: JSX.Element) {
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position='fixed'
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
      >
        <TopBar></TopBar>
      </AppBar>
      <Drawer
        variant='permanent'
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: 'auto' }}>
          <List>
            <DashboardButton />
            <ComputerTableButton />
          </List>
          <Divider />
          <List>
            <DisplayButton />
          </List>
        </Box>
      </Drawer>
      <Box component='main' sx={{ flexGrow: 1, p: 3 }}>
        <SettingsBox
          key={'SettingsBox'}
          type={'JSX.Element'}
          props={props.props}
        ></SettingsBox>
      </Box>
    </Box>
  );
}
