import React from 'react';
import {Polar} from 'react-chartjs-2';

const stateDYPIMR = {
    labels: ['CS', 'IT', 'ENTC',
             'Civil', 'Mech'],
    datasets: [
      {
        label: 'Performance',
        backgroundColor: [
          '#B21F00',
          '#C9DE00',
          '#2FDE00',
          '#00A6B4',
          '#6800B4'
        ],
        hoverBackgroundColor: [
        '#501800',
        '#4B5000',
        '#175000',
        '#003350',
        '#35014F'
        ],
        data: [60, 50, 85, 90, 56]
      }
    ]
  }

export default class DoughnutChart extends React.Component {
  render() {
    return (
      <div>
        <Polar
          data={stateDYPIMR}
          width={10}
          height={10}
          options={{
            title:{
              display:true,
              text:'Placement Percentage DYPIMR',
              fontSize:20
            },
            legend:{
              display:true,
              position:'bottom'
            }
          }}
        />
      </div>
    );
  }
}