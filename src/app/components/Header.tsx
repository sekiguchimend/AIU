
import Link from 'next/link'

const Header = () => {
  return (
    <header className="bg-transparent">
      <div className="container mx-auto px-4 py-6">
        <div className="flex justify-between items-center border-b border-gray-200 pb-4">
          <Link href="/" className="text-2xl font-bold text-gray-800 hover:text-gray-600 transition duration-300">
            AIU
          </Link>
          <nav className="hidden md:flex space-x-8">
            <Link href="/home" className="text-gray-600 hover:text-gray-800 transition duration-300 border-b-2 border-transparent hover:border-gray-800">
              home
            </Link>
            <Link href="/" className="text-gray-600 hover:text-gray-800 transition duration-300 border-b-2 border-transparent hover:border-gray-800">
              Services
            </Link>
            <Link href="/contact" className="text-gray-600 hover:text-gray-800 transition duration-300 border-b-2 border-transparent hover:border-gray-800">
              Contact
            </Link>
          </nav>
          <button className="md:hidden text-gray-600 hover:text-gray-800 transition duration-300">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header