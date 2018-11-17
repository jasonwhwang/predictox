import React from 'react';

class HomeDate extends React.Component {
  render() {
    return (
      <div className="h-modal box-flexRow">
        <div className="h-modalContainer">
          <button className="h-addDate box-text-3 box-textBold box-borderBottom" onClick={this.props.dateToggle}>November 7, 2018</button>
          <button className="h-addDate box-text-3 box-textBold box-borderBottom" onClick={this.props.dateToggle}>November 7, 2018</button>
          <button className="h-addDate box-text-3 box-textBold box-borderBottom" onClick={this.props.dateToggle}>November 7, 2018</button>
          <button className="h-addDate box-text-3 box-textBold box-borderBottom" onClick={this.props.dateToggle}>November 7, 2018</button>
          <button className="h-addDate box-text-3 box-textBold box-borderBottom" onClick={this.props.dateToggle}>November 7, 2018</button>
        </div>
      </div>
    );
  }
}

export default HomeDate;