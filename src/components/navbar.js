import React, { Component } from 'react';
//must import react

//export the component
//the navbar for the header, with links
export default class NavBar extends Component {
  render() { //can use JSX to write HTML (not exactly but very close)
    return (
        <div className="topNav">
            <a href="#">Home</a>
            <a href="#">Contact</a>
            <a href="#">About</a>
        </div>
    );
  }
}
