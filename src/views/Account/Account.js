import React from 'react';
import './Account.css';
import Logo from '../../img/predicto.png';
import AccountPredictions from './AccountComponents/AccountPredictions';
import AccountFollowings from './AccountComponents/AccountFollowings';
import AccountDiscussions from './AccountComponents/AccountDiscussions';

class Account extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tab: 0,
      crypto: 0
    }
  }

  setTab(t) {
    document.getElementById("a-toggle" + this.state.tab).style.backgroundColor = "transparent";
    document.getElementById("a-toggle" + t).style.backgroundColor = "var(--darkgray)";
    this.setState({ tab: t });
  }
  setCrypto(c) {
    this.setState({ crypto: c });
  }

  render() {
    return (
      <div className="account">
        <div className="a-profile">
          <div className="a-profileFlex box-margin-bottom-small">
            <div className="a-profileImg"><img className="a-imgStyle" src={Logo} alt='Profile' /></div>
            <div className="a-profileText">
              <div className="box-heading-1">Username</div>
              <div className="box-text-3 box-textCaps box-textBold box-textGray">Legendary</div>
              <div className="a-iconsMargin a-verticalAlign box-textGray">
                <i className="ion-md-locate" /><span className="box-text-3 box-textBold box-margin-left-space">85</span>
                <i className="ion-md-arrow-round-up box-margin-left-medium" /><span className="box-text-3 box-textBold box-margin-left-space">1800<span className="box-text-3">%</span></span>
                <i className="ion-ios-ribbon box-margin-left-medium" /><span className="box-text-3 box-textBold box-margin-left-space">35</span>
              </div>
            </div>
            <div className="a-follow">
              <button className="a-followbutton">Follow</button>
            </div>
          </div>
        </div>

        <div className="a-details">
          <div className="a-detailsSection">
            <div className="a-detailsFlex">
              <div className="" onClick={() => this.setTab(0)}>
                <span>80 </span><span className="box-heading-3">Predictions</span>
                <div className="a-detailsToggle" id="a-toggle0"></div>
              </div>
            </div>
            <div className="a-detailsFlex">
              <div className="" onClick={() => this.setTab(1)}>
                <span>20 </span><span className="box-heading-3">Discussions</span>
                <div className="a-detailsToggle" id="a-toggle1"></div>
              </div>
            </div>
            <div className="a-detailsFlex">
              <div className="" onClick={() => this.setTab(2)}>
                <span>15 </span><span className="box-heading-3">Following</span>
                <div className="a-detailsToggle" id="a-toggle2"></div>
              </div>
            </div>
          </div>

          {
            this.state.tab === 0 ?
              <AccountPredictions />
              :
              null
          }
          {
            this.state.tab === 1 ?
              <AccountDiscussions />
              :
              null
          }
          {
            this.state.tab === 2 ?
              <AccountFollowings />
              :
              null
          }
        </div>
      </div>
    );
  }
}

export default Account;