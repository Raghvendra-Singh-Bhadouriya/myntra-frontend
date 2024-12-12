import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom';

import  { DropDownProvider }  from './ContextApi/DropdownContext.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      
        <DropDownProvider>
          <App/>
        </DropDownProvider>
    
    </BrowserRouter>
  </StrictMode>,
)
