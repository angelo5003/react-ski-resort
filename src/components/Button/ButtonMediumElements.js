import styled from 'styled-components';

export const Button = styled.button`
    //normal styling
    background: ${({primary}) => (primary ? '#000d1a' : '#E66A20')};
    white-space: nowrap;
    outline: none;
    border: none;
    min-width: 100px;
    max-width: 200px;
    cursor: pointer;
    transition: 0.3s;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;

    padding: ${({medium}) => (medium ? '12px 40px' : '14px 24px')};
    font-size: ${({medium}) => (medium ? '15px' : '10px')};
    border-radius: ${({mediumround}) => (mediumround ? '15px' : '0px')};
    
    &:hover {
        transform: translateY(-2px);
        color: #000;
    }
`;