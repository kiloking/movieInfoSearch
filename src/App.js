import React, { Component } from 'react';
import './App.css';
import MovieRow from './MovieRow';
import $ from 'jquery'

class App extends Component {
  constructor(props){
    super(props);
    console.log('tt')
    this.state = {}

    // const movies=[
    //   {id:0, poster_src:'https://image.tmdb.org/t/p/w185_and_h278_bestv2/Af60AXjBCI1ZeDS2UxzWRwZ3wlY.jpg', title: 'aaaaa' , overview:'ddkdkdkdkdkdkdkdkdkdkd'},
    //   {id:2, poster_src:'https://image.tmdb.org/t/p/w185_and_h278_bestv2/s5SVRr0aspyug9YAYeyvClrBnbB.jpg', title: 'bbbbb' , overview:'cccccccccccccccccccdddddddddddd'},
    // ]

    // //迴圈資料存到陣列
    // var movieRows=[]
    // movies.forEach(movie => {
    //   // console.log(movie.title)
    //   const movieRow = <MovieRow  movie={movie}/>
    //   movieRows.push(movieRow)
    // });

    // this.state = {rows: movieRows}
    this.performSearch('ant')
  }
  performSearch(searchTerm){
    console.log('per')
    const urlString = 'https://api.themoviedb.org/3/search/movie?api_key=ac53d6d75da27e33c65825f9b41bb633&language=zh-TW&page=1&query=' +searchTerm
    $.ajax({
      url : urlString,
      success: (data) =>{
        console.log(data.results)
        const results = data.results

        var movieRows=[]

        results.forEach(movie => {
          movie.poster_src = 'https://image.tmdb.org/t/p/w185' + movie.poster_path
          const movieRow = <MovieRow  key={movie.id} movie={movie}/>
          movieRows.push(movieRow)
        })
        this.setState({rows:movieRows})
      },
      error: (xhr , status, err) =>{
        console.error('error')

      }
    })
  }
  searchChangeHandler(event){
    console.log(event.target.value)
    const boundObject = this
    const searchTerm = event.target.value
    boundObject.performSearch(searchTerm)
  }
  render() {
    return (
      <div className="App">
        <table className="titleBar">
          <tbody>
            <tr>
              <td>
                <img width="50" src="logo.svg" alt=""/>
              </td>
              <td width="8"></td>
              <td>
                <h1>TDAL Search </h1>
              </td>
            </tr>
          </tbody>
        </table>
        <input type="text" placeholder="輸入文字" onChange={this.searchChangeHandler.bind(this)}
          style={{
            fontSize:24,
            display:'block',
            width:'99%',
            paddingTop:8,
            paddingBottom:8,
            paddingLeft:16,
          }}
        />
        {this.state.rows}
      </div>
    );
  }
}

export default App;
