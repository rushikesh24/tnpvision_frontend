import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Line } from "react-chartjs-2";

function JsonLineTest (props) {  

        const[ chart, setChart] = useState({});
        useEffect((props) => {
            getData();
          }, [])
        const getData = async () => {
            try {
              const res = await axios.get(
                //`https://corona.lmao.ninja/v2/historical/Albania`
                props.url
              );
        
              setChart({
                labels: Object.keys(res.data.timeline.cases),
                datasets: [
                  {
                    label: "Testing Json Data 2",
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
            <Line
                data={chart}
                width={10}
                height={10}
                options={{
                    title:{
                    display:true,
                    text:'JSON Test 2',
                    fontSize:10
                    },
                    legend:{
                    display:true,
                    position:'top'
                    }
                }}
            />
      </div>
    )
}

export default JsonLineTest
