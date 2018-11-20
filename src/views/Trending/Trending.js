import React from 'react';
import './Trending.css';

class Trending extends React.Component {
  render() {
    return (
      <div className="trending">
        <div className="t-topBar">
          <button className="t-coinSelect">Bitcoin</button>
          <div className="box-spacer"></div>
          <button className="t-labelSelect">Top</button>
          <button className="t-add"><i className="ion-ios-add" aria-label="Add Prediction" /></button>
        </div>
        <div className="t-body">
          <div className="a-discussionGroup">
            <div className="a-discussionRating">
              <button><i className="ion-ios-arrow-dropup box-text-2 box-textGray" /></button>
              <div className="box-text-2 a-ratingMargin">100</div>
              <button><i className="ion-ios-arrow-dropdown box-text-2 box-textGray" /></button>
            </div>
            <div className="a-discussionDetails box-spacer">
              <div className="a-discussionTitle box-text-2">Discussion Title</div>
              <div className="a-discussionBody box-textGray">Discussion Body</div>
            </div>
            <div className="a-discussionTime box-text-3 box-textGray">Time</div>
          </div>
          <div className="a-discussionGroup">
            <div className="a-discussionRating">
              <button><i className="ion-ios-arrow-dropup box-text-2 box-textGray" /></button>
              <div className="box-text-2 a-ratingMargin">100</div>
              <button><i className="ion-ios-arrow-dropdown box-text-2 box-textGray" /></button>
            </div>
            <div className="a-discussionDetails box-spacer">
              <div className="a-discussionTitle box-text-2">Discussion Title</div>
              <div className="a-discussionBody box-textGray">Discussion Body</div>
            </div>
            <div className="a-discussionTime box-text-3 box-textGray">Time</div>
          </div>
          <div className="a-discussionGroup">
            <div className="a-discussionRating">
              <button><i className="ion-ios-arrow-dropup box-text-2 box-textGray" /></button>
              <div className="box-text-2 a-ratingMargin">100</div>
              <button><i className="ion-ios-arrow-dropdown box-text-2 box-textGray" /></button>
            </div>
            <div className="a-discussionDetails box-spacer">
              <div className="a-discussionTitle box-text-2">Discussion Title</div>
              <div className="a-discussionBody box-textGray">Discussion Body</div>
            </div>
            <div className="a-discussionTime box-text-3 box-textGray">Time</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Trending;