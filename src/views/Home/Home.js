import React from 'react';
import './Home.css';

import { connect } from 'react-redux';
import Chart from './Chart';
import HomeList from './HomeList';

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({
  changeHeaderTab: (headerTab) =>
    dispatch({ type: 'HEADER_TAB', headerTab })
});

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      homeState: 0
    }
    this.toggleGraph = this.toggleGraph.bind(this);
  }

  toggleGraph() {
    this.setState({ homeState: this.state.homeState === 0 ? 1 : 0 });
  }

  render() {
    return (
      <div className="home">
        {
          this.state.homeState === 0 ?
            <div className="h-chartloc"><Chart /></div>
            :
            <HomeList />
        }
        <div className="h-coin">
          <div className="h-coinselect">
            <button className="h-coinselectflex">
              <span className="h-coinicon"><div className="h-coiniconflex"><i className="ion-logo-bitcoin"> </i></div></span>
              <span className="h-coinselecttext">Bitcoin</span>
            </button>
          </div>
          <div className="box-spacer"></div>
          <div className="h-predict">
            <button className="box-button-big h-marginRight" onClick={this.toggleGraph}>
              <div>
                {
                  this.state.homeState === 0 ?
                    <i className="ion-ios-list" aria-label="List" />
                    :
                    <i className="ion-ios-trending-up" aria-label="Graph" />
                }
              </div>
            </button>
          </div>
          <div className="h-predict"><button className="box-button-big h-marginRight box-blue"><div><i className="ion-ios-add" aria-label="Add Prediction" /></div></button></div>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);