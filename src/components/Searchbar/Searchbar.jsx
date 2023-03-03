import React from "react";



export class Searchbar extends React.Component{
    state = {
        value: ''
    }

    handleChange = (evt) => {
        this.setState({value: evt.target.value})
    }

    handleSubmit =(evt) => {
        evt.preventDefault();
        this.props.onSubmit(this.state.value);
    }

    render() {
        // console.log(this.props.onSubmit)
        return (
            <header >
                <form onSubmit={this.handleSubmit}>
                    <button type="submit">
                    <span>Search</span>
                    </button>

                        <input
                         name="input"
                        type="text"
                         autoComplete="off"
                        autoFocus
                         placeholder="Search images and photos"
                        value={this.state.value}
                         onChange={this.handleChange}
                        />
                </form>
            </header>
        )
    }
}