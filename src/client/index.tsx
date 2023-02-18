// This file is for containing the application
import * as React from "react";
import ReactDOM from 'react-dom/client';
// import { createRoot, Root } from 'react-dom/client'
import App from './app';

// const container = document.getElementById('root');
// const root = createRoot(container!); // createRoot(container!) for typescript

// const root = ReactDOM.createRoot(document.getElementById('root'))
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

let root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);


// We are grabbing our element with the ID 'root' and making sure the element grabbed is not null
// const rootElement: HTMLElement | null = document.getElementById('root');
// if (!rootElement) throw new Error('Failed to get root element in index.ts');

// // Creating root to be the type Root (from react) and made it the root element
// const root: Root = createRoot(rootElement);

// // The root we are rendering is App.jsx
root.render(<App />);
