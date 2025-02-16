import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../src/index.css'
import App from '../src/components/App'
import { Provider } from 'react-redux'
import { persistor, store } from './components/redux/store'
import { PersistGate } from 'redux-persist/integration/react'
import { Toaster } from 'react-hot-toast'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
    <Toaster position='top-right' toastOptions={{duration: 1000}}></Toaster>
  </StrictMode>
)
