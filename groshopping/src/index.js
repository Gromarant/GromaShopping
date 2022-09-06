import ReactDOM from 'react-dom/client';
import './styles/index.scss';
import App from './components/App.jsx';
import { HashRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <HashRouter>
    <App />
  </HashRouter>
);