import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from 'App'
import './common.css'

// React Context Provider
import { MaterialUIControllerProvider } from 'context'
import { AuthContextProvider } from 'context/AuthContext'

const container = document.getElementById('app')
const root = createRoot(container)

root.render(
  <BrowserRouter>
    <AuthContextProvider>
      <MaterialUIControllerProvider>
        <App />
      </MaterialUIControllerProvider>
    </AuthContextProvider>
  </BrowserRouter>
)
