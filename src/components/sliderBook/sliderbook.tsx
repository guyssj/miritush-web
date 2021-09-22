import React, { useState } from 'react'
import Button from '@material-ui/core/Button';
import Slider from "react-slick";
import handssmall from "../../assets/img/handsSmall.png";
import legsSmall from "../../assets/img/legsSmall.png";
import backRTL from "../../assets/img/backRTL.png";
import {
    createStyles,
    createTheme,
    makeStyles,
    Theme,
    ThemeProvider
} from '@material-ui/core/styles';
import FormDialog from '../../dialogs/formDialog';

export default function SliderBook() {
    const [isOpen, setIsOpen] = useState(false);

    const handleOpen = () => {
        setIsOpen(!isOpen);
    };


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
                backgroundImage: `url(${backRTL})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center center',
                backgroundAttachment: 'fixed'
            }
        }),
    );

    var settings = {
        dots: true,
        fade: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        dir: 'rtl'
    };
    const classes = useStyles();
    var slides = [
        { text: "להיות שונה עם עיצוב הציפורניים בהתאמה אישית", img: handssmall, desc: "מספקת מגוון רחב של שירותי עיצוב ציפורניים עברוך", key: "one" },
        { text: "טיפוח אישי באווירה אחרת, עם מוזיקה מעולה, והמון אהבה", img: legsSmall, desc: "מספקת מגוון רחב של שירותי עיצוב ציפורניים עברוך", key: "two" },

    ];
    const theme = createTheme({
        palette: {
            primary: {
                main: '#ffd8cb'
            }
        },
    });
    const sliderItems = slides.map((slide) =>
        <div key={slide.key} className={`fadeIn ${classes.sliderBackground}`}>
            <div dir="rtl" className="headText">
                <h1 className="sliderText">
                    {slide.text}
                    <div className="hrLine slide-left " />
                </h1>
                <ThemeProvider theme={theme}>
                    <Button variant="contained" color="primary" onClick={() => handleOpen()} className={classes.buttonBook}>
                        קביעת פגישה
                    </Button>
                </ThemeProvider>

            </div>
            <img src={(slide.img)} alt="" />
        </div>
    );
    return (
        <div>
            <Slider {...settings}>
                {sliderItems}
            </Slider>
            <FormDialog isOpen={isOpen} handleCloseDialog={() => setIsOpen(false)} />
        </div>
    );
}

