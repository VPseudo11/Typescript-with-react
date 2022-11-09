import React from 'react'
import styled from 'styled-components'

type Props = {}

const Form = ({ }: Props) => {
    const handleSubmit = () => {

    }
    return (
        <FormContainer onSubmit={handleSubmit}>
            <label htmlFor="nick">Nickname</label>
            <input type="text" placeholder='NickName' />
            <label htmlFor="nick">Nickname</label>
            <input type="text" name='nick' />
            <input type="text" name='nick' />
        </FormContainer>
    )
}

const FormContainer = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 5px;
    border-radius: 5px;
    background-color: rgba(0, 0, 0, .1);

    &>input{
        margin: 5px;
        width: 250px;
        height: 25px;
        border-radius: 15px;
        text-align: center;
    }
`

export default Form