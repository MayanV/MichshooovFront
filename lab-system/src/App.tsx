import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import ComputerManagement from './pages/ComputerManagement';
import Dashboard from './pages/Dashboard';
import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import Settings from './pages/Settings';
import TopBar from './components/layout/Topbar';
import NewComputerModal from './components/common/NewComputerModal';

const appTheme = createTheme({
  colorSchemes: {
    light: true,
    dark: true,
  },
});

export default function App() {
  return (
    <ThemeProvider theme={appTheme} defaultMode="system">
      <CssBaseline />
      <BrowserRouter>
        <TopBar />
        <Routes>
          <Route path="/" element={<ComputerManagement />} />
          <Route path="home" element={<Navigate to="/" replace />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="settings" element={<Settings />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
        <NewComputerModal />
      </BrowserRouter>
    </ThemeProvider>
  );
}
