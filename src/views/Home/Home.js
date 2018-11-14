import React from 'react';
import './Home.css';

import { connect } from 'react-redux';
import Chart from './Chart';
import Chat from '../Chat/Chat';

const mapStateToProps = state => ({
  chatTab: state.common.chatTab
});

const mapDispatchToProps = dispatch => ({
  changeHeaderTab: (headerTab) =>
    dispatch({ type: 'HEADER_TAB', headerTab }),
  changeChatTab: (chatTab) =>
    dispatch({ type: 'CHAT_TAB', chatTab })
});

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      homeState: 0
    }
    this.chatToggle = this.chatToggle.bind(this);
  }

  chatToggle() {
    this.props.chatTab === 0 ? this.props.changeChatTab(1) : this.props.changeChatTab(0);
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
        {
          this.props.chatTab === 1 ? <Chat /> : null
        }
        <div className="h-coin">
          <div className="h-coinselect">
            <button className="h-coinselectflex">
              <span className="h-coinicon"><div className="h-coiniconflex"><i className="ion-logo-bitcoin"> </i></div></span>
              <span className="h-coinselecttext">Bitcoin</span>
            </button>
          </div>
          <div className="box-spacer"></div>
          <div className="h-predict"><button className="box-button-big h-marginRight" onClick={this.chatToggle}><div><i className="ion-ios-chatbubbles" aria-label="Chat"/></div></button></div>
          <div className="h-predict"><button className="box-button-big h-marginRight"><div><i className="ion-ios-list" aria-label="Graph & List"/></div></button></div>
          <div className="h-predict"><button className="box-button-big h-marginRight box-blue"><div><i className="ion-ios-add" aria-label="Add Prediction"/></div></button></div>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);