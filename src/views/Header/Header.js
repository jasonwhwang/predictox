import React from 'react';
import './Header.css';

import Logo from '../../img/predicto.png';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
  headerTab: state.common.headerTab
});

const mapDispatchToProps = dispatch => ({
  changeHeaderTab: (headerTab) =>
    dispatch({ type: 'HEADER_TAB', headerTab })
});

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.toggleNotifications = this.toggleNotifications.bind(this);
    this.toggleProfile = this.toggleProfile.bind(this);
  }

  toggleSidebar() {
    if (document.getElementById("mainSidebar").style.marginLeft === "0px") {
      document.getElementById("mainSidebar").style.marginLeft = "-250px";
    } else {
      if (document.getElementById("mainRightbar").style.marginRight === "0px") {
        document.getElementById("mainRightbar").style.marginRight = "-250px";
      }
      document.getElementById("mainSidebar").style.marginLeft = "0px";
    }
  }

  toggleNotifications() {
    if (document.getElementById("mainRightbar").style.marginRight === "0px") {
      if(this.props.headerTab === 0)
        document.getElementById("mainRightbar").style.marginRight = "-250px";
      this.props.changeHeaderTab(0);
    } else {
      this.props.changeHeaderTab(0);
      if (document.getElementById("mainSidebar").style.marginLeft === "0px") {
        document.getElementById("mainSidebar").style.marginLeft = "-250px";
      }
      document.getElementById("mainRightbar").style.marginRight = "0px";
    }
  }

  toggleProfile() {
    if (document.getElementById("mainRightbar").style.marginRight === "0px") {
      if(this.props.headerTab === 1)
        document.getElementById("mainRightbar").style.marginRight = "-250px";
      this.props.changeHeaderTab(1);
    } else {
      this.props.changeHeaderTab(1);
      if (document.getElementById("mainSidebar").style.marginLeft === "0px") {
        document.getElementById("mainSidebar").style.marginLeft = "-250px";
      }
      document.getElementById("mainRightbar").style.marginRight = "0px";
    }
  }

  render() {
    return (
      <div className="header">
        <div className="header-toggle" onClick={this.toggleSidebar}>
          <button className="ion-ios-menu header-menu" />
        </div>

        <Link to='/' className="header-section" id="header-predicto">
          <img src={Logo} className='header-logo' alt='Predicto' />
          <div className="header-text">PREDICTO</div>
        </Link>

        <div className="header-section">
          <div className="header-icon" onClick={this.toggleNotifications}>
            <button className="ion-ios-notifications" />
          </div>

          <div className="header-icon" onClick={this.toggleProfile}>
            <button className="ion-ios-contact" />
          </div>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);