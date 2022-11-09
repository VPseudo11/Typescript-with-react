import React from 'react'
import styled from 'styled-components'

type Props = {}

const Form = ({ }: Props) => {
    const handleSubmit = () => {

    }
    return (
        <FormContainer onSubmit={handleSubmit}>
            <input type="text" name='nick' />
            <input type="text" placeholder='NickName' />
        </FormContainer>
    )
}

const FormContainer = styled.form`
    border: 1px solid red;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 5px;
    border-radius: 5px;
    background-color: rgba(0, 0, 0, .1);

    &>input{
        margin: 5px;
    }
`

export default Form