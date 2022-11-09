import React from 'react'
import styled from 'styled-components'

type Props = {}

const Form = ({ }: Props) => {
    const handleSubmit = () => {

    }
    return (
        <FormContainer onSubmit={handleSubmit}>
            <input type="text" name='nick' />
        </FormContainer>
    )
}

const FormContainer = styled.form`

`

export default Form