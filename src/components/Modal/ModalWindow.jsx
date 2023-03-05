import PropTypes from 'prop-types';
import React from 'react';
import { Modal } from './Modal.styled';
import { Backdrop } from './Modal.styled';
import { ButtonClose } from './Modal.styled';


export class ModalWindow extends React.Component {
    
    static propTypes = {
        largeImage: PropTypes.string.isRequired,
        onClose: PropTypes.func.isRequired,
    }

    handleKeydown = (event) => {
          
            if(event.code === 'Escape' ) {
                
                this.props.onClose();
            }
        }
    
    componentDidMount() {
        
        document.addEventListener("keydown", this.handleKeydown);
        
    }


    componentWillUnmount() {
        
        document.removeEventListener("keydown", this.handleKeydown)
    }


    handleBackdropClick = (event) =>{
        if (event.target === event.currentTarget) {
            this.props.onClose()
        } 
    }

    render() {
            return(
                            <Backdrop onClick={this.handleBackdropClick}>
                                <Modal>
                                        <img src={this.props.largeImage} alt="" width="1200" height="900" />
                                        <ButtonClose onClick={this.props.onClose} type='button'>X</ButtonClose>
                                </Modal>
                            </Backdrop>
    )
    }
    
    
}