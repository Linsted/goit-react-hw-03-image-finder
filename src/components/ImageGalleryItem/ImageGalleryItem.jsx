import { ModalWindow } from 'components/Modal/ModalWindow';
import PropTypes from 'prop-types';
import React from 'react';

export class  ImageGalleryItem extends React.Component {
    
    static propTypes = {
        images: PropTypes.arrayOf(
          PropTypes.object
        ).isRequired,
    }

    state = {
        openModal: false,
        largeImage: "",
    }

    openModal = (largeImage) => {
        
        this.setState({openModal: true, largeImage})
    }

    closeModal = (evt) => {
        // console.log(evt.target)
        this.setState({openModal: false})
    }

    render() {
            return (
        <>
                    {this.props.images.map(image => <li key={image.id}>
                        <button onClick={() => { this.openModal(image.largeImageURL) }} type='button'>
                            <img src={image.webformatURL} alt={image.tags} width="200" height="150" />
                        </button>
                        </li>)}
            {this.state.openModal && (<ModalWindow onClose={this.closeModal} largeImage={this.state.largeImage} />)}
        </>
    )
    }
    

    
}

