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
	    <form action='http://localhost:5000/authorize'>
      <div>Dark Text : 
	    <input type='submit' value='Log Into Spotify' />
	</div>
	    </form>
     
     
    </Menu>
  );
}}
export default Burger
