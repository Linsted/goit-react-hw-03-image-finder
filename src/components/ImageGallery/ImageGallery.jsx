import { ImageGalleryItem } from "components/ImageGalleryItem/ImageGalleryItem";
import { Loader } from "components/Loader/Loader";
import React from "react"
import * as Api from "../../api/api";
import PropTypes from 'prop-types';
import { Button } from "components/Button/Button";
import toast, { Toaster } from 'react-hot-toast';


export class ImageGallery extends React.Component {

    static defaultProps  = {
        perPage : 50
    }

    state = {
        images: [],
        loading: false,
        page: 1,
        totalHits: 0,
        perPage: this.props.perPage,
    }

    static propTypes = {
        query: PropTypes.string.isRequired,
    }

    async  componentDidUpdate(prevProps, prevState) {
         
        if (prevProps.query !== this.props.query || prevState.page !== this.state.page) {
          this.setState({loading: true, })
        try {
            const response = await Api.fetchImages(this.props.query, this.state.page);
            if (!response.ok) { throw new Error(Error) }
            const data = await response.json();
            if (data.hits.length === 0) {
                this.setState({loading: false})
                return toast('Nothing find');
            }
            console.log(data.totalHits , this.state.perPage)
            this.setState({images: [...prevState.images, ...data.hits],loading: false, totalHits: data.totalHits} )
         } catch (error) {
            console.log(error.message)
         }

              
    }
      
    }
    

    loadMore = () => {
        this.setState(prevState => ({ page: prevState.page + 1 }));
        console.log(this.state.images.length)
        
    }
    
    render() {
        return (
            
            <>
                <ul><ImageGalleryItem images={this.state.images} /></ul>
                {(this.state.images.length !== 0 && this.state.page !== this.state.totalHits/this.state.perPage) && <Button onClick={this.loadMore} />}
                <Loader loading={this.state.loading} />
            </>
)
    }
}




