import React from 'react';
import { VictoryChart, VictoryZoomContainer, VictoryAxis, VictoryLine, VictoryScatter } from 'victory';

class Chart extends React.Component {
  render() {
    return (
      <div className="h-chart">
        <VictoryChart
          width={window.innerWidth * 1.575}
          height={window.innerHeight * 1.4}
          domain={{ x: [1, 13], y: [6000, 6600] }}
          containerComponent={<VictoryZoomContainer allowZoom={false} zoomDomain={{ x: [4, 10] }} />}
        >
          <VictoryAxis dependentAxis
            style={{
              axis: { stroke: "#e5e5e5", strokeWidth: 2 },
              tickLabels: { color: "#8e8e93", fontSize: 18, fontWeight: 900, fill: "#8e8e93" }
            }}
            tickValues={[6000, 6100, 6200, 6300, 6400, 6500, 6600, 6700, 6800, 6900, 7000]}
            tickFormat={(t) => `${t / 1000}k`}
          />
          <VictoryAxis
            style={{
              axis: { stroke: "#e5e5e5", strokeWidth: 2 },
              tickLabels: { fontSize: 18, fontWeight: 900, fill: "#8e8e93" }
            }}
            tickValues={[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]}
            tickFormat={(t) => `11/${t}`}
          />
          {/* Crypto Price */}
          <VictoryLine
            style={{
              data: { stroke: "#FFD700", strokeWidth: 5, opacity: 1 }
            }}
            animate={{
              duration: 2000,
              onLoad: { duration: 2000 }
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
          {/* Crypto Day Price */}
          <VictoryScatter
            style={{ data: { fill: "#FFD700", opacity: 1 } }}
            size={7}
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
          ></VictoryScatter>
          {/* Prediction Price */}
          <VictoryLine
            style={{
              data: { stroke: "#FFD700", strokeWidth: 5, strokeDasharray: [20, 30], opacity: 0.5 }
            }}
            animate={{
              duration: 2000,
              onLoad: { duration: 2000 }
            }}
            data={[
              { x: 7, y: 6300 },
              { x: 8, y: 6250 },
              { x: 9, y: 6350 },
              { x: 10, y: 6400 },
              { x: 11, y: 6300 },
              { x: 12, y: 6200 },
              { x: 13, y: 6400 },
              { x: 14, y: 6600 }
            ]}
            interpolation="catmullRom"
          ></VictoryLine>
          {/* Prediction Day Price */}
          <VictoryScatter
            style={{ data: { fill: "#FFD700", opacity: 0.5 } }}
            size={7}
            data={[
              { x: 6, y: 6400 },
              { x: 7, y: 6300 },
              { x: 8, y: 6250 },
              { x: 9, y: 6350 },
              { x: 10, y: 6400 },
              { x: 11, y: 6300 },
              { x: 12, y: 6200 },
              { x: 13, y: 6400 },
              { x: 14, y: 6600 }
            ]}
          ></VictoryScatter>
          {/* User Predictions */}
          <VictoryScatter
            style={{ data: { fill: "#007aff", opacity: 1 } }}
            size={5}
            data={[
              { x: 0, y: 6350 },
              { x: 1, y: 6250 },
              { x: 2, y: 6250 },
              { x: 3, y: 6350 },
              { x: 4, y: 6150 },
              { x: 5, y: 6550 },
              { x: 6, y: 6350 },
              { x: 7, y: 6320 },
              { x: 8, y: 6210 },
              { x: 9, y: 6300 },
              { x: 10, y: 6550 },
              { x: 11, y: 6200 }
            ]}
          ></VictoryScatter>
          {/* Current Crypto Price */}
          <VictoryScatter
            style={{ data: { fill: "none", stroke: "#FFD700", strokeWidth: 5 , opacity: 1 } }}
            size={12}
            data={[
              { x: 7, y: 6300 }
            ]}
          ></VictoryScatter>
        </VictoryChart>
      </div>
    );
  }
}

export default Chart;