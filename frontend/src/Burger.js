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
      <div className="menu-item">
      </div>
	    <form action='https://api.kellyburton.dev/authorize'>
      <div>Dark Text : 
	    <input type='submit' value='Log Into Spotify' />
	</div>
	    </form>
     
     
    </Menu>
  );
}}
export default Burger
