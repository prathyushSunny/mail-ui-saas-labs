import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ListingWrapper from './context/listingContextProvider.jsx'

createRoot(document.getElementById('root')).render(
  <ListingWrapper>
    <App />
  </ListingWrapper>,
)
