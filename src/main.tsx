import React from 'react'
import ReactDOM from 'react-dom/client'

import {App} from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
import { UserProvider } from './providers/userContext.tsx'
import { ContactProvider } from './providers/contactContext.tsx'


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <ContactProvider>
          <App />
        </ContactProvider>
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
)
