
import { createRoot } from 'react-dom/client'
import './index.css'
import CoinCreate from './CoinCreate.jsx'
import {Provider} from 'react-redux'
import { store } from './store.jsx'

createRoot(document.getElementById('root')).render(
   <Provider store={store}>
     <CoinCreate />
   </Provider>
)
