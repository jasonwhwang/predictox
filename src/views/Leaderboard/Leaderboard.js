import React from 'react';
import './Leaderboard.css';

import { connect } from 'react-redux';

import Logo from '../../img/predicto.png';

const mapStateToProps = state => ({

});

class Leaderboard extends React.Component {
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
      <div className="users">
        <div className="u-margin">
          <div className="predictionranking-buttons">
            <div className="u-toggle">
              <div className="u-togglesection">
                <input className="tabs" id="toppredictions" type="radio" name="tabs" defaultChecked={true} />
                <label className="userselect" htmlFor="toppredictions" onClick={() => this.setTab(0)}>
                  <span className="userselect-name">Top Users</span>
                </label>
              </div>
              <div className="u-togglesection">
                <input className="tabs" id="topmodels" type="radio" name="tabs" />
                <label className="userselect" htmlFor="topmodels" onClick={() => this.setTab(1)}>
                  <span className="userselect-name">Top Predictions</span>
                </label>
              </div>
            </div>

            {/* <div className="box-spacer"></div>
            <div className="home-toggle">
              <input className="tabs" id="pdxcrypto" type="radio" name="crypto" defaultChecked={true} />
              <label className="cryptoselect" htmlFor="pdxcrypto" onClick={() => this.setCrypto(0)}>
                <span className="cryptoselect-name">PDX</span>
              </label>
              <input className="tabs" id="ethcrypto" type="radio" name="crypto" />
              <label className="cryptoselect" htmlFor="ethcrypto" onClick={() => this.setCrypto(1)}>
                <span className="cryptoselect-name">ETH</span>
              </label>
            </div> */}
          </div>

          {
            this.state.tab === 0 ?
              <div className="home-buttons">
                <button className="button">All Time <i className="ion-ios-arrow-down"></i></button>
                <div className="uk-dropdown" uk-dropdown="mode: click">
                  <ul className="uk-nav uk-dropdown-nav">
                    <li className="header-dropdowntext"><button>All Time</button></li>
                    <li className="header-dropdowntext"><button>Month</button></li>
                    <li className="header-dropdowntext"><button>Week</button></li>
                    <li className="header-dropdowntext"><button>Day</button></li>
                  </ul>
                </div>
                <button className="button button-marginleft">Legendary <i className="ion-ios-arrow-down"></i></button>
                <div className="uk-dropdown" uk-dropdown="mode: click">
                  <ul className="uk-nav uk-dropdown-nav">
                    <li className="header-dropdowntext"><button>Legendary</button></li>
                    <li className="header-dropdowntext"><button>Expert</button></li>
                    <li className="header-dropdowntext"><button>Novice</button></li>
                  </ul>
                </div>
                <button className="button button-marginleft">World <i className="ion-ios-arrow-down"></i></button>
                <div className="uk-dropdown" uk-dropdown="mode: click">
                  <ul className="uk-nav uk-dropdown-nav">
                    <li className="header-dropdowntext"><button>World</button></li>
                    <li className="header-dropdowntext"><button>USA</button></li>
                    <li className="header-dropdowntext"><button>Asia</button></li>
                    <li className="header-dropdowntext"><button>Europe</button></li>
                  </ul>
                </div>
              </div>
              : null
          }

          {
            this.state.tab === 0 ?
              <div className="predictionranking-table">
                <table className="uk-table uk-table-hover uk-table-middle">
                  <thead>
                    <tr>
                      <th className="uk-width-small text-middle">Rank</th>
                      <th className="uk-width-medium">User</th>
                      <th className="uk-width-small text-middle"><button>Followers <i className="ion-ios-arrow-down"></i></button></th>
                      <th className="uk-width-small text-middle"><button>Predictions <i className="ion-ios-arrow-down"></i></button></th>
                      <th className="uk-width-small text-middle"><button>Accuracy <i className="ion-ios-arrow-down"></i></button></th>
                      <th className="uk-width-small text-middle"><button>Payout <i className="ion-ios-arrow-down"></i></button></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="text-middle">1</td>
                      <td><img className="uk-preserve-width uk-border-circle" src={Logo} width="25" alt="" /> User 1</td>
                      <td className="text-middle">300</td>
                      <td className="text-middle">150</td>
                      <td className="text-middle">75%</td>
                      <td className="text-middle">1500% PDX</td>
                    </tr>
                    <tr>
                      <td className="text-middle">2</td>
                      <td><img className="uk-preserve-width uk-border-circle" src={Logo} width="25" alt="" /> User 2</td>
                      <td className="text-middle">250</td>
                      <td className="text-middle">100</td>
                      <td className="text-middle">85%</td>
                      <td className="text-middle">900% PDX</td>
                    </tr>
                    <tr>
                      <td className="text-middle">3</td>
                      <td><img className="uk-preserve-width uk-border-circle" src={Logo} width="25" alt="" /> User 3</td>
                      <td className="text-middle">90</td>
                      <td className="text-middle">50</td>
                      <td className="text-middle">95%</td>
                      <td className="text-middle">120% PDX</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              : null
          }


        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps)(Leaderboard);