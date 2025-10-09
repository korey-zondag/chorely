import { Link } from 'react-router'

export default function Footer() {
  return (
    <footer className="mt-auto bg-gradient-to-r from-yellow-300 to-sky-400 text-white shadow-lg">
      <div className="container mx-auto px-4 py-3">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {/* Brand Section */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="mb-1 text-lg font-bold">Chorely</h3>
            <p className="text-center text-xs text-white/90 md:text-left">
              Making chore management simple and organised for everyone.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-center md:items-start">
            <h4 className="mb-1 text-sm font-semibold">Quick Links</h4>
            <div className="flex flex-col space-y-0.5 md:space-y-1">
              <Link
                to="/"
                className="block text-xs text-white/90 transition-colors hover:text-white"
              >
                Home
              </Link>
              <Link
                to="/chores"
                className="block text-xs text-white/90 transition-colors hover:text-white"
              >
                Chores
              </Link>
              <Link
                to="/recipes"
                className="block text-xs text-white/90 transition-colors hover:text-white"
              >
                Recipes
              </Link>
              <Link
                to="/profile"
                className="block text-xs text-white/90 transition-colors hover:text-white"
              >
                Profile
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-3 border-t border-white/20 pt-2 text-center">
          <p className="text-xs text-white/80">
            © {new Date().getFullYear()} Chorely. All rights reserved. Made
            with ❤️ for better chore management.
          </p>
        </div>
      </div>
    </footer>
  )
}
