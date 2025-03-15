import React, { useEffect,useRef } from 'react';
import './App.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { ThemeProvider } from '@mui/material/styles';
import theme from './config/theme';
import { Box, Typography, CssBaseline,Button } from '@mui/material';
import EmailEditor, { EditorRef, EmailEditorProps } from 'react-email-editor';

function App() {
  const ws = useRef<WebSocket | null>(null);
  const emailEditorRef = useRef<EditorRef>(null);

  const exportHtml = () => {
    const unlayer = emailEditorRef.current?.editor;

    unlayer?.exportHtml((data) => {
      const { design, html } = data;
      console.log('exportHtml', html);
    });
  };

  const onReady: EmailEditorProps['onReady'] = (unlayer) => {
    // editor is ready
    // you can load your template here;
    // the design json can be obtained by calling
    // unlayer.loadDesign(callback) or unlayer.exportHtml(callback)
    // const templateJson = { DESIGN JSON GOES HERE };
    // unlayer.loadDesign(templateJson);
    console.log('onReady', unlayer);
    unlayer.addEventListener('design:updated', (data) => {
      console.log('design:updated', data);
      if (ws.current && ws.current.readyState === WebSocket.OPEN) {
        ws.current.send(JSON.stringify({ type: 'unlayer-update', design: data }));
      }
    });
    window.unlayer = unlayer;
  };

  useEffect(() => {
    // Establish WebSocket connection
    ws.current = new WebSocket('ws://localhost:8080');
    ws.current.onopen = () => {
      console.log('WebSocket connection established');
    };

    ws.current.onmessage = (event) => {
      const data = event.data;
      console.log('WebSocket message received:', data);
      if (data.type === 'unlayer-update' && window.unlayer) {
        window.unlayer.loadDesign(data.design);
      }
    };

    ws.current.onclose = () => {
      console.log('WebSocket connection closed');
    };

    return () => {
      if (ws.current) {
        ws.current.close();
      }
    };
  }, []);

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
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Box sx={{ height: { xs: '600px', md: '80vh' } }} >
        <Button variant="contained" color="primary" sx={{ mb: 2 }} onClick={exportHtml}>
            Save
          </Button>
           <EmailEditor ref={emailEditorRef} onReady={onReady} />
        </Box>
      </ThemeProvider>
    </>
  );
}

export default App;
