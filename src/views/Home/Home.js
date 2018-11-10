import React from 'react';
import './Home.css';

import { connect } from 'react-redux';
import Chart from './Chart';

const mapStateToProps = state => ({

});

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      homeState: 0
    }
  }

  render() {
    return (
      <div className="home">
        {
          this.state.homeState === 0 ?
            <div className="h-chartloc"><Chart /></div>
            :
            null
        }
        
        <div className="h-coin">
          <div className="h-coinselect">
            <button className="h-coinselectflex">
              <span className="h-coinicon"><div className="h-coiniconflex"><i className="ion-logo-bitcoin"> </i></div></span>
              <span className="h-coinselecttext">Bitcoin</span>
            </button>
          </div>
          <div className="box-spacer"></div>
          <div className="h-predict"><button className="box-button-big h-marginRight"><div><i className="ion-ios-list" /></div></button></div>
          <div className="h-predict"><button className="box-button-big h-marginRight box-blue"><div><i className="ion-ios-add" /></div></button></div>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps)(Home);