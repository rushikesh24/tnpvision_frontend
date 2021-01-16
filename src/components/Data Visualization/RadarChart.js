import React from 'react';
import {Radar} from 'react-chartjs-2';

const data = {
  labels: ['Wipro', 'Capgemini', 'Veritas', 'Virtusa', 'Vodafone', 'TCS', 'Infosys'],
  datasets: [
    {
      label: 'DYPCOE',
      backgroundColor: 'rgba(179,181,198,0.2)',
      borderColor: 'rgba(179,181,198,1)',
      pointBackgroundColor: 'rgba(179,181,198,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(179,181,198,1)',
      data: [65, 59, 90, 81, 56, 55, 40]
    },
    {
      label: 'DYPIMR',
      backgroundColor: 'rgba(255,99,132,0.2)',
      borderColor: 'rgba(255,99,132,1)',
      pointBackgroundColor: 'rgba(255,99,132,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(255,99,132,1)',
      data: [0, 48, 40, 19, 96, 0, 100]
    }
  ]
};

export default class RadarChart extends React.Component {
  render() {
    return (
      <div>
        <Radar
          data={data}
          width={10}
          height={10}
          options={{
            title:{
              display:true,
              text:'Placement Percentage',
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