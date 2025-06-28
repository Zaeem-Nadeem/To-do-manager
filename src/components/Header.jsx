import { AppBar, Toolbar, Typography, IconButton, Box } from '@mui/material';
import { Brightness4, Brightness7, CheckCircle } from '@mui/icons-material';

const Header = ({ darkMode, toggleDarkMode }) => {
  return (
    <AppBar position="static" elevation={2}>
      <Toolbar>
        <CheckCircle sx={{ mr: 2, fontSize: 28 }} />
        <Typography variant="h7" component="h1" sx={{ flexGrow: 1, fontWeight: 600 }}>
          ToDo Manager
        </Typography>
        <Box>
          <IconButton 
            color="inherit" 
            onClick={toggleDarkMode}
            aria-label="toggle dark mode"
          >
            {darkMode ? <Brightness7 /> : <Brightness4 />}
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;