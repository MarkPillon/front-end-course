import React from 'react'; // Ensure React is in scope for JSX
import ReactDOM from 'react-dom/client';
import App from './App';

// Define the notes array
const notes = [
  {
    id: 1,
    content: 'HTML is easy',
    important: true,
  },
  {
    id: 2,
    content: 'Browser can execute only JavaScript',
    important: false,
  },
  {
    id: 3,
    content: 'GET and POST are the most important methods of HTTP protocol',
    important: true,
  },
];



// Render the App component with notes as a prop
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App notes={notes} />
  </React.StrictMode>
);