import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
// import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorkerRegistration.register({
  async onSuccess(registration: ServiceWorkerRegistration) {
    Notification.requestPermission(permission => {
      if (permission === 'granted'){
    
      }
      else console.error("Notifications Permission was not granted.")
    })

    
    const status = await navigator.permissions.query({
      name: 'periodic-background-sync' as any,
    });
    if (status.state === 'granted') {
      const c = (registration as any).periodicSync.register('check-for-notification', {
        minInterval: 60*1000
      });
      console.log('settted up periodinc sync')
    } else {
      console.log('No perms to do backgroynd sync')
    }
  }
});

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
