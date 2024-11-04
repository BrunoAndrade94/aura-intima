import './App.css';
import axios from 'axios';
import { createContext } from 'react';
import Header from './Components/Header';
import Home from './Components/Pages/Home';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const MyContext = createContext()

function App() {
	return (
		<BrowserRouter>
			<Header />
			<Routes>
				<Route path='/' element={<Home />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
