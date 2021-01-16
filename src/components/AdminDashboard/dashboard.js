import React, { useEffect, useState } from 'react'
import axios from 'axios';
function Dashboard(props) {
    
  const[ posts, setPosts] = useState([]);
  useEffect((props) => {
      axios.get("https://jsonplaceholder.typicode.com/posts")
      .then(res => {
          console.log(res);
      })
      .catch( err => {
          console.log(err);
      })
    })
    return (
      <div>
          This is dash Test
      </div>
    )
}

export default Dashboard
