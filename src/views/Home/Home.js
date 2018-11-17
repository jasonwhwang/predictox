import React from 'react';
import './Home.css';

import { connect } from 'react-redux';
import Chart from './HomeComponents/Chart';
import HomeList from './HomeComponents/HomeList';
import Add from './HomeComponents/Add';
import Select from './HomeComponents/Select';


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
      homeState: 0,
      add: 0,
      select: 0
    }
    this.toggleGraph = this.toggleGraph.bind(this);
    this.toggleAdd = this.toggleAdd.bind(this);
    this.toggleSelect = this.toggleSelect.bind(this);
  }

  toggleGraph() {
    this.setState({ homeState: this.state.homeState === 0 ? 1 : 0 });
  }
  toggleAdd() {
    this.setState({ add: this.state.add === 0 ? 1 : 0, select: 0 });
  }
  toggleSelect() {
    this.setState({ select: this.state.select === 0 ? 1 : 0, add: 0 });
  }

  render() {
    return (
      <div className="home">
        {
          this.state.select === 1 ?
            <Select />
            :
            null
        }
        {
          this.state.add === 1 ? 
            <Add />
            :
            null
        }
        {
          this.state.homeState === 0 ?
            <div className="h-chartloc"><Chart /></div>
            :
            <HomeList />
        }
        <div className="h-coin box-flexRow">
          <div className="h-coinselect">
            <button className="h-coinselectflex box-flexRow" onClick={this.toggleSelect}>
              <span className="h-coinicon box-flexRow"><div className="h-coiniconflex"><i className="ion-logo-bitcoin"> </i></div></span>
              <span className="h-coinselecttext">Bitcoin</span>
            </button>
          </div>
          <div className="box-spacer"></div>
          <div className="box-flexRow">
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
          <div className="box-flexRow"><button className="box-button-big h-marginRight box-blue" onClick={this.toggleAdd}><div><i className="ion-ios-add" aria-label="Add Prediction" /></div></button></div>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);