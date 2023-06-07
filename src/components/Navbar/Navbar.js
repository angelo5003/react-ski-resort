import React, {useState, useEffect} from 'react';
import {useLocation} from 'react-router-dom';

import {menuData} from '../../data/MenuData';
import {Button} from '../Button/ButtonElements';

import {css} from 'styled-components/macro';
import {Nav, Logo, MenuBars, NavMenu, NavMenuLinks, NavBtn} from './NavbarElements';

import SharedModal from '../Sharedmodal/SharedModal';

const Navbar = ({toggle}) => {
    const [navbar, setNavbar] = useState(false);
    const location = useLocation();

    const changeBackground = () => {
        if(window.pageYOffset >= 60) {
            setNavbar(true);
        } else {
            setNavbar(false);
        }
    };

    useEffect(() => {
        const watchScroll = () => {
            window.addEventListener('scroll', changeBackground)
        }

        watchScroll()

        return () => {
            window.removeEventListener('sroll', changeBackground);
        };
    }, []);

    let style = {
        backgroundColor: navbar || location.pathname !=='/' ? '#000d1a' : 'transparent',
        transition: '0.4s'
    };

        const [showModal, setShowModal] = useState(false);

        const openModal = () => {
            setShowModal (prev => !prev)
        }

    return (
       <Nav style={style}>
           <Logo to='/'>SKI RESORT</Logo>
           <MenuBars onClick={toggle}/>
           <NavMenu>
               {menuData.map((item, index) => (
                   <NavMenuLinks to={item.link} key={index}>
                       {item.title}
                   </NavMenuLinks>
               ))}
           </NavMenu>
           <NavBtn>
               <Button primary='true' round='true' css={`margin-right: 5px;`}>Contact Us</Button>
               <Button primary='true' round='true' onClick={openModal}>Sign Up</Button>
               <SharedModal showModal={showModal} setShowModal={setShowModal}/>
           </NavBtn>
       </Nav>
    );
};

export default Navbar;
