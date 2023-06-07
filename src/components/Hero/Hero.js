import React, {useState} from 'react';

import {css} from 'styled-components/macro';
import {Button} from '../Button/ButtonElements';
import {HeroSection, HeroWrapper, HeroSlide, HeroSlider, HeroImage, HeroContent, Arrow, SliderButtons, PrevArrow, NextArrow} from './HeroElements';


const Hero = ({slides}) => {
    const [current, setCurrent] = useState(0);
    const length = slides.length;

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    };

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1); 
    };

    if(!Array.isArray(slides) || slides.length <= 0){
        return null;
    }

    return (
        <HeroSection>
            <HeroWrapper>
                {slides.map((slide, index) => {
                    return(
                        <HeroSlide key={index}>
                            {index === current && (
                                     <HeroSlider>
                                     <HeroImage src={slide.image} alt={slide.alt}/>
                                         <HeroContent>
                                             <h1 data-aos='fade-down' data-aos-duration='600'>{slide.title}</h1>
                                             <p data-aos='fade-down' data-aos-duration='600' data-aos-delay='200'>{slide.altitude}</p>
                                             <Button 
                                             data-aos='zoom-out' 
                                             data-aos-duration='500' 
                                             data-aos-delay='250'
                                             primary='true' 
                                             css={`
                                                 max-width: 160px;
                                             `} round='true'>{slide.label}
                                                 <Arrow/>
                                             </Button>
                                         </HeroContent>
                                 </HeroSlider>
                            )}
                        </HeroSlide>
                    );
                })}
                <SliderButtons>
                    <PrevArrow onClick={prevSlide}/>
                    <NextArrow onClick={nextSlide}/>
                </SliderButtons>
            </HeroWrapper>
        </HeroSection>
    );
};

export default Hero;
