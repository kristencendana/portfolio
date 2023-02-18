// This file is for containing the application
import * as React from "react";
import ReactDOM from 'react-dom/client';
import App from './app';
import "../../public/styles.css";

let root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(<App />);
