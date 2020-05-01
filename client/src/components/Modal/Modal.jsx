import React from "react";
import ReactDOM from 'react-dom';
import styled from "styled-components";

const ModalOverlay = props => {
    const content = (
        <div style={props.style}>
            <header><h2>{props.header}</h2></header>
            <form
                onSubmit={
                    props.onSubmit ? props.onSubmit : event => event.preventDefault
                }
            >
                <div>
                    {props.children}
                </div>
                <footer>
                    {props.footer}
                </footer>
            </form>
        </div>
    )
    return ReactDOM.createPortal();
};

const Modal = props => {

};

export default Modal;
