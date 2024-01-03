import React from 'react'
import styled from 'styled-components'
import {useNavigate} from 'react-router-dom'
import Button from '../ui/button'
import {useForm} from 'react-hook-form'
import {server} from '../constant'

const Div = styled.div`
    width: 50%;
    margin: 10px auto;
    padding: 10px;
    border: 1px solid black;
    border-radius: 5%;
    text-align: center;
`

const P = styled.div`
    color: red;
    font-size: 10px;
`

function SigninPage(props){
	const navigate = useNavigate()
	const {
        register,
        setError,
        handleSubmit,
        formState: {errors}
    } = useForm({mode: 'onChange'})
	const onSubmit = async data => {
        const {email, password} = data
		const res = await fetch(server+'/signin',{
			method: 'POST',
            headers: {Accept: 'application/json', 'Content-Type': 'application/json'},
            body: JSON.stringify({email, password}),
			credentials: 'include'
		})
		if(res.status===200){
			alert('로그인에 성공했습니다.')
			return navigate('/')
		}
		if(res.status===401) return alert('이메일이나 비밀번호를 확인해주세요.')
		alert('알 수 없는 에러가 발생했습니다. 나중에 다시 시도해주세요.')
    }
	return (
		<Div>
			<h2>로그인</h2>
			<form onSubmit={handleSubmit(onSubmit)}>
				<label>이메일</label>
				<input
                    type="email"
                    {...register('email', {required: '이메일을 입력해주세요.'})}
                />
				<br />
				<label>비밀번호</label>
				<input
                    type="password"
                    {...register('password', {required: '비밀번호를 입력해주세요.'})}
                />
				<br />
				<Button title="submit" type="submit">
                    Submit
                </Button>
			</form>
		</Div>
	)
}

export default SigninPage