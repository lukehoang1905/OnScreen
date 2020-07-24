import React, { Component } from 'react';

import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';

import MovieList from './components/MovieList';
const API_KEY = process.env.REACT_APP_API_KEY

//code start here
export default class App extends Component {
  constructor(props) {
    super(props);
    
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
    const url = `https://api.themoviedb.org/3/movie/550?api_key=${API_KEY}`
    let response = await fetch(url);
    let data = await response.json();
    console.log(data)
  }

  //below is to display result
  render() {
    return (
      <div>
        thisassadf 
      </div>
    )
  }
} 

