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
      document.getElementById("mainSidebar").style.marginLeft = "-250px";
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
              <div className="sidebar-text"><span className="sidebar-textmargin"><i className="ion-ios-trending-up s-marginright" /> Predictions</span></div>
            </Link>
            <Link to='/leaderboard' className="sidebar-item" onClick={this.toggle}>
              <div className="sidebar-text"><span className="sidebar-textmargin"><i className="ion-ios-trophy s-marginright" /> Leaderboard</span></div>
            </Link>
            <Link to='/account' className="sidebar-item" onClick={this.toggle}>
              <div className="sidebar-text"><span className="sidebar-textmargin"><i className="ion-ios-person s-marginright" /> Account</span></div>
            </Link>
          </div>

          <div className="sidebar-bottom">
            <Link to='/about' className="sidebar-item" onClick={this.toggle}>
              <div className="sidebar-text"><span className="sidebar-textmargin"><i className="ion-ios-information-circle-outline" /> About Predicto</span></div>
            </Link>
            <Link to='/buy' className="sidebar-item" onClick={this.toggle}>
              <div className="sidebar-text"><span className="sidebar-textmargin"><img src={Logo} className='s-logo' alt='Predicto' /> Buy Predicto</span></div>
            </Link>
          </div>
        </div>
      </div>
    );
  }

}

export default connect(mapStateToProps)(Sidebar);