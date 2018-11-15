import React from 'react';
import './Rightbar.css';

import { connect } from 'react-redux';

import Account from '../Account/Account';
import Notifications from '../Notifications/Notifications';
import Chat from '../Chat/Chat';

const mapStateToProps = state => ({
  headerTab: state.common.headerTab
});

const mapDispatchToProps = dispatch => ({

});

class Rightbar extends React.Component {
  render() {
    return(
      <div className="rightbar-main rightbar-right" id="mainRightbar">
        <div className="rightbar-contents">
          {
            this.props.headerTab === 1 ?
              <Account />
              :
              null
          }
          {
            this.props.headerTab === 0 ?
              <Notifications />
              :
              null
          }
          {
            this.props.headerTab === 2 ?
              <Chat />
              :
              null
          }
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Rightbar);