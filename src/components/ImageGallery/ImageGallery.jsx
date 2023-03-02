export const ImageGallery =  (props) => {
    // console.log(props.images)
    return (
    <ul>{props.images.map(image => <li key={image.id}> <img src={image.webformatURL} alt="" /> </li> )}</ul>
)
}