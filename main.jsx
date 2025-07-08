import React from 'react';
import ReactDOM from 'react-dom/client';
import AppRouter from './routes/AppRouter';
import { HashRouter } from 'react-router-dom';
import { AuthProvider } from './context/AuthProvider';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
ReactDOM.createRoot(document.getElementById('root')).render(
<React.StrictMode>
<HashRouter>
<AuthProvider>
<AppRouter />
</AuthProvider>
</HashRouter>
</React.StrictMode>
);
