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

function SignupPage(props) {
    const navigate = useNavigate()
    const {
        register,
        setError,
        handleSubmit,
        formState: {errors}
    } = useForm({mode: 'onChange'})
    const onSubmit = async data => {
        const {email, nickname, password, confirmPW} = data
        if (password !== confirmPW) return setError('confirmPW', {message: '확인용 비밀번호가 다릅니다.'})
        const res = await fetch(server + '/signup', {
            method: 'POST',
            headers: {Accept: 'application/json', 'Content-Type': 'application/json'},
            body: JSON.stringify({email, nickname, password, confirmPW, role: 0})
        })
        if (res.status === 201) {
            alert('회원가입이 완료되었습니다.')
            return navigate('/')
        }
        if (res.status === 409) return alert('이미 사용 중인 이메일입니다.')
        alert('알 수 없는 에러가 발생했습니다. 나중에 다시 시도해주세요.')
    }
    return (
        <Div>
            <h2>회원가입</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label>이메일</label>
                <input
                    type="email"
                    {...register('email', {
                        required: '이메일을 입력해주세요.',
                        pattern: {value: /^\S+@\S+.\S+$/i, message: '형식에 맞는 이메일을 입력해주세요.'}
                    })}
                />
                <P>{errors.email?.message}</P>
                <br />
                <label>닉네임</label>
                <input
                    type="text"
                    {...register('nickname', {
                        required: '닉네임을 입력해주세요.',
                        minLength: {value: 6, message: '닉네임은 6글자 이상이어야 합니다.'}
                    })}
                />
                <P>{errors.nickname?.message}</P>
                <br />
                <label>비밀번호</label>
                <input
                    type="password"
                    {...register('password', {
                        required: '비밀번호를 입력해주세요.',
                        minLength: {value: 6, message: '비밀번호는 6글자 이상이어야 합니다.'}
                    })}
                />
                <P>{errors.password?.message}</P>
                <br />
                <label>비밀번호 확인</label>
                <input type="password" {...register('confirmPW', {required: '확인용 비밀번호를 입력해주세요.'})} />
                <P>{errors.confirmPW?.message}</P>
                <br />
                <Button title="submit" type="submit">
                    Submit
                </Button>
            </form>
        </Div>
    )
}

export default SignupPage
