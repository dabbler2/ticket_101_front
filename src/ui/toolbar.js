import React from 'react'
import styled from 'styled-components'
import {useNavigate} from 'react-router-dom'
import Button from './button'

const Div = styled.div`
	height: 80px;
	background-color: skyblue;
	padding: 5px 20px;
	display: flex;
	justify-content: space-between;
	align-items: center;
`

function Toolbar(props){
	const navigate = useNavigate()
	return (
		<Div>
			<p style={{fontSize:30}}>Ticket_101</p>
			<div style={{}}>
				<Button title='회원가입' onClick={()=>navigate('/signup')}></Button>
				<Button title='로그인' onClick={()=>navigate('/signin')}></Button>
			</div>
		</Div>
	)
}

export default Toolbar