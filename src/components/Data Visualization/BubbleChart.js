import React from "react";
import { Bubble } from "react-chartjs-2";

const data = {
    labels: ["January"],
    datasets: [
      {
        label: "My First dataset",
        fill: false,
        lineTension: 0.2,
        backgroundColor: "#2FDE00",
        borderColor: "#2FDE00",
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: "miter",
        pointBorderColor: "rgba(75,192,192,1)",
        pointBackgroundColor: "#fff",
        pointBorderWidth: 2,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: "rgba(75,192,192,1)",
        pointHoverBorderColor: "rgba(220,220,220,1)",
        pointHoverBorderWidth: 2,
        pointRadius: 0.5,
        pointHitRadius: 2,
        data: [
        { "y": 0, "x": 0 },
        { "y": 1, "x": 10 },
        { "y": 6, "x": 16 },
        { "y": 17, "x": 7 },
        { "y": 8, "x": 23 },
        { "y": 27, "x": 17 },
        { "y": 18, "x": 38 },
        { "y": 10, "x": 19 },
        { "y": 3, "x": 31 },
        { "y": 2, "x": 3 },
        { "y": 37, "x": 32 },
        { "y": 4, "x": 4 },
        { "y": 3, "x": 43 },
        { "y": 44, "x": 44 },
        ]
      }
    ]
  };
export default class BubbleGraph extends React.Component {
  render() {
    return (
      <div>
        <Bubble
          data={data}
          width={10}
          height={10}
          options={{
            title:{
              display:true,
              text:'Performance',
              fontSize:20
            },
            legend:{
              display:true,
              position:'top'
            }
          }}
        />
      </div>
    );
  }
}
