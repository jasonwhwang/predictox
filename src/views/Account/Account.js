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
    this.setState({ tab: t });
  }
  setCrypto(c) {
    this.setState({ crypto: c });
  }

  render() {
    return (
      <div className="account">
        <div className="a-profile">
          <img className="a-imgStyle" src={Logo} alt='Profile' />
          <div className="a-profileText">
            <div className="box-heading-big">Username</div>
            <div className="box-heading-mini">Member Status</div>
          </div>
          <div className="box-spacer"></div>
          <div className="a-follow">
            <button className="a-followbutton">Follow</button>
          </div>
        </div>

        <div className="a-profile">
          <div className="box-spacer">
            <div className="a-profilecenter box-heading-1">85%</div>
            <div className="a-profilecenter">Accuracy</div>
          </div>
          <div className="box-spacer">
            <div className="a-profilecenter box-heading-1">1800%</div>
            <div className="a-profilecenter">Payout</div>
          </div>
          <div className="box-spacer">
            <div className="a-profilecenter box-heading-1">35</div>
            <div className="a-profilecenter">Global Rank</div>
          </div>
        </div>

        <div className="h-bottomsection a-tablemargin">
          <div className="h-bottomflex">
            <input className="tabs" id="userpredictions" type="radio" name="tabs" defaultChecked={true} />
            <label className="userselect" htmlFor="userpredictions" onClick={() => this.setTab(0)}>
              <span className="userselect-name">80 <span className="a-tableheading">Predictions</span></span>
            </label>
          </div>
          <div className="h-bottomflex">
            <input className="tabs" id="followers" type="radio" name="tabs" />
            <label className="userselect" htmlFor="followers" onClick={() => this.setTab(1)}>
              <span className="userselect-name">200 <span className="a-tableheading">Followers</span></span>
            </label>
          </div>
          <div className="h-bottomflex">
            <input className="tabs" id="following" type="radio" name="tabs" />
            <label className="userselect" htmlFor="following" onClick={() => this.setTab(2)}>
              <span className="userselect-name">15 <span className="a-tableheading">Following</span></span>
            </label>
          </div>
        </div>

        {
          this.state.tab === 0 ?
            <div className="predictionranking-table h-tablemargin">
              <table className="uk-table uk-table-hover uk-table-middle">
                <thead>
                  <tr>
                  <th className="uk-width-small text-middle">Date</th>
                  <th className="uk-width-small text-middle">Name</th>
                    <th className="uk-width-small text-middle">Prediction</th>
                    <th className="uk-width-small text-middle"><button>Accuracy <i className="ion-ios-arrow-down"></i></button></th>
                    <th className="uk-width-small text-middle"><button>Payout <i className="ion-ios-arrow-down"></i></button></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                  <td className="text-middle">11/7</td>
                  <td className="text-middle">BTC</td>
                    <td className="text-middle">$7,000</td>
                    <td className="text-middle">85%</td>
                    <td className="text-middle">20%</td>
                  </tr>
                  <tr>
                  <td className="text-middle">11/2</td>
                  <td className="text-middle">BTC</td>
                    <td className="text-middle">$7,200</td>
                    <td className="text-middle">60%</td>
                    <td className="text-middle">35%</td>
                  </tr>
                  <tr>
                  <td className="text-middle">11/1</td>
                  <td className="text-middle">BTC</td>
                    <td className="text-middle">$7,500</td>
                    <td className="text-middle">95%</td>
                    <td className="text-middle">10%</td>
                  </tr>
                </tbody>
              </table>
            </div>
            :
            null
        }
      </div>
    );
  }
}

export default Account;