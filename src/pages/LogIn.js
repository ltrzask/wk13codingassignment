import React, { Component } from 'react';
//import react

//export the component
//made the log in component, wanted to keep it simple. 
export default class LogIn extends Component {
  render() { //used JSX to make the form for the log in
    return (
    <form>
      <div class="container">
        <h3>Log In:</h3>   
        <label>Username : </label>   
          <input type="text" placeholder="Enter Username" name="username" required />  
        <label>Password : </label>   
          <input type="password" placeholder="Enter Password" name="password" required />
        <input type="checkbox" checked="checked"/> Remember me
            <br/>  
          <button type="submit">Login</button>   
            <br/>  
          Forgot <a href="#"> password? </a>   
      </div>   
    </form>
    );
  }
}
