import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Cards from '../Cards';
import Grid from "@material-ui/core/Grid";
/*import LineChart from '../Data Visualization/LineGraph';
import PieChart from '../Data Visualization/PieChart';
import BarGraph from '../Data Visualization/BarGraph';
import DoughnutChart from '../Data Visualization/DoughnutChart';
import HorizontalBarGraph from '../Data Visualization/HorizontalBarGraph';
import RadarChart from '../Data Visualization/RadarChart';
import PolarAreaChart from '../Data Visualization/PolarAreaChart';
import BubbleGraph from '../Data Visualization/BubbleChart';*/
import JsonLineTest from '../Data Visualization/JsonLineTest';

import { Line } from "react-chartjs-2";
function Dashboard(props) {
    
  
    /*const[ posts, setPosts] = useState([]);
    useEffect((props) => {
      axios.get("https://jsonplaceholder.typicode.com/todos?_limit=7")
      .then(res => {
          console.log(res);
          setPosts(res.data);
      })
      .catch( err => {
          console.log(err);
      })
    }, [])

    const state = {
        labels: [Object.keys(res.data.id)],
      
        datasets: [
          {
            label: "Testing Json Data",
            fill: false,
            lineTension: 0.1,
            backgroundColor: "rgba(75,192,192,0.4)",
            borderColor: "rgba(75,192,192,1)",
            borderWidth: 2,
            //data: [90, 88, 94, 78, 93, 99, 70]
            data: Object.values(res.data.userId)
          }
        ]
      }*/

    const[ chart, setChart] = useState({});
    useEffect((props) => {
        getData();
      }, [])
    const getData = async () => {
        try {
          const res = await axios.get(
            `https://corona.lmao.ninja/v2/historical/Albania`
          );
    
          setChart({
            labels: Object.keys(res.data.timeline.cases),
            datasets: [
              {
                label: "Testing Json Data",
                fill: false,
                lineTension: 0.1,
                backgroundColor: "rgba(75,192,192,0.4)",
                borderColor: "rgba(75,192,192,1)",
                borderWidth: 2,
                data: Object.values(res.data.timeline.cases)
              }
            ]
          });
        } catch (error) {
          console.log(error.response);
        }
      };


    return (
      <div>
          This is student dash Test
          
            {/*<ul>
                {posts.map(post =>(
                    <li key={post.id}>{post.id} {post.userId} {post.title}</li>
                ))}
            </ul>*/}
        
        <Grid container spacing={3}>
        <Grid item md={3}>
          <Cards number="1">
            <Line
                data={chart}
                width={10}
                height={10}
                options={{
                    title:{
                    display:true,
                    text:'JSON Test',
                    fontSize:10
                    },
                    legend:{
                    display:true,
                    position:'top'
                    }
                }}
            />
          </Cards>
        </Grid>
        <Grid item md={3}>
          <Cards number="2">
            <JsonLineTest url= "https://corona.lmao.ninja/v2/historical/Albania" />  
          </Cards>
        </Grid>
      </Grid>  
      </div>
    )
}

export default Dashboard
