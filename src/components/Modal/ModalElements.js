import styled from 'styled-components';

import {MdClose} from 'react-icons/md';

export const Background = styled.div`
    width: 100%;
    height: 100%;
    background: rgba(0,0,0, 0.8);
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;

export const ModalWrapper = styled.div`
    width: 800px;
    height: 500px;
    box-shadow: 0 5px 16px rgba(0,0,0, 0.2);
    background: #fff;
    color: #000;
    /* display: grid; */
    grid-template-columns: 1fr 1fr;
    position: relative;
    z-index: 10;
    border-radius: 10px;
    background: #F8F8FF;
    
    @media screen and (max-width: 768px){
        height: 300px;
    }
`;

// export const ModalImg = styled.img`
//     width: 100%;
//     height: 100%;
//     border-radius: 10px 0 0 10px;
//     background: #000;
// `;

export const ModalContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    line-height: 1.8;
    color: #141414;
`;

export const CloseModalButton = styled(MdClose)`
    cursor: pointer;
    position: absolute;
    top: 20px;
    right: 20px;
    width: 32px;
    height: 32px;
    padding: 0;
`;