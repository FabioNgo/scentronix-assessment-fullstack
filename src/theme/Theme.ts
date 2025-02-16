import { createTheme } from '@mui/material/styles';
import { palette } from '@mui/system';

const Theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2', // Primary color (e.g., blue)
      light: '#42a5f5', // Lighter shade for hover/focus states
      dark: '#1565c0', // Darker shade for text or shadow
    },
    secondary: {
      main: '#ff4081', // Secondary color (e.g., pink)
      light: '#ff80ab',
      dark: '#c2185b',
    },
    error: {
      main: '#f44336',
    },
    warning: {
      main: '#ff9800',
    },
    success: {
      main: '#4caf50',
    },
    background: {
      default: '#f5f5f5', // Main background color
      paper: '#ffffff',   // Background for surfaces (cards, dialogs)
    },
    text: {
      primary: '#212121', // Primary text color
      secondary: '#757575', // Secondary text color
      disabled: '#9e9e9e', // Text color for disabled elements
    },
  },
  typography: {
    fontFamily: ['Roboto', 'sans-serif'].join(','), // Font family
    fontSize: 14,   // Base font size
    h1: {
      fontSize: '3rem',
    },
    h2: {
      fontSize: '2.5rem',
    },
    body1: {
      fontSize: '1rem',
    },
    subtitle1: {
      color: '#757575',
    }
    // ...other typography options
  },
  spacing: (factor: number) => `${factor * 8}px`, // Spacing utility function
  shape: {
    borderRadius: 8, // Default corner radius
  },
  components: {
    // Customize individual components here
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8, // Override default button corner radius
          textTransform: 'none', // Prevent default uppercase text
        },
      },
    },
    // Customize more components here...
  },
});

export default Theme;