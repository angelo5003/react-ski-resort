import React from 'react';

import {Link} from 'react-router-dom';
import {IoMdArrowRoundForward} from 'react-icons/io';
import {Section, Container, FooterTop, Quote, FooterInfo, FooterBottom, SocialIcons, Youtube, Instagram, Facebook, LinkedIn, Contact} from './FooterElements';
import {Button} from '../Button/ButtonMediumElements';

const Footer = () => {
    return (
        <Section>
            <Container>
                <FooterTop>
                    <Quote>
                        <h3>Your dream Holiday</h3>
                    </Quote>
                    <FooterInfo>
                        <h4>Contact Us</h4>
                        <Link to='/home'>FAQ</Link>
                        <Link to='/home'>Support</Link>
                        <Link to='/home'>Questions</Link>
                    </FooterInfo>
                    <FooterInfo>
                        <h4>Office</h4>
                        <Link to='/home'>Austria</Link>
                        <Link to='/home'>Netherlands</Link>
                        <Link to='/home'>Germany</Link>
                    </FooterInfo>
                    <FooterBottom>
                        <SocialIcons>
                            <a href='//www.google.com' rel='noopener noreferrer' target='_blank'>
                                <Youtube/>
                                </a>
                                <a href='//www.google.com' rel='noopener noreferrer' target='_blank'>
                                <Instagram/>
                                </a>
                                <a href='//www.google.com' rel='noopener noreferrer' target='_blank'>
                                <Facebook/>
                                </a>
                                <a href='//www.google.com' rel='noopener noreferrer' target='_blank'>
                                <LinkedIn/>
                                </a>
                        </SocialIcons>
                        <Contact>
                            <Button to='/home' medium='true' mediumround='true'>Let's Chat <IoMdArrowRoundForward/></Button>
                        </Contact>
                    </FooterBottom>
                </FooterTop>
            </Container>
        </Section>
    );
};

export default Footer;
