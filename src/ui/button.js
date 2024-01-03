import React from 'react'
import styled from 'styled-components'

const StyledButton = styled.button`
	border: 0;
	border-radius: 15%;
	background-color: transparent;
	cursor: pointer;
	&:hover{
		background-color: white;
	}
`

function Button(props){
	const {title,onClick} = props
	return <StyledButton onClick={onClick}>{title || 'Click!'}</StyledButton>
}

export default Button