import React, { Component } from 'react';
import logo from '../../assets/Logo.png';

export default class Logo extends Component {
  render() {
      console.log('logo', logo)
    return (
      <div style={{marginBottom: '50px'}}>
        <img src={logo} alt="Clickedin" style={{marginTop: '7%'}}/>
      </div>
    )
  }
};
