// src/app/pages/index.js
import App from "../components/App"

import {useState} from 'react'

import Button from '@material-ui/core/Button'

function Index(){

  const [count, setCount] = useState(1)

  return (
    <App>
      <p>Index Page</p>
      <p>{count}</p>
      <Button onClick={()=>setCount(count + 1)}>Click Me</Button>
    </App>

  )

}

export default Index;