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
    padding: ${({big}) => (big ? '16px 40px' : '14px 24px')};
    color: ${({primary}) => (primary ? '#fff' : '#000d1a')};
    font-size: ${({big}) => (big ? '20px' : '14px')};
    border-radius: ${({round}) => (round ? '50px' : '0px')};
    
    &:hover {
        transform: translateY(-2px);
        background: #E66A20;
    }
`;