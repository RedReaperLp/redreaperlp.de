import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

for (let i = 0; i < document.getElementsByClassName('app').length; i++) {
    ReactDOM.createRoot(document.getElementsByClassName('app')[i]).render(
        <React.StrictMode>
            <App/>
        </React.StrictMode>,
    )
}
