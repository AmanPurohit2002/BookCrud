import React from 'react';
import ReactDOM  from 'react-dom/client';
import App from './App';
import './index.css';

const ele=document.getElementById('root');

const root=ReactDOM.createRoot(ele);

const myStyle={
    backgroundColor:'lightOrange'
}

root.render(
    <React.StrictMode>
    <div style={myStyle}>
        <App/>
    </div>
        
    </React.StrictMode>
)