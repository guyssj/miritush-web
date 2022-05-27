import { useState } from 'react'
import Slider from "react-slick";
import handssmall from "../../assets/img/handsSmall.png";
import legsSmall from "../../assets/img/legsSmall.png";
import backRTL from "../../assets/img/backRTL.png";
import FormDialog from '../../dialogs/formDialog';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';

export default function SliderBook() {
    const [isOpen, setIsOpen] = useState(false);

    const handleOpen = () => {
        setIsOpen(!isOpen);
    };

    const BookButton = styled(Button)(({ theme }) => ({
        height: '50px',
        textAlign: 'center',
        padding: '13px',
        border: '1px solid black'
    }));

    const SliderStyled = styled('div')(({ theme }) => ({
        backgroundImage: `url(${backRTL})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
        backgroundAttachment: 'fixed'
    }));

    var settings = {
        dots: true,
        fade: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        dir: 'rtl'
    };
    var slides = [
        { text: "להיות שונה עם עיצוב הציפורניים בהתאמה אישית", img: handssmall, desc: "מספקת מגוון רחב של שירותי עיצוב ציפורניים עברוך", key: "one" },
        { text: "טיפוח אישי באווירה אחרת, עם מוזיקה מעולה, והמון אהבה", img: legsSmall, desc: "מספקת מגוון רחב של שירותי עיצוב ציפורניים עברוך", key: "two" },

    ];

    const sliderItems = slides.map((slide) =>
        <SliderStyled key={slide.key} className={`fadeIn`}>
            <div dir="rtl" className="headText">
                <h1 className="sliderText">
                    {slide.text}
                    <div className="hrLine slide-left " />
                </h1>
                <BookButton variant="contained" color="primary" onClick={() => handleOpen()}>
                    קביעת פגישה
                </BookButton>

            </div>
            <img src={(slide.img)} alt="" />
        </SliderStyled>
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

