import React from 'react';

import background from '../../images/homepage.jpg';
import {Section, Content, Img} from './BackgroundElements';


const Background = () => {
    return (
        <Section>
            <Content>
                <h2>MOST POPULAR</h2>
                <h1>SKI RESORTS</h1>
            </Content>
            <Img src={background} alt='background'/>
        </Section>
    );
};

export default Background;
