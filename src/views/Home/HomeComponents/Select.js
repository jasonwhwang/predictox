import React from 'react';

class Select extends React.Component {
  render() {
    return (
      <div className="h-modal box-flexRow">
        <div className="h-modalContainer">
          <div className="h-modalItem">
            <button className="h-coinselectflex box-flexRow h-modalItemLeftMargin" onClick={this.toggleSelect}>
              <span className="h-coinicon box-flexRow"><div className="h-coiniconflex"><i className="ion-logo-bitcoin"> </i></div></span>
              <span className="h-coinselecttext">Bitcoin</span>
            </button>
          </div>
          <div className="h-modalItem">
            <button className="h-coinselectflex box-flexRow h-modalItemLeftMargin" onClick={this.toggleSelect}>
              <span className="h-coinicon box-flexRow"><div className="h-coiniconflex"><i className="ion-logo-bitcoin"> </i></div></span>
              <span className="h-coinselecttext">Ethereum</span>
            </button>
          </div>
          <div className="h-modalItem">
            <button className="h-coinselectflex box-flexRow h-modalItemLeftMargin" onClick={this.toggleSelect}>
              <span className="h-coinicon box-flexRow"><div className="h-coiniconflex"><i className="ion-logo-bitcoin"> </i></div></span>
              <span className="h-coinselecttext">Ripple</span>
            </button>
          </div>
          <div className="h-modalItem">
            <button className="h-coinselectflex box-flexRow h-modalItemLeftMargin" onClick={this.toggleSelect}>
              <span className="h-coinicon box-flexRow"><div className="h-coiniconflex"><i className="ion-logo-bitcoin"> </i></div></span>
              <span className="h-coinselecttext">Bitcoin Cash</span>
            </button>
          </div>
          <div className="h-modalItem">
            <button className="h-coinselectflex box-flexRow h-modalItemLeftMargin" onClick={this.toggleSelect}>
              <span className="h-coinicon box-flexRow"><div className="h-coiniconflex"><i className="ion-logo-bitcoin"> </i></div></span>
              <span className="h-coinselecttext">Stellar</span>
            </button>
          </div>
          <div className="h-modalItem">
            <button className="h-coinselectflex box-flexRow h-modalItemLeftMargin" onClick={this.toggleSelect}>
              <span className="h-coinicon box-flexRow"><div className="h-coiniconflex"><i className="ion-logo-bitcoin"> </i></div></span>
              <span className="h-coinselecttext">EOS</span>
            </button>
          </div>
          <div className="h-modalItem">
            <button className="h-coinselectflex box-flexRow h-modalItemLeftMargin" onClick={this.toggleSelect}>
              <span className="h-coinicon box-flexRow"><div className="h-coiniconflex"><i className="ion-logo-bitcoin"> </i></div></span>
              <span className="h-coinselecttext">Litecoin</span>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Select;