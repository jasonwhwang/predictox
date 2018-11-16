import React from 'react';
import './Home.css';
import Logo from '../../img/predicto.png';

import { connect } from 'react-redux';

const mapStateToProps = state => ({

});

class HomeList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tab: 0,
      crypto: 0
    }
  }

  setTab(t) {
    document.getElementById("h-toggle" + this.state.tab).style.backgroundColor = "transparent";
    document.getElementById("h-toggle" + t).style.backgroundColor = "var(--darkgray)";
    this.setState({ tab: t });
  }

  render() {
    return (
      <div className="h-homeList">
        <div className="h-date">
          <button className="h-dateButton">November 7</button>
        </div>
        <div className="a-detailsSection">
          <div className="a-detailsFlex">
            <div className="" onClick={() => this.setTab(0)}>
              <span className="box-heading-3">Predictions</span>
              <div className="a-detailsToggle" id="h-toggle0"></div>
            </div>
          </div>
          <div className="a-detailsFlex">
            <div className="" onClick={() => this.setTab(1)}>
              <span className="box-heading-3">Users</span>
              <div className="a-detailsToggle" id="h-toggle1"></div>
            </div>
          </div>
          <div className="a-detailsFlex">
            <div className="" onClick={() => this.setTab(2)}>
              <span className="box-heading-3">Discussions</span>
              <div className="a-detailsToggle" id="h-toggle2"></div>
            </div>
          </div>
        </div>
        {
          this.state.tab === 0 ?
            <div className="h-containerMargins">
              <div className="h-predictionLabel">
                <div className="h-pLabelText box-margin-left-medium">
                  <div className="box-text-2 box-textBold">$6,500</div>
                  <div className="box-text-3 box-textGray">Average</div>
                </div>
                <div className="h-pLabelText">
                  <div className="box-text-2 box-textBold">550</div>
                  <div className="box-text-3 box-textGray">Total</div>
                </div>
                <div className="h-pLabelText box-margin-right-medium">
                  <div className="box-text-2 box-textBold">$3,700</div>
                  <div className="box-text-3 box-textGray">Stakes</div>
                </div>
              </div>
              <div className="a-tableWidth box-textCenter a-tableHeader">
                <div className="box-spacer box-textGray box-text-3">Prediction</div>
                <div className="box-spacer box-textGray box-text-3">Total</div>
                <div className="box-spacer box-textGray box-text-3">Odds</div>
                <div className="box-spacer box-textGray box-text-3">Stakes</div>
              </div>
              <div className="a-tableBody">
                <div className="a-tableWidth box-textCenter a-cell">
                  <div className="box-spacer box-text-2">$7,000</div>
                  <div className="box-spacer box-text-2">300</div>
                  <div className="box-spacer box-text-2">3:5</div>
                  <div className="box-spacer box-text-2">$2500</div>
                </div>
                <div className="a-tableWidth box-textCenter a-cell">
                  <div className="box-spacer box-text-2">$6,500</div>
                  <div className="box-spacer box-text-2">150</div>
                  <div className="box-spacer box-text-2">3:5</div>
                  <div className="box-spacer box-text-2">$700</div>
                </div>
                <div className="a-tableWidth box-textCenter a-cell">
                  <div className="box-spacer box-text-2">$6,000</div>
                  <div className="box-spacer box-text-2">100</div>
                  <div className="box-spacer box-text-2">3:5</div>
                  <div className="box-spacer box-text-2">$500</div>
                </div>
              </div>
            </div>
            :
            null
        }
        {
          this.state.tab === 1 ?
            <div className="h-containerMargins">
              <div className="a-followingUser">
                <div className="a-followingImgWrapper"><img className="a-followingImg" src={Logo} alt='Profile' /></div>
                <div className="a-fName box-spacer">
                  <div className="box-text-2 box-textBold">Username</div>
                  <div className="box-text-3 box-textCaps box-textBold box-textGray">Legendary <i className="ion-ios-ribbon box-margin-left-small" /> 35</div>
                </div>
                <div className="box-text-3 box-textGray box-margin-right-small">Prediction:<span className="box-textBold box-margin-left-small">$6,700</span></div>
              </div>
              <div className="a-followingUser">
                <div className="a-followingImgWrapper"><img className="a-followingImg" src={Logo} alt='Profile' /></div>
                <div className="a-fName box-spacer">
                  <div className="box-text-2 box-textBold">Username</div>
                  <div className="box-text-3 box-textCaps box-textBold box-textGray">Legendary <i className="ion-ios-ribbon box-margin-left-small" /> 35</div>
                </div>
                <div className="box-text-3 box-textGray box-margin-right-small">Prediction:<span className="box-textBold box-margin-left-small">$6,700</span></div>
              </div>
              <div className="a-followingUser">
                <div className="a-followingImgWrapper"><img className="a-followingImg" src={Logo} alt='Profile' /></div>
                <div className="a-fName box-spacer">
                  <div className="box-text-2 box-textBold">Username</div>
                  <div className="box-text-3 box-textCaps box-textBold box-textGray">Legendary <i className="ion-ios-ribbon box-margin-left-small" /> 35</div>
                </div>
                <div className="box-text-3 box-textGray box-margin-right-small">Prediction:<span className="box-textBold box-margin-left-small">$6,700</span></div>
              </div>
              <div className="a-followingUser">
                <div className="a-followingImgWrapper"><img className="a-followingImg" src={Logo} alt='Profile' /></div>
                <div className="a-fName box-spacer">
                  <div className="box-text-2 box-textBold">Username</div>
                  <div className="box-text-3 box-textCaps box-textBold box-textGray">Legendary <i className="ion-ios-ribbon box-margin-left-small" /> 35</div>
                </div>
                <div className="box-text-3 box-textGray box-margin-right-small">Prediction:<span className="box-textBold box-margin-left-small">$6,700</span></div>
              </div>
              <div className="a-followingUser">
                <div className="a-followingImgWrapper"><img className="a-followingImg" src={Logo} alt='Profile' /></div>
                <div className="a-fName box-spacer">
                  <div className="box-text-2 box-textBold">Username</div>
                  <div className="box-text-3 box-textCaps box-textBold box-textGray">Legendary <i className="ion-ios-ribbon box-margin-left-small" /> 35</div>
                </div>
                <div className="box-text-3 box-textGray box-margin-right-small">Prediction:<span className="box-textBold box-margin-left-small">$6,700</span></div>
              </div>
              <div className="a-followingUser">
                <div className="a-followingImgWrapper"><img className="a-followingImg" src={Logo} alt='Profile' /></div>
                <div className="a-fName box-spacer">
                  <div className="box-text-2 box-textBold">Username</div>
                  <div className="box-text-3 box-textCaps box-textBold box-textGray">Legendary <i className="ion-ios-ribbon box-margin-left-small" /> 35</div>
                </div>
                <div className="box-text-3 box-textGray box-margin-right-small">Prediction:<span className="box-textBold box-margin-left-small">$6,700</span></div>
              </div>
            </div>
            :
            null
        }
      </div>
    );
  }
}

export default connect(mapStateToProps)(HomeList);