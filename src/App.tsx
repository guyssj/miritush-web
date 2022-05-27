import React from 'react';
import './App.css';
import Navbar from './components/NavBar/navbar';
import SliderBook from './components/sliderBook/sliderbook';
import rtlPlugin from 'stylis-plugin-rtl';
import { CacheProvider, ThemeProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import { prefixer } from 'stylis';
import { createTheme } from '@mui/material/styles';
import { sharedThemeOptions } from './theme/shareTheme';

// Create rtl cache
const cacheRtl = createCache({
  key: 'muirtl',
  stylisPlugins: [prefixer, rtlPlugin],
});

const theme = createTheme({
  direction: 'rtl',
  ...sharedThemeOptions
});
function App() {
  return (
    <CacheProvider value={cacheRtl}>
      <ThemeProvider theme={theme}>
        <React.Fragment>
          <Navbar />
          <SliderBook />
        </React.Fragment>
      </ThemeProvider>
    </CacheProvider>
  );
}

export default App;