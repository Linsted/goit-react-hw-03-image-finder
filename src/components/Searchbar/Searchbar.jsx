import React from "react";
import PropTypes from 'prop-types';


export class Searchbar extends React.Component{
    state = {
        value: ''
    }

    static propTypes = {
    onSubmit: PropTypes.func.isRequired,
}

    handleChange = (evt) => {
        this.setState({value: evt.target.value})
    }

    handleSubmit =(evt) => {
        evt.preventDefault();
        this.props.onSubmit(this.state.value);
        this.setState({value: ""})
    }

    render() {
       
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