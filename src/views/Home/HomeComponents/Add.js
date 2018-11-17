import React from 'react';
import './Add.css';

class Add extends React.Component {
  render() {
    return (
      <div className="h-modal box-flexRow">
        <div className="h-modalContainer box-flexCol">
          <button className="h-addDate box-text-2 box-textBold h-addMarginTopBig">November 7, 2018</button>
          <input className="h-addHeight h-addMarginTopBig box-textCenter"></input>
          <div className="h-addMarginTopSmall box-textBold box-textGray">Prediction</div>
          <input className="h-addHeight h-addMarginTopBig box-textCenter"></input>
          <div className="h-addMarginTopSmall box-textBold box-textGray">Stakes</div>
          <button className="h-addMarginTopBig box-button-big h-addButton box-blue">Submit</button>
        </div>
      </div>
    );
  }
}

export default Add;