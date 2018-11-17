import React from 'react';
import './Add.css';

class Add extends React.Component {
  render() {
    return (
      <div className="h-modal box-flexRow">
        <div className="h-modalContainer box-flexCol h-flexCenter">
          <button className="h-addDate box-text-2 box-textBold">November 7, 2018</button>
          <div>
            <input className="h-addHeight box-textCenter"></input>
            <div className=" box-textBold box-textGray box-textCenter h-addMarginTopSmall">Prediction</div>
          </div>
          <div>
            <input className="h-addHeight box-textCenter"></input>
            <div className="box-textBold box-textGray box-textCenter h-addMarginTopSmall">Stakes</div>
          </div>
          <button className="box-button-big h-addButton box-blue">Submit</button>
        </div>
      </div>
    );
  }
}

export default Add;