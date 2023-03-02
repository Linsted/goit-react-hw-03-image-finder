import React from "react";
import { Searchbar } from "./Searchbar/Searchbar";
import * as Api from "../api/api";
import { ImageGallery } from "./ImageGallery/ImageGallery";


export class  App extends React.Component {
  
  state = {
    query: "",
    images: []
  }

  async componentDidUpdate(prevProps, prevState) {
    if (prevState.query !== this.state.query) {
      try {
        const images = await Api.fetchImages(this.state.query);
        
        this.setState({images: images.hits})
      } catch (error) {
        console.log(error.message)
      }
    }
      
  }

  handleSubmit = (evt) => {
    evt.preventDefault()
    // console.log(this.state.query)
    const querySubmit = evt.currentTarget.elements.input.value;
    this.setState({ query: querySubmit })
    
    
  }
  
  render() {
    return (
    <div>
        <Searchbar onSubmit={this.handleSubmit} />
        <ImageGallery images={this.state.images} />
    </div>
  );
  }
};
