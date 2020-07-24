import React, { Component } from 'react'
// const API_KEY= process.env.REACT_APP_API_KEY

export default class Movie extends Component {
    render() {
        return ( 
            <div>
               <h1>{this.props.movieDetail.title}</h1>
               <img src={`https://image.tmdb.org/t/p/w500${this.props.movieDetail.imgPath}`}/>
                <h2>{this.props.movieDetail.overview}</h2>
            </div>
        )
    }
}
