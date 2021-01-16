import React from 'react';
import {HorizontalBar} from 'react-chartjs-2';

const state = {
  labels: ['2015', '2016', '2017',
           '2018', '2019'],
  datasets: [
    {
      label: 'Performance',
      backgroundColor: '#C9DE00',
      borderColor: 'rgba(0,0,0,1)',
      borderWidth: 0,
      data: [47, 89, 67, 76, 50]
    }
  ]
}

export default class HorizontalBarGraph extends React.Component {
  render() {
    return (
      <div>
        <HorizontalBar
          data={state}
          width={10}
          height={10}
          
          options={{
            title:{
              display:true,
              text:'IT Performance',
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