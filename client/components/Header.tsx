import { Link } from 'react-router'
import LoginButton from './nav/LoginButton'

export default function Header() {
  return (
    <header className="header bg-gradient-to-r from-sky-400 to-yellow-300 p-1 text-white shadow-lg">
      <div className="container mx-auto flex items-center justify-between px-3 py-2">
        <div className="flex items-center gap-3">
          <Link
            to="/"
            className="text-sm font-medium text-white hover:text-yellow-200"
          >
            Home
          </Link>
          <Link
            to="/chores"
            className="text-sm font-medium text-white hover:text-yellow-200"
          >
            My Chores
          </Link>
          <Link
            to="/profile"
            className="text-sm font-medium text-white hover:text-yellow-200"
          >
            My Profile
          </Link>
        </div>
        <div className="flex justify-end">
          <LoginButton />
        </div>
      </div>
    </header>
  )
}
