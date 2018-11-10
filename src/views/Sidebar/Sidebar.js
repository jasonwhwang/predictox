import React from 'react';
import './Sidebar.css';

import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Logo from '../../img/predicto.png';

const mapStateToProps = state => ({

});

class Sidebar extends React.Component {
  toggle() {
    if (document.getElementById("mainSidebar").style.marginLeft === "0px") {
      document.getElementById("mainSidebar").style.marginLeft = "-300px";
    } else {
      document.getElementById("mainSidebar").style.marginLeft = "0px";
    }
  }

  render() {
    return (
      <div className="sidebar-main sidebar-left" id="mainSidebar">
        <div className="sidebar-topPadding"></div>
        <div className="sidebar-contents">
          <div className="sidebar-top">
            <Link to='/' className="sidebar-item" onClick={this.toggle}>
              <div className="sidebar-icon"><i className="ion-ios-trending-up" /></div>
              <div className="sidebar-text">Predictions</div>
            </Link>
            <Link to='/trending' className="sidebar-item" onClick={this.toggle}>
              <div className="sidebar-icon"><i className="ion-ios-rocket" /></div>
              <div className="sidebar-text">Trending</div>
            </Link>
            <Link to='/leaderboard' className="sidebar-item" onClick={this.toggle}>
              <div className="sidebar-icon"><i className="ion-ios-trophy" /></div>
              <div className="sidebar-text">Leaderboard</div>
            </Link>
          </div>

          <div className="sidebar-bottom">
            <Link to='/about' className="sidebar-item" onClick={this.toggle}>
              <div className="sidebar-iconB"><i className="ion-ios-information-circle-outline" /></div>
              <div className="sidebar-text">About Predicto</div>
            </Link>
            <Link to='/buy' className="sidebar-item" onClick={this.toggle}>
              <div className="sidebar-iconB"><img src={Logo} className='s-logo' alt='Predicto' /></div>
              <div className="sidebar-text">Buy Predicto</div>
            </Link>
          </div>
        </div>
      </div>
    );
  }

}

export default connect(mapStateToProps)(Sidebar);