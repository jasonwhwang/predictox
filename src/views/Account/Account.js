import React from 'react';
import './Account.css';
import Logo from '../../img/predicto.png';

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
            <img className="a-imgStyle" src={Logo} alt='Profile' />
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
              <div className="a-predictions">
                <div className="a-tableWidth box-textCenter a-tableHeader">
                  <div className="a-tableSmall box-textGray">Date</div>
                  <div className="a-tableSmall box-textGray">Name</div>
                  <div className="box-spacer box-textGray">Prediction</div>
                  <div className="a-tableMedium box-textGray">Accuracy</div>
                  <div className="a-tableMedium box-textGray">Payout</div>
                </div>
                <div className="a-tableBody">
                  <div className="a-tableWidth box-textCenter a-cell">
                    <div className="a-tableSmall box-text-3">11/7</div>
                    <div className="a-tableSmall box-textBold">BTC</div>
                    <div className="box-spacer box-heading-2">$7,000</div>
                    <div className="a-tableMedium box-heading-2">85</div>
                    <div className="a-tableMedium box-heading-2">20%</div>
                  </div>
                  <div className="a-tableWidth box-textCenter a-cell">
                    <div className="a-tableSmall box-text-3">11/7</div>
                    <div className="a-tableSmall box-textBold">BTC</div>
                    <div className="box-spacer box-heading-2">$7,000</div>
                    <div className="a-tableMedium box-heading-2">85</div>
                    <div className="a-tableMedium box-heading-2">20%</div>
                  </div>
                  <div className="a-tableWidth box-textCenter a-cell">
                    <div className="a-tableSmall box-text-3">11/7</div>
                    <div className="a-tableSmall box-textBold">BTC</div>
                    <div className="box-spacer box-heading-2">$7,000</div>
                    <div className="a-tableMedium box-heading-2">85</div>
                    <div className="a-tableMedium box-heading-2">20%</div>
                  </div>
                  <div className="a-tableWidth box-textCenter a-cell">
                    <div className="a-tableSmall box-text-3">11/7</div>
                    <div className="a-tableSmall box-textBold">BTC</div>
                    <div className="box-spacer box-heading-2">$7,000</div>
                    <div className="a-tableMedium box-heading-2">85</div>
                    <div className="a-tableMedium box-heading-2">20%</div>
                  </div>
                  <div className="a-tableWidth box-textCenter a-cell">
                    <div className="a-tableSmall box-text-3">11/7</div>
                    <div className="a-tableSmall box-textBold">BTC</div>
                    <div className="box-spacer box-heading-2">$7,000</div>
                    <div className="a-tableMedium box-heading-2">85</div>
                    <div className="a-tableMedium box-heading-2">20%</div>
                  </div>
                  <div className="a-tableWidth box-textCenter a-cell">
                    <div className="a-tableSmall box-text-3">11/7</div>
                    <div className="a-tableSmall box-textBold">BTC</div>
                    <div className="box-spacer box-heading-2">$7,000</div>
                    <div className="a-tableMedium box-heading-2">85</div>
                    <div className="a-tableMedium box-heading-2">20%</div>
                  </div>
                  <div className="a-tableWidth box-textCenter a-cell">
                    <div className="a-tableSmall box-text-3">11/7</div>
                    <div className="a-tableSmall box-textBold">BTC</div>
                    <div className="box-spacer box-heading-2">$7,000</div>
                    <div className="a-tableMedium box-heading-2">85</div>
                    <div className="a-tableMedium box-heading-2">20%</div>
                  </div>
                </div>
              </div>
              :
              null
          }
        </div>
      </div>
    );
  }
}

export default Account;