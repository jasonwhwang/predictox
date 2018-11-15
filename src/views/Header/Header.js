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
    this.toggleMessages = this.toggleMessages.bind(this);
    this.toggleNotifications = this.toggleNotifications.bind(this);
    this.toggleAccount = this.toggleAccount.bind(this);
  }

  toggleSidebar() {
    if (document.getElementById("mainSidebar").style.marginLeft === "0px") {
      document.getElementById("mainSidebar").style.marginLeft = "-300px";
    } else {
      if (document.getElementById("mainRightbar").style.marginRight === "0px") {
        if (window.innerWidth > 600) {
          document.getElementById("mainRightbar").style.marginRight = "-40vw";
        } else {
          document.getElementById("mainRightbar").style.marginRight = "-100vw";
        }
      }
      document.getElementById("mainSidebar").style.marginLeft = "0px";
    }
  }

  toggleMessages() {
    if (document.getElementById("mainRightbar").style.marginRight === "0px") {
      if (this.props.headerTab === 2) {
        if (window.innerWidth > 600) {
          document.getElementById("mainRightbar").style.marginRight = "-40vw";
        } else {
          document.getElementById("mainRightbar").style.marginRight = "-100vw";
        }
      }
      this.props.changeHeaderTab(2);
    } else {
      this.props.changeHeaderTab(2);
      if (document.getElementById("mainSidebar").style.marginLeft === "0px") {
        document.getElementById("mainSidebar").style.marginLeft = "-100vw";
      }
      document.getElementById("mainRightbar").style.marginRight = "0px";
    }
  }

  toggleNotifications() {
    if (document.getElementById("mainRightbar").style.marginRight === "0px") {
      if (this.props.headerTab === 0) {
        if (window.innerWidth > 600) {
          document.getElementById("mainRightbar").style.marginRight = "-40vw";
        } else {
          document.getElementById("mainRightbar").style.marginRight = "-100vw";
        }
      }
      this.props.changeHeaderTab(0);
    } else {
      this.props.changeHeaderTab(0);
      if (document.getElementById("mainSidebar").style.marginLeft === "0px") {
        document.getElementById("mainSidebar").style.marginLeft = "-100vw";
      }
      document.getElementById("mainRightbar").style.marginRight = "0px";
    }
  }

  toggleAccount() {
    if (document.getElementById("mainRightbar").style.marginRight === "0px") {
      if (this.props.headerTab === 1) {
        if (window.innerWidth > 600) {
          document.getElementById("mainRightbar").style.marginRight = "-40vw";
        } else {
          document.getElementById("mainRightbar").style.marginRight = "-100vw";
        }
      }
      this.props.changeHeaderTab(1);
    } else {
      this.props.changeHeaderTab(1);
      if (document.getElementById("mainSidebar").style.marginLeft === "0px") {
        document.getElementById("mainSidebar").style.marginLeft = "-100vw";
      }
      document.getElementById("mainRightbar").style.marginRight = "0px";
    }
  }

  render() {
    return (
      <div className="header">
        <div className="header-toggle" onClick={this.toggleSidebar}>
          <button className="ion-ios-menu header-menu" aria-label="Toggle" />
        </div>

        <Link to='/' className="header-section" id="header-predicto">
          <img src={Logo} className='header-logo' alt='Predicto' />
          <div className="header-text">PREDICTO</div>
        </Link>

        <div className="header-section">
          <div className="header-icon" onClick={this.toggleMessages}>
            <button className="ion-ios-chatbubbles header-iconsize" aria-label="Notifications" />
          </div>
          <div className="header-icon" onClick={this.toggleNotifications}>
            <button className="ion-ios-notifications header-iconsize" aria-label="Notifications" />
          </div>
          <div className="header-icon box-margin-right-small" onClick={this.toggleAccount}>
            <button className="ion-ios-contact header-iconsize" aria-label="Profile" />
          </div>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);