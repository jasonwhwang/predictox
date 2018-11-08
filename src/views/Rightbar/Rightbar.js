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
      <div className="sidebar-main sidebar-right color" id="mainRightbar">
        <div className="sidebar-topPadding"></div>
        <div className="rightbar-contents">
          {
            this.props.headerTab ?
              <div>Profile</div>
              :
              <div>Notifications</div>
          }
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Rightbar);