import React, { Component } from 'react';

class MovieRow extends Component {
  viewMovie(){
    const url ='https://www.themoviedb.org/movie/' +this.props.movie.id
    window.location.href = url
  }
  render(){
    return <table key={this.props.movie.id}>
    <tbody>
      <tr>
        <td>
          <img width="120" src={this.props.movie.poster_src} alt="poster"/>
        </td>
        <td>
          {this.props.movie.title}
          <p>{this.props.movie.overview}</p>
          <input type="button" value="View" onClick={this.viewMovie.bind(this)}/>
        </td>
      </tr>
    </tbody>
  </table>
  }
}

export default MovieRow;