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
    this.toggleHeader = this.toggleHeader.bind(this);
  }

  toggleSidebar() {
    if (document.getElementById("mainSidebar").style.transform === "translateX(0px)") {
      document.getElementById("mainSidebar").style.transform = "translateX(-300px)";
    } else {
      if (document.getElementById("mainRightbar").style.marginRight === "0px") {
        if (window.innerWidth > 600) {
          document.getElementById("mainRightbar").style.marginRight = "-40vw";
        } else {
          document.getElementById("mainRightbar").style.marginRight = "-100vw";
        }
      }
      document.getElementById("mainSidebar").style.transform = "translateX(0px)";
    }
  }

  toggleHeader(val) {
    if (document.getElementById("mainRightbar").style.marginRight === "0px") {
      if (this.props.headerTab === val) {
        if (window.innerWidth > 600) {
          document.getElementById("mainRightbar").style.marginRight = "-40vw";
        } else {
          document.getElementById("mainRightbar").style.marginRight = "-100vw";
        }
      }
      this.props.changeHeaderTab(val);
    } else {
      this.props.changeHeaderTab(val);
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
          <div className="header-icon" onClick={() => {this.toggleHeader(2)}}>
            <button className="ion-ios-chatbubbles header-iconsize" aria-label="Chat" />
          </div>
          <div className="header-icon" onClick={() => {this.toggleHeader(0)}}>
            <button className="ion-ios-notifications header-iconsize" aria-label="Notifications" />
          </div>
          <div className="header-icon box-margin-right-small" onClick={() => {this.toggleHeader(1)}}>
            <button className="ion-ios-contact header-iconsize" aria-label="Profile" />
          </div>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);