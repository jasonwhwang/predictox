import React from 'react';
import './About.css';
import Logo from '../../img/predicto.png';

class About extends React.Component {
  render() {
    return (
      <div className="about">
        <div className="a-body">
          <div className="box-flexRow"><img src={Logo} className="a-logo"alt="Predicto"/></div>
          <div>Predicto is a community for crypto enthusiasts. Share and discuss cryptocurrency trends while earning rewards for correct price predictions.</div>
        </div>
      </div>
    );
  }
}

export default About;