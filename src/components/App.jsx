import React from "react";
import { Searchbar } from "./Searchbar/Searchbar";

import { ImageGallery } from "./ImageGallery/ImageGallery";


export class  App extends React.Component {
  
  state = {
    query: "",
    
  }



  handleSubmit = (query) => {
    
    this.setState({ query })
    
    
  }
  
  render() {
    return (
    <div>
        <Searchbar onSubmit={this.handleSubmit} />
        <ImageGallery  query={this.state.query} />
    </div>
  );
  }
};
