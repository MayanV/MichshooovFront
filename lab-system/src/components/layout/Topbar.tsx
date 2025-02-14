import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import { SettingsRounded } from '@mui/icons-material';

const pages = ['home', 'dashboard'];

export default function TopBar() {
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography variant="h3">🐶</Typography>
          <Typography
            variant="h4"
            noWrap
            component="a"
            sx={{
              mr: '3rem',
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.2rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            LABRADAR
          </Typography>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: 'none', md: 'flex' },
            }}
          >
            {pages.map((page) => (
              <Button
                key={page}
                href={page}
                size="large"
                sx={{
                  textTransform: 'capitalize',
                  px: '1rem',
                  my: '0.5rem',
                  mx: '.2rem',
                  color: 'white',
                  display: 'block',
                  fontSize: 'large',
                }}
              >
                {page}
              </Button>
            ))}
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton href="/settings" sx={{ p: '.5rem' }}>
                <SettingsRounded />
              </IconButton>
            </Tooltip>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
