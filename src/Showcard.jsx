import React, { Component } from 'react';
import './App.css';
import  {movie} from './movie.json';


export default class Showcard extends Component {



    render() {

      return (
          <ul>
          {
            movie.map( (movie) => {
              return <li   key = { movie.Title }
                >
                <div className = 'card'>
                <div className="image"><img src={movie.Poster} alt="film"/>
                </div>
                <div className="content">
                  <div className="title"><h5>{movie.Title}</h5></div>
                  <div className="year"> <p>{movie.Year}</p></div>
                  <div className="plot"> <p>{movie.Plot}</p></div>
                </div>
                </div>
              </li>
              ;
            })
          }
          </ul>
      );

    }

  }






//
// export default Showcard;
