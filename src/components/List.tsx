import React from 'react'
import styled from 'styled-components'

interface Props {
    subs: Array<{
        nick: String
        subMonths: number
        avatar: string
        description?: string
    }>
}

const List = ({ subs }: Props) => {
    return (
        <SubsList>
            {
                subs.map(sub => (
                    <ItemList>
                        <img src={sub.avatar} alt={`Avatar for ${sub.nick}`} />
                        <h4>{sub.nick} (<small>{sub.subMonths}</small>)</h4>
                        <p>{sub.description}</p>
                    </ItemList>
                ))
            }
        </SubsList>
    )
}


const SubsList = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const ItemList = styled.li`
  margin-bottom: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 250px;
  border: 1px solid rgba(0, 0, 0, .1);
  &>h4{
    margin: auto;
    text-align: center;
    font-size: 1.5rem;
  }

  &>img{
    max-width: 100%;
    max-height: 100%;
    width: 150px;
    object-fit: contain;
    border-radius: 50%;
  }

  &>p{
    font-size: 1.2rem;
    margin: 0;
  }
`

export default List