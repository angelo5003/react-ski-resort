import styled from 'styled-components';

export const Section = styled.section`
    background: #000d1a;
    padding-bottom: 12rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

export const Content = styled.div`
    position: relative;
    text-align: center;
    color: white;

    position: absolute;
    top: 30%;
    left: 50%;
    transform: translate(-50%, -50%);

    h2 {
        font-size: 3rem;
        font-weight: bold;
        text-transform: uppercase;
    }

    h1 {
        font-size: 7rem;
        font-weight: bold;
    }

    @media screen and (max-width: 768px) {
        h2{
            font-size: 2rem;
        }

        h1 {
            font-size: 2.5rem;
        }
    }
`;



export const Img = styled.img`
    @media screen and (max-width: 768) {
        height: 100%;
        width: 100%;
        object-fit: cover;
    }
`;