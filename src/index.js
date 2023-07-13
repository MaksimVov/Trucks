import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

const url = 'https://62a8-195-78-42-6.ngrok-free.app/trucks/json/all/';

// Fetch data from the URL
fetch(url, {
  headers: {
    'ngrok-skip-browser-warning': '1',
  },
})
  //to json
  .then(response => response.json())
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    // Handle any errors
    console.log(error);
  });
