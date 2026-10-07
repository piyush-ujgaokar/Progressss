
import { createRoot } from 'react-dom/client'

import './app/index.css'
import AppRoutes from './app/appRoutes'

createRoot(document.getElementById('root')).render(
  <AppRoutes/>
)
