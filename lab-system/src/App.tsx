import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import ComputerManagement from './pages/ComputerManagement';
import Dashboard from './pages/Dashboard';
import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import Settings from './pages/Settings';
import TopBar from './components/layout/Topbar';
import DisplayTab from './components/settings/DisplayTab';
import DashboardTab from './components/settings/DashboardTab';
import ComputerTableTab from './components/settings/ComputerTableTab';

const appTheme = createTheme({
  colorSchemes: {
    light: true,
    dark: true,
  },
});

export default function App() {
  return (
    <ThemeProvider theme={appTheme} defaultMode='system'>
      <CssBaseline />
      <BrowserRouter>
        <TopBar />
        <Routes>
          <Route path='/' element={<ComputerManagement />} />
          <Route path='home' element={<Navigate to='/' replace />} />
          <Route path='dashboard' element={<Dashboard />} />
          <Route
            path='settings.display'
            element={
              <Settings key={'Settings'} type={'any'} props={<DisplayTab />} />
            }
          />
          <Route
            path='settings.dashboard'
            element={
              <Settings
                key={'Settings'}
                type={'any'}
                props={<DashboardTab />}
              />
            }
          />
          <Route
            path='settings.computers_table'
            element={
              <Settings
                key={'Settings'}
                type={'any'}
                props={<ComputerTableTab />}
              />
            }
          />
          <Route path='*' element={<Navigate to='/' replace />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}
