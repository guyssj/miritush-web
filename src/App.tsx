import React from 'react';
import './App.css';
import Navbar from './components/NavBar/navbar';
import SliderBook from './components/sliderBook/sliderbook';
import { StylesProvider, jssPreset } from '@material-ui/core/styles';
import rtl from "jss-rtl";
import { create } from 'jss';
const jss = create({ plugins: [...jssPreset().plugins, rtl()] });

function App() {
  return (
    <StylesProvider jss={jss}>
      <React.Fragment>
        <Navbar />
        <SliderBook />
      </React.Fragment>
    </StylesProvider>

  );
}

export default App;