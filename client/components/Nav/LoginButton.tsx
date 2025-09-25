import { Button } from '../UI/Button.tsx'
import { IfAuthenticated, IfNotAuthenticated } from './Authentication.tsx'
import { useAuth0 } from '@auth0/auth0-react'

function LoginButton() {
  const { user, loginWithRedirect, logout } = useAuth0()
  console.log(user)

  const handleSignOut = () => {
    // console.log('sign out')
    logout()
  }

  const handleSignIn = () => {
    // console.log('sign in')
    loginWithRedirect()
  }

  return (
    <>
      <IfAuthenticated>
        <div className="flex items-center space-x-3">
          {user && (
            <img
              src={user?.picture}
              alt={user?.name}
              className="h-8 w-8 rounded-full"
            />
          )}
          {user && <p>{user?.nickname}</p>}
          <Button
            onClick={handleSignOut}
            className="rounded-lg bg-sky-400 px-6 py-3 text-lg font-bold text-white hover:bg-blue-500"
          >
            Log out
          </Button>
        </div>
      </IfAuthenticated>
      <IfNotAuthenticated>
        <div className="flex items-center space-x-3">
          <Button
            className="rounded-lg bg-sky-400 px-6 py-3 text-lg font-bold text-white hover:bg-blue-500"
            onClick={handleSignIn}
          >
            Log in
          </Button>
        </div>
      </IfNotAuthenticated>
    </>
  )
}

export default LoginButton
