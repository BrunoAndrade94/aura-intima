import App from './App';
import React from 'react'
import ReactDOM from 'react-dom/client';
import { InputProvider } from './context/InputContext';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<InputProvider>
			<App />
		</InputProvider>
	</React.StrictMode>
);