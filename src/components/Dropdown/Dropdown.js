import React from 'react';

import {Button} from '../Button/ButtonElements';

import { menuData } from '../../data/MenuData';
import { DropdownContainer, Icon, CloseIcon, DropdownWrapper, DropdownMenu, DropdownLink, BtnWrap } from './DropdownElements';
import {css} from 'styled-components/macro';

const Dropdown = ({isOpen, toggle}) => {
    return (
        <DropdownContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <DropdownWrapper>
                <DropdownMenu>
                    {menuData.map((item, index) => (
                        <DropdownLink to={item.link} key={index}>
                            {item.title}
                        </DropdownLink>
                    ))}
                </DropdownMenu>
                    <BtnWrap>
                        <Button primary='true' round='true' big='true'>Contact Us</Button>
                        <Button primary='true' round='true' css={`margin-top: 20px;`}>Sign Up</Button>
                    </BtnWrap>
            </DropdownWrapper>
        </DropdownContainer>
    );
};

export default Dropdown;
