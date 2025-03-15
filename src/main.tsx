//import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { StyledEngineProvider } from '@mui/material/styles';
import './index.css'
import App from './App.tsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

createRoot(document.getElementById('root')!).render(
    <StyledEngineProvider injectFirst>
       <BrowserRouter>
       <Routes>
        <Route path="/" element={<App />} />
      </Routes>
       </BrowserRouter>
    
    </StyledEngineProvider>
,
)
