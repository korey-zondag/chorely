import { createAuth0Client } from '@auth0/auth0-spa-js'
import Header from './Header'
import LoginButton from './Nav/LoginButton'

function App() {
  return (
    <>
      <Header />
      <br></br>
      <div className="app flex flex-col items-center">
        <h1 className="text-3xl font-bold">Welcome to Chorely</h1>
        <br></br>
      </div>
    </>
  )
}

export default App
