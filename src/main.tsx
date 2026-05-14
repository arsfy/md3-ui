import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App.tsx';
import { Md3ThemeProvider } from './components/md3/index.ts';

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <BrowserRouter>
            <Md3ThemeProvider>
                <App />
            </Md3ThemeProvider>
        </BrowserRouter>
    </StrictMode>
);
