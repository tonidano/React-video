import React, { Component } from 'react';
import Showcard from './Showcard.jsx';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

// export default class Homepage extends Component {
//
//   render() {
//     return (
//       <div className="App">
//       <h1>Homepage</h1>
// <button type="button" onClick="BasicExample()" >Showcard</button>
//
//       </div>
//
//     );
//   }
//
// }

function BasicExample() {
  return (
    <Router>
      <div>
        <ul>
          <li>
          <Link to="/Showcard">Showcard</Link>

          </li>

        </ul>

        <hr />

        <Route exact path="/Showcard" component={Showcard} />

      </div>
    </Router>
  );
}

function Home() {
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
}



export default BasicExample;
