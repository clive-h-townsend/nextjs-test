// src/app/pages/index.js
import App from "../components/App"

import Button from '@material-ui/core/Button'

export default () =>
  <App>
    <p>Index Page</p>
    <Button onClick={()=>alert('Clicked')}>Click Me</Button>
  </App>