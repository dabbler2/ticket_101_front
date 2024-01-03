import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Toolbar from './ui/toolbar'
import SignupPage from './page/signupPage'

export default function App() {
	return (
		<BrowserRouter>
			<Toolbar />
			<Routes>
				<Route path='signup' element={<SignupPage />} />
			</Routes>
		</BrowserRouter>
	)
}