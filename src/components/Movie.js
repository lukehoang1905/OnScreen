import React, { Component } from 'react'




export default class Movie extends Component {
    render() {
        return (
            <div>
                <h1>Movie Card {this.props.AMovie} </h1>
            </div>
        )
    }
}
