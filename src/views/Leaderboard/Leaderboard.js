import React from 'react';
import './Leaderboard.css';

import { connect } from 'react-redux';

import Logo from '../../img/predicto.png';

const mapStateToProps = state => ({

});

class Leaderboard extends React.Component {

  render() {
    return (
      <div className="users">
        <div className="u-topBar">
          <button className="box-buttonLine box-margin-right-medium">All Time</button>
          <button className="box-buttonLine box-margin-right-medium">Legendary</button>
          <button className="box-buttonLine">North America</button>
        </div>
        <div className="u-body">
          <div className="a-followingUser">
            <div className="a-followingImgWrapper"><img className="a-followingImg" src={Logo} alt='Profile' /></div>
            <div className="a-fName box-spacer">
              <div className="box-text-2 box-textBold">Username</div>
              <div className="box-text-3 box-textCaps box-textBold box-textGray">Legendary <i className="ion-ios-ribbon box-margin-left-small" /> 35</div>
            </div>
            <div className="box-text-3 box-textGray box-margin-right-small">active<span className="box-textBold box-margin-left-small">8 hrs ago</span></div>
          </div>
          <div className="a-followingUser">
          <div className="a-followingImgWrapper"><img className="a-followingImg" src={Logo} alt='Profile' /></div>
          <div className="a-fName box-spacer">
            <div className="box-text-2 box-textBold">Username</div>
            <div className="box-text-3 box-textCaps box-textBold box-textGray">Legendary <i className="ion-ios-ribbon box-margin-left-small" /> 35</div>
          </div>
          <div className="box-text-3 box-textGray box-margin-right-small">active<span className="box-textBold box-margin-left-small">8 hrs ago</span></div>
        </div>
        <div className="a-followingUser">
          <div className="a-followingImgWrapper"><img className="a-followingImg" src={Logo} alt='Profile' /></div>
          <div className="a-fName box-spacer">
            <div className="box-text-2 box-textBold">Username</div>
            <div className="box-text-3 box-textCaps box-textBold box-textGray">Legendary <i className="ion-ios-ribbon box-margin-left-small" /> 35</div>
          </div>
          <div className="box-text-3 box-textGray box-margin-right-small">active<span className="box-textBold box-margin-left-small">8 hrs ago</span></div>
        </div>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps)(Leaderboard);