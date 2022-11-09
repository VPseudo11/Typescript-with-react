import { useEffect, useState } from 'react'
import styled from 'styled-components'
import List from './components/List'

const INITIAL_STATE = [
  {
    nick: 'noctis',
    subMonths: 3,
    avatar: 'https://i.pravatar.cc/450',
    description: 'moderator'
  },
  {
    nick: 'pseudo',
    subMonths: 5,
    avatar: 'https://i.pravatar.cc/150',
  }
]

interface Sub {
  nick: String
  subMonths: number
  avatar: string
  description?: string
}

interface AppState {
  subs: Array<Sub>
  newSubsNumber: number
}

function App() {
  const [subs, setSubs] = useState<AppState['subs']>([])
  const [newSubsNumber, setNewSubsNumber] = useState<AppState['newSubsNumber']>(0)

  useEffect(() => {
    setSubs(INITIAL_STATE)
  }, [])

  return (
    <AppContainer>
      <h1>pseudo Subs</h1>
      <List subs={subs}/>
    </AppContainer>
  )
}

const AppContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 0 auto;
`


export default App
