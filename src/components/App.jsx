import React from "react";
import { Searchbar } from "./Searchbar/Searchbar";
import toast, { Toaster } from 'react-hot-toast';
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
        <Toaster toastOptions={{duration: 2000,}} />
        <Searchbar onSubmit={this.handleSubmit} />
        <ImageGallery  query={this.state.query} />
    </div>
  );
  }
};
