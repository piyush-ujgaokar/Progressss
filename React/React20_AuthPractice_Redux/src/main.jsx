import { createRoot } from 'react-dom/client'
import './index.css'
import AppRoutes from './routes/AppRoutes'
import { Provider } from 'react-redux'
import { store } from './app/Store'

createRoot(document.getElementById('root')).render(
    <Provider store={store}>
      <AppRoutes />
    </Provider>
)
