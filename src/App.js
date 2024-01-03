import React, {useState} from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Toolbar from './ui/toolbar'
import SignupPage from './page/signupPage'
import SigninPage from './page/signinPage'

export default function App() {
	const [user,setUser] = useState()
	return (
		<BrowserRouter>
			<Toolbar />
			<Routes>
				<Route path='signup' element={<SignupPage />} />
				<Route path='signin' element={<SigninPage />} />
			</Routes>
		</BrowserRouter>
	)
}