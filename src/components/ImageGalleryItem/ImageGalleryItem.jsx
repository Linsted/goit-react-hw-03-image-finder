export function ImageGalleryItem({images}) {
    console.log(images)
    
    return (
        images.map(image => <li key={image.id}><img src={image.webformatURL} alt="" /></li> )
    )
}