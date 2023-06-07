import React from 'react';

import {Section, Container, Wrap, ColumnLeft, Content, ColumnRight, Image} from './FeaturesElements';
import {Button} from '../Button/ButtonMediumElements';
import ImageOne from '../../images/saalbach 3.jpg';

const Features = () => {
    return (
        <Section>
            <Container>
                <Wrap>
                    <ColumnLeft>
                        <Content
                            data-aos='fade-right'
                            data-aos-duration='1200'
                            data-aos-delay='300'
                            data-aos-once='true'
                            data-aos-anchor-placement='center-bottom'
                        >
                            <h1>Stunning area's</h1>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error maxime veritatis provident odio nobis voluptatibus culpa a porro esse qui!</p>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore, iure.</p>
                            <Button to='/areas' medium='true' mediumround='true'>See Areas</Button>
                        </Content>
                    </ColumnLeft>
                    <ColumnRight>
                        <Image src={ImageOne} alt='areas'
                         data-aos='fade-left'
                         data-aos-duration='1200'
                         data-aos-once='true'
                         data-aos-anchor-placement='center-bottom'
                        />
                    </ColumnRight>
                </Wrap>
            </Container>
        </Section>
    );
};

export default Features;
