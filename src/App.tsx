import React from 'react';
import './App.css';
import Button from '@material-ui/core/Button';
import Navbar from './components/NavBar/navbar';
import Slider from "react-slick";
import handssmall from "./assets/img/handsSmall.png";
import legsSmall from "./assets/img/legsSmall.png";
import backRTL from "./assets/img/backRTL.png";
import {
  createStyles,
  createTheme,
  makeStyles,
  Theme,
  withStyles,
  ThemeProvider
} from '@material-ui/core/styles';


function App() {
  const ColorButton = withStyles((theme: Theme) => ({
    root: {
      color: theme.palette.getContrastText("#ffd8cb"),
      backgroundColor: '#ffd8cb',
      '&:hover': {
        backgroundColor: '#ffd8cb',
      },
    },
  }))(Button);
  const useStyles = makeStyles((theme: Theme) =>
    createStyles({
      margin: {
        margin: theme.spacing(1)
      },
      buttonBook: {
        height: '50px',
        textAlign: 'center',
        padding: '13px',
        border: '1px solid black'
      },
      sliderBackground: {
        backgroundImage:`url(${backRTL})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition:'center center',
        backgroundAttachment:'fixed'
      }
    }),
  );
  var settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  const classes = useStyles();
  var slides = [
    { text: "להיות שונה עם עיצוב הציפורניים בהתאמה אישית", img: handssmall, desc: "מספקת מגוון רחב של שירותי עיצוב ציפורניים עברוך" },
    { text: "טיפוח אישי באווירה אחרת, עם מוזיקה מעולה, והמון אהבה", img: legsSmall, desc: "מספקת מגוון רחב של שירותי עיצוב ציפורניים עברוך" },

  ];
  const theme = createTheme({
    palette: {
      primary: {
        main: '#ffd8cb'
      }
    },
  });
  const sliderItems = slides.map((slide) =>
    <React.Fragment>
      <div className={`fadeIn ${classes.sliderBackground}`}>
        <div dir="rtl" className="headText">
          <h1 className="sliderText">
            {slide.text}
            <div className="hrLine slide-left " />
          </h1>
          <ThemeProvider theme={theme}>
            <Button variant="contained" color="primary" onClick={() => { alert('clicked') }} className={classes.buttonBook}>
              קביעת פגישה
            </Button>
          </ThemeProvider>

        </div>
        <img src={(slide.img)} alt="" />
      </div>
    </React.Fragment>
  );
  return (
    <React.Fragment>
      <Navbar />
      <div >
        <Slider {...settings}>
          {sliderItems}
        </Slider>
      </div>
    </React.Fragment>

  );
}

export default App;