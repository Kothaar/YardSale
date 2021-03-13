import React,{ Component } from 'react';
import { bubble as Menu } from 'react-burger-menu';
import './Burger.css';
import Toggle from './ToggleSwitch';
class Burger extends Component {
    render() {
    return (
    <Menu >
      <div className="menu-item">
        <h1>Theme</h1>
      </div>
      <div>Dark Text :  <Toggle /></div>
      <hr />
      <h1> Settings</h1>
	    <form action='http://localhost:5000/authorize'>
      <div>Log Into Spotify : 
	    <input type='submit' value='Log In' />
	</div>
	    </form>
     
     
    </Menu>
  );
}}
export default Burger
