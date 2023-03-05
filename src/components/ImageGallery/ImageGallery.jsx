import { ImageGalleryItem } from "components/ImageGalleryItem/ImageGalleryItem";
import { Loader } from "components/Loader/Loader";
import React from "react"
import * as Api from "../../api/api";
import PropTypes from 'prop-types';
import { Button } from "components/Button/Button";
import toast from 'react-hot-toast';


export class ImageGallery extends React.Component {

    static defaultProps  = {
        perPage : 12,
    }

    state = {
        images: [],
        loading: false,
        // page: this.props.page,
        totalHits: 0,
        perPage: this.props.perPage,
    }

    static propTypes = {
        query: PropTypes.string.isRequired,
    }

    async  componentDidUpdate(prevProps, prevState) {
         
        if (prevProps.query !== this.props.query || prevProps.page !== this.props.page) {
          this.setState({loading: true, })
        try {
            const response = await Api.fetchImages(this.props.query, this.props.page);
            if (!response.ok) { throw new Error(Error) }
            const data = await response.json();
            if (data.hits.length === 0) {
                this.setState({loading: false})
                return toast('Nothing`s find');
            }
           
            if(data.hits.length > 0 && prevProps.query === this.props.query) { return this.setState({ images: [...prevState.images, ...data.hits], loading: false, totalHits: data.totalHits });}
            this.setState({images: data.hits, loading: false, totalHits: data.totalHits})


         } catch (error) {
            console.log(error.message)
         }

              
    }
      
    }
    

    // loadMore = () => {
    //     // console.log(this.props)
    //     this.setState(prevState => ({ page: prevState.page + 1 }));
    //     // console.log(this.state.images.length)
        
    // }
    
    render() {
        console.log(this.props)
        return (
            
            <>
                <ul><ImageGalleryItem images={this.state.images} /></ul>
                {(this.state.images.length !== 0 && this.state.page !== this.state.totalHits/this.state.perPage) && <Button onClick={this.props.onLoadMore} />}
                <Loader loading={this.state.loading} />
            </>
)
    }
}




