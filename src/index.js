import React from 'react';
import ReactDOM from 'react-dom';
import SettingsContext from './context/settings';
import AuthProvider from './context/settings';
import App from './app.js';

class Main extends React.Component {
  render() {
    return (
      <AuthProvider>
        <SettingsContext>
          <App />
        </SettingsContext>
      </AuthProvider>
    )

  }
}

const rootElement = document.getElementById('root');
ReactDOM.render(<Main />, rootElement);
