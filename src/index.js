import React from 'react';
import ReactDOM from 'react-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';
import App from './App';
import Theme from './components/Theme';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <ThemeProvider Theme={Theme}>
    {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
    <CssBaseline />,
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  </ThemeProvider>,
  document.getElementById('root')
  // document.querySelector('#root')
);




// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
