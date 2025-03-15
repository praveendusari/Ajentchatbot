import React, { useEffect } from 'react';
import './App.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { ThemeProvider } from '@mui/material/styles';
import theme from './config/theme';
import { Box, Typography, CssBaseline,Button } from '@mui/material';

function App() {
  useEffect(() => {
    // Ensure unlayer is available
    console.log('useEffect called');
    if (window.unlayer) {
      console.log('Initializing unlayer');
      window.unlayer.init({
        id: 'editor',
        displayode:'web',
        projectId: 269841,
      });
    }
  }, []); // Empty dependency array ensures this runs only once
 const saveHTML = () => {
    window.unlayer.exportHtml(function (data) {
      console.log(data.html);
    });
 }

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Box sx={{ height: { xs: '600px', md: '80vh' } }} >
        <Button variant="contained" color="primary" sx={{ mb: 2 }} onClick={saveHTML}>
            Save
          </Button>
          <div id="editor" style={{ height: '80vh' }}></div>
        </Box>
      </ThemeProvider>
    </>
  );
}

export default App;
