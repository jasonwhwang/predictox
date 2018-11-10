import React from 'react';
import './Rightbar.css';

import { connect } from 'react-redux';

const mapStateToProps = state => ({
  headerTab: state.common.headerTab
});

const mapDispatchToProps = dispatch => ({

});

class Rightbar extends React.Component {
  render() {
    return(
      <div className="rightbar-main rightbar-right color" id="mainRightbar">
        <div className="sidebar-topPadding"></div>
        <div className="rightbar-contents">
          {
            this.props.headerTab ?
              <div>Account</div>
              :
              <div>Notifications</div>
          }
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Rightbar);