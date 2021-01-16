import React from "react";
import { Line } from "react-chartjs-2";


const state = {
  labels: ["2013", "2014", "2015", "2016", "2017", "2018", "2019"],

  datasets: [
    {
      label: "Placement Percentage from last 10 years",
      fill: false,
      lineTension: 0.1,
      backgroundColor: "rgba(75,192,192,0.4)",
      borderColor: "rgba(75,192,192,1)",
      borderWidth: 2,
      data: [90, 88, 94, 78, 93, 99, 70]
    }
  ]
}

export default class LineGraph extends React.Component {
  render() {
    return (
      <div>
        <Line
          data={state}
          width={10}
          height={10}
          options={{
            title:{
              display:true,
              text:'Past Performance',
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
