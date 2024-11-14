import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import routes from './routes/Routes'
import AuthProvider from './AuthProvider/AuthProvider'
import { HelmetProvider } from 'react-helmet-async'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <HelmetProvider>
        <RouterProvider
          router={routes}
          future={{
            v7_startTransition: true,
          }}
        />
      </HelmetProvider>
    </AuthProvider>
  </StrictMode>,
)
