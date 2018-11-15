import React from 'react';
import './Home.css';

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
    this.setState({ tab: t });
  }
  setCrypto(c) {
    this.setState({ crypto: c });
  }

  render() {
    return (
      <div>
        <div className="h-details">
          <div className="box-heading-1">November 7, 2018</div>
          <div className="h-detailsnumbers">
            <div className="h-detailsblock">
              <div className="box-heading-big">$6500</div>
              <div className="box-heading-mini">Average Prediction</div>
            </div>
            <div className="h-detailsblock">
              <div className="box-heading-big">500</div>
              <div className="box-heading-mini">Total Predictions</div>
            </div>
            <div className="h-detailsblock">
              <div className="box-heading-big">$3500P</div>
              <div className="box-heading-mini">Total Investment</div>
            </div>
          </div>
        </div>


        <div className="h-bottomsection h-bottomsectionmargin">
          <div className="h-bottomflex">
            <input className="tabs" id="homepredictions" type="radio" name="tabs" defaultChecked={true} />
            <label className="userselect" htmlFor="homepredictions" onClick={() => this.setTab(0)}>
              <span className="userselect-name">Predictions</span>
            </label>
          </div>
          <div className="h-bottomflex">
            <input className="tabs" id="homemodels" type="radio" name="tabs" />
            <label className="userselect" htmlFor="homemodels" onClick={() => this.setTab(1)}>
              <span className="userselect-name">Top Users</span>
            </label>
          </div>
          <div className="h-bottomflex">
            <input className="tabs" id="homeusers" type="radio" name="tabs" />
            <label className="userselect" htmlFor="homeusers" onClick={() => this.setTab(2)}>
              <span className="userselect-name">Discussions</span>
            </label>
          </div>
        </div>

        {
          this.state.tab === 0 ?
            <div className="predictionranking-table h-tablemargin">
              <table className="">
                <thead>
                  <tr>
                    <th className="uk-width-small text-middle">Prediction</th>
                    <th className="uk-width-small text-middle"><button>Total <i className="ion-ios-arrow-down"></i></button></th>
                    <th className="uk-width-small text-middle"><button>Odds <i className="ion-ios-arrow-down"></i></button></th>
                    <th className="uk-width-small text-middle"><button>Stakes <i className="ion-ios-arrow-down"></i></button></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="text-middle">$7,000</td>
                    <td className="text-middle">500</td>
                    <td className="text-middle">3 : 5</td>
                    <td className="text-middle">$1000</td>
                  </tr>
                  <tr>
                    <td className="text-middle">$7,200</td>
                    <td className="text-middle">400</td>
                    <td className="text-middle">3 : 5</td>
                    <td className="text-middle">$750</td>
                  </tr>
                  <tr>
                    <td className="text-middle">$7,500</td>
                    <td className="text-middle">350</td>
                    <td className="text-middle">3 : 5</td>
                    <td className="text-middle">$500</td>
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

export default connect(mapStateToProps)(HomeList);