import React, {useState} from 'react';

import {Button} from '../Button/ButtonMediumElements';
// import {GlobalStyle} from '../Modal/GlobalStyle';
import Modal from '../Modal/Modal';
import {Section, Container,ColumnLeft, ColumnRight, ModalContainer} from './InfoSectionElements';
import '../Modal/Img.css';

const InfoSection = ({heading, paragraphOne, paragraphTwo, buttonLabel, reverse, image, delay, slopePlan}) => {
    const [showModal, setShowModal] = useState(false);

    const openModal = () => {
        setShowModal(prev => !prev);
    };

    return (
        <Section>
            <Container> 
                <ColumnLeft
                    data-aos='fade-up'
                    data-aos-duration='1000'
                    data-aos-once='true'
                    data-aos-delay={delay}
                    data-aos-anchor-placement='center-bottom'
                >
                    <h1>{heading}</h1>
                    <p>{paragraphOne}</p>
                    <p>{paragraphTwo}</p>
                    <ModalContainer>
                        <Button medium='true' mediumround='true' onClick={openModal}>{buttonLabel}</Button>
                        <Modal showModal={showModal} setShowModal={setShowModal}><img src={slopePlan} alt='ski areas' class='img'/></Modal>
                        {/* <GlobalStyle/> */}
                    </ModalContainer>
                    </ColumnLeft>
                <ColumnRight reverse={reverse}>
                    <img src={image} alt='areas'
                    data-aos='zoom-out'
                    data-aos-duration='1000'
                    data-aos-once='true'
                    data-aos-delay={delay}
                    data-aos-anchor-placement='center-bottom'/>
                </ColumnRight>
            </Container>
        </Section>
    );
};

export default InfoSection;
