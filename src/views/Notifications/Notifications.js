import React from 'react';
import './Notifications.css';

import { connect } from 'react-redux';

import Logo from '../../img/predicto.png';

const mapStateToProps = state => ({
  headerTab: state.common.headerTab
});

const mapDispatchToProps = dispatch => ({

});

class Notifications extends React.Component {
  render() {
    return(
      <div className="notifications">
        <div className="n-notification">
          <div className="n-imgWrapper"><img src={Logo} className='n-img' alt='Notification' /></div>
          <div className="box-spacer n-details">
            <div className="box-heading-2">Notifiction</div>
            <div className="box-textGray n-text">Notification Details - notify user for any kind of notification</div>
          </div>
          <div className="n-time box-textGray">Time</div>
        </div>
        <div className="n-notification">
          <div className="n-imgWrapper"><img src={Logo} className='n-img' alt='Notification' /></div>
          <div className="box-spacer n-details">
            <div className="box-heading-2">Notifiction</div>
            <div className="box-textGray n-text">Notification Details</div>
          </div>
          <div className="n-time box-textGray">Time</div>
        </div>
        <div className="n-notification">
          <div className="n-imgWrapper"><img src={Logo} className='n-img' alt='Notification' /></div>
          <div className="box-spacer n-details">
            <div className="box-heading-2">Notifiction</div>
            <div className="box-textGray n-text">Notification Details</div>
          </div>
          <div className="n-time box-textGray">Time</div>
        </div>
        <div className="n-notification">
          <div className="n-imgWrapper"><img src={Logo} className='n-img' alt='Notification' /></div>
          <div className="box-spacer n-details">
            <div className="box-heading-2">Notifiction</div>
            <div className="box-textGray n-text">Notification Details</div>
          </div>
          <div className="n-time box-textGray">Time</div>
        </div>
        <div className="n-notification">
          <div className="n-imgWrapper"><img src={Logo} className='n-img' alt='Notification' /></div>
          <div className="box-spacer n-details">
            <div className="box-heading-2">Notifiction</div>
            <div className="box-textGray n-text">Notification Details</div>
          </div>
          <div className="n-time box-textGray">Time</div>
        </div>
        <div className="n-notification">
          <div className="n-imgWrapper"><img src={Logo} className='n-img' alt='Notification' /></div>
          <div className="box-spacer n-details">
            <div className="box-heading-2">Notifiction</div>
            <div className="box-textGray n-text">Notification Details</div>
          </div>
          <div className="n-time box-textGray">Time</div>
        </div>
        <div className="n-notification">
          <div className="n-imgWrapper"><img src={Logo} className='n-img' alt='Notification' /></div>
          <div className="box-spacer n-details">
            <div className="box-heading-2">Notifiction</div>
            <div className="box-textGray n-text">Notification Details</div>
          </div>
          <div className="n-time box-textGray">Time</div>
        </div>
        <div className="n-notification">
          <div className="n-imgWrapper"><img src={Logo} className='n-img' alt='Notification' /></div>
          <div className="box-spacer n-details">
            <div className="box-heading-2">Notifiction</div>
            <div className="box-textGray n-text">Notification Details</div>
          </div>
          <div className="n-time box-textGray">Time</div>
        </div>
        <div className="n-notification">
          <div className="n-imgWrapper"><img src={Logo} className='n-img' alt='Notification' /></div>
          <div className="box-spacer n-details">
            <div className="box-heading-2">Notifiction</div>
            <div className="box-textGray n-text">Notification Details</div>
          </div>
          <div className="n-time box-textGray">Time</div>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Notifications);