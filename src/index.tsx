import { createRoot } from 'react-dom/client';
import './index.scss';
import App from './App';


const container = document.getElementById('root');
const root = container ? createRoot(container): null;
if (root) {
  root.render(<App />);
}
