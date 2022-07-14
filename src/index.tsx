import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import{ BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import { ThemeProvider } from '@mui/material/styles';
import { theme } from './Theme/themes';
import { Home, Dashboard, Signin, DataTable } from './components';
import '../src/styles.css'
import { Provider } from 'react-redux';
import { store } from './redux/store';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store = {store}>   

        <ThemeProvider theme={theme}>
          <Router>
            <Routes>
              <Route path='/' element={<Home title = {'Drones Inventory'}/>} />
              <Route path='/dashboard' element={<Dashboard />} />
              <Route path='/signin' element={<Signin />} />
            </Routes>
          </Router>
        </ThemeProvider>

    </Provider>             
  </React.StrictMode>,
);

reportWebVitals();