import PropTypes from 'prop-types';

export function ImageGalleryItem({ images }) {
    // console.log(images)
    
    return (
        images.map(image => <li key={image.id}><img src={image.webformatURL} alt={image.tags} width="200" height="150" /></li> )
    )

    
}

ImageGalleryItem.propTypes = {
        images: PropTypes.arrayOf(
          PropTypes.object
        ).isRequired,
    }