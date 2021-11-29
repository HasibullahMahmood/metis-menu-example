import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SidebarNav from './components/SidebarNav';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
	return (
		<BrowserRouter>
			<div className="app">
				<aside className="sidebar">
					<SidebarNav />
				</aside>
				<div className="content">
					<Routes>
						<Route element={<About />} path="/about" />
						<Route element={<Contact />} path="/contact" />
						<Route element={<Home />} path="/" />
					</Routes>
				</div>
			</div>
		</BrowserRouter>
	);
}

export default App;
