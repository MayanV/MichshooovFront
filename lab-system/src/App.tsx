import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ComputerManagement from './pages/ComputerManagement';
import Dashboard from './pages/Dashboard';
import PageNotFound from './pages/PageNotFound';
import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

export default function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ComputerManagement />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}
