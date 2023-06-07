import React,{useRef, useEffect, useCallback, useState} from 'react';

import Portal from '../Portal';



import {Background, ModalWrapper, ModalContent, CloseModalButton} from './ModalElements';




const Modal = ({showModal, setShowModal, children}) => {
    const modalRef = useRef();
    console.log(children)

    const closeModal = e => {
        if(modalRef.current === e.target) {
            setShowModal(false);
        }
    };

    const keyPress = useCallback(e => {
        if(e.key === 'Escape' && showModal) {
            setShowModal(false)
        }
    }, [setShowModal, showModal])

    useEffect(() => {
        document.addEventListener('keydown', keyPress);
        return() => document.removeEventListener('keydown', keyPress);
    }, [keyPress]);
    


    return (
        <>
            {showModal ? (
                <Portal>
                <Background ref={modalRef} onClick={closeModal}>
                {/* <animated.div style={animation}> */}
                    <ModalWrapper showModal={showModal}>
                        <ModalContent>
                            {children}
                        </ModalContent>
                        <CloseModalButton aria-label='Close Modal' onClick={() => setShowModal(prev => !prev)}/>
                    </ModalWrapper>
                    {/* </animated.div> */}
                </Background>
                </Portal>
            ) : null}
        </>
    );
};

export default Modal;
