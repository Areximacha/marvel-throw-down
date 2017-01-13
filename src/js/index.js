import { render } from 'react-dom'
import routes from './config/routes'

import '../sass/main.scss'

render(
  routes,
  document.getElementById('app')
)
