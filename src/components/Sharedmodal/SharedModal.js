import React,{useRef, useEffect, useCallback, useState} from 'react';

import Portal from '../Portal';

import SignUp from '../Login/Signup/SignUp';
import LoginForm from '../Login/Loginform/LoginForm';
import forms from '../Login/index';

import {Background, ModalWrapper, ModalContent, CloseModalButton} from './SharedModalElements';




const SharedModal = ({showModal, setShowModal, children}) => {
    const modalRef = useRef();
    console.log(children)

    const [formToShow, setFormToShow] = useState(forms.signUp);

    const changeForm = (formName) => setFormToShow(formName);

    useEffect(() => {
        if(!showModal){
            setFormToShow(forms.signUp)
        }
    }, [showModal]);

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
                    <ModalWrapper showModal={showModal}>
                        <ModalContent>
                            {formToShow === forms.login ? <LoginForm showForm={changeForm}/> : <SignUp showForm={changeForm}/>}
                        </ModalContent>
                        <CloseModalButton aria-label='Close Modal' onClick={() => setShowModal(prev => !prev)}/>
                    </ModalWrapper>
                </Background>
                </Portal>
            ) : null}
        </>
    );
};

export default SharedModal;
