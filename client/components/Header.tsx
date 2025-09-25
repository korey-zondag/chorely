import LoginButton from './Nav/LoginButton'

export default function Header() {
  return (
    <header className="header bg-gradient-to-r from-sky-400 to-yellow-300 p-2 text-white shadow-lg">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        <div className="flex items-center gap-4"></div>
        <div className="flex justify-end">
          <LoginButton />
        </div>
      </div>
    </header>
  )
}
