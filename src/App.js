import React, { Component } from 'react';

import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';

import MovieList from './components/MovieList';
import Nav from './components/Nav';
import Footer from './components/Footer';
const API_KEY = process.env.REACT_APP_API_KEY

//code start here
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state= {value:null}
   };

  componentDidMount() {
    this.doSomething()
  }
  doSomething =() =>{
    console.log("didSomething")
    this.getApiFromSever()
  }
  async getApiFromSever() {
    console.log(API_KEY)
    const url = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`
    let response = await fetch(url);
    let data = await response.json();
    let originalData = data.results
    console.log(originalData)
    this.setState({
      title: originalData[0].original_title,
      overview: originalData[0].overview,
      imgPath: originalData[0].poster_path
    })
  }

  //below is to display result
  render() {
    return (
      <>
        <Nav/>
        <MovieList movieList={this.state} />
        <Footer/>
      </>
    )
  }
} 

