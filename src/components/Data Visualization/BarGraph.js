import React from 'react';
import {Bar} from 'react-chartjs-2';

const state = {
  labels: ['2015', '2016', '2017',
           '2018', '2019'],
  datasets: [
    {
      label: 'Performance',
      backgroundColor: 'rgba(75,192,192,1)',
      borderColor: 'rgba(0,0,0,1)',
      borderWidth: 0,
      data: [65, 39, 80, 81, 56]
    }
  ]
}

export default class BarGraph extends React.Component {
  render() {
    return (
      <div>
        <Bar
          data={state}
          width={10}
          height={10}
          options={{
            title:{
              display:true,
              text:'Computer Engineering Performance',
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