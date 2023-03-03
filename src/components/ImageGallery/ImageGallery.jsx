import { ImageGalleryItem } from "components/ImageGalleryItem/ImageGalleryItem";
import { Loader } from "components/Loader/Loader";
import React from "react"
import * as Api from "../../api/api";




export class ImageGallery extends React.Component {

    state = {
        images: [],
        loading: false,
    }


    async  componentDidUpdate(prevProps, prevState) {
         
        if (prevProps.query !== this.props.query) {
          this.setState({loading: true})
        try {
            const response = await Api.fetchImages(this.props.query);
            if (!response.ok) { throw new Error(Error) }
            const data = await response.json();
            // console.log(data.hits)
            this.setState({images: data.hits,loading: false} )
         } catch (error) {
            console.log(error.message)
         }

            
        
        
    }
      
  }
    
    render() {
        return (<>
            <ul><ImageGalleryItem images={this.state.images} /></ul>
            <Loader loading={this.state.loading} />
            </>
)
    }
}




