import NewUser from './components/NewUser'
import UsersList from './components/UsersList'
import { UserProvider } from './context/UserContext'

function App() {
  return (
    <UserProvider>
      <h1>App is working</h1>
      <UsersList />
      <NewUser />
    </UserProvider>
  )
}

export default App
