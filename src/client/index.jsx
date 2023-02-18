// This file is for containing the application
import React from "react";
import { createRoot } from 'react-dom/client'
import App from './app';

const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) for typescript

root.render(<App tab='home' />)