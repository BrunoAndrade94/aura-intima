import './App.css';
import Home from './Pages/Home';
import Header from './Components/Header';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import axios from 'axios';
import { createContext } from 'react';

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
