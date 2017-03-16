import React from 'react';
import ReactDOM from 'react-dom'
import App from './App'
import Navbar from './NavBar'

ReactDOM.render(
    <div>
        <Navbar></Navbar>
        <App></App>
    </div>,
    document.getElementById('root')
)