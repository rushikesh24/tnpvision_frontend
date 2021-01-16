import React from 'react';
import {Pie} from 'react-chartjs-2';

const stateDYPCOE = {
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
      data: [65, 59, 80, 81, 56]
    }
  ]
}

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Pie
          data={stateDYPCOE}
          width={10}
          height={10}
          options={{
            title:{
              display:true,
              text:'Placement Percentage DYPCOE',
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