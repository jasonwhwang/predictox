import React from 'react';
import { VictoryChart, VictoryZoomContainer, VictoryAxis, VictoryLine, VictoryScatter } from 'victory';
import Dimensions from 'react-dimensions';

class Chart extends React.Component {
  render() {
    return (
      <div className="h-chart">
        <VictoryChart
          width={this.props.containerWidth * 1.4}
          height={this.props.containerHeight * 1.4}
          domain={{ x: [0, 14], y: [6000, 7000] }}
          containerComponent={<VictoryZoomContainer allowZoom={false} zoomDomain={{ x: [5, 9], y: [6200, 6600] }} />}>
          <VictoryAxis dependentAxis
            style={{
              axis: { stroke: "#e5e5e5", strokeWidth: 2 },
              tickLabels: { color: "#8e8e93", fontSize: 15, fontWeight: 900, fill: "#8e8e93" }
            }}
            tickValues={[6000, 6100, 6200, 6300, 6400, 6500, 6600, 6700, 6800, 6900, 7000]}
            tickFormat={(t) => `${t / 1000}k`}
          />
          <VictoryAxis
            style={{
              axis: { stroke: "#e5e5e5", strokeWidth: 2 },
              tickLabels: { fontSize: 15, fontWeight: 900, fill: "#8e8e93" }
            }}
            tickValues={[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]}
            tickFormat={(t) => `11/${t}`}
          />
          <VictoryLine
            // animate={{
            //   duration: 750,
            //   onLoad: { duration: 750 }
            // }}
            style={{
              data: { stroke: "#FFD700", strokeWidth: 5, opacity: 1 }
            }}
            data={[
              { x: 0, y: 6300 },
              { x: 1, y: 6200 },
              { x: 2, y: 6200 },
              { x: 3, y: 6300 },
              { x: 4, y: 6200 },
              { x: 5, y: 6500 },
              { x: 6, y: 6400 },
              { x: 7, y: 6300 }
            ]}
            interpolation="catmullRom"
          ></VictoryLine>
          <VictoryScatter
            style={{ data: { fill: "#FFD700", opacity: 1 } }}
            bubbleProperty="amount"
            maxBubbleSize={50}
            minBubbleSize={5}
            data={[
              { x: 0, y: 6300, amount: 5 },
              { x: 1, y: 6200, amount: 5 },
              { x: 2, y: 6200, amount: 5 },
              { x: 3, y: 6300, amount: 5 },
              { x: 4, y: 6200, amount: 5 },
              { x: 5, y: 6500, amount: 5 },
              { x: 6, y: 6400, amount: 5 },
              { x: 7, y: 6300, amount: 5 }
            ]}
          ></VictoryScatter>
          <VictoryScatter
            style={{ data: { fill: "#FFD700", opacity: 0.25 } }}
            bubbleProperty="amount"
            maxBubbleSize={50}
            minBubbleSize={5}
            data={[
              { x: 0, y: 6360, amount: 5 },
              { x: 1, y: 6210, amount: 5 },
              { x: 2, y: 6250, amount: 5 },
              { x: 3, y: 6350, amount: 8 },
              { x: 4, y: 6290, amount: 10 },
              { x: 5, y: 6550, amount: 15 },
              { x: 6, y: 6430, amount: 20 },
              { x: 7, y: 6250, amount: 5 },
              { x: 7, y: 6300, amount: 20 },
              { x: 7, y: 6400, amount: 10 },
              { x: 7, y: 6550, amount: 8 },
              { x: 8, y: 6400, amount: 5 },
              { x: 9, y: 6500, amount: 10 },
              { x: 10, y: 6600, amount: 15 },
              { x: 11, y: 6800, amount: 10 },
              { x: 12, y: 6700, amount: 20 },
              { x: 13, y: 6200, amount: 20 },
              { x: 14, y: 6100, amount: 30 }
            ]}
          ></VictoryScatter>
          <VictoryScatter
            style={{ data: { fill: "#007aff", opacity: 1 } }}
            bubbleProperty="amount"
            maxBubbleSize={50}
            minBubbleSize={5}
            data={[
              { x: 0, y: 6350, amount: 5 },
              { x: 1, y: 6250, amount: 5 },
              { x: 2, y: 6250, amount: 5 },
              { x: 3, y: 6350, amount: 5 },
              { x: 4, y: 6150, amount: 5 },
              { x: 5, y: 6550, amount: 5 },
              { x: 6, y: 6350, amount: 5 },
              { x: 7, y: 6350, amount: 5 }
            ]}
          ></VictoryScatter>
        </VictoryChart>
      </div>
    );
  }
}

export default Dimensions()(Chart);