import React from 'react'

type Props = {}

const Form = ({ }: Props) => {
    const handleSubmit = () => {

    }
    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name='nick' />
        </form>
    )
}

export default Form