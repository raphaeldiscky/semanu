import React from 'react'

const Hamburger = ({ isMenuOpen, setIsMenuOpen }) => {
  const barBasicClasses =
    'block rounded-full absolute h-0.5 w-full transform transition duration-300 ease-in-out bg-[#2D2A26]'
  return (
    <button
      onClick={() => setIsMenuOpen(!isMenuOpen)}
      className='flex-cc col relative ml-3 h-6 w-7 lg:hidden'
    >
      <div
        className={`${barBasicClasses} ${
          isMenuOpen ? '-rotate-45' : '-translate-y-2'
        }`}
      ></div>
      <div
        className={`${barBasicClasses} ${
          isMenuOpen ? 'rotate-45' : 'translate-y-0'
        }`}
      ></div>
    </button>
  )
}

export default Hamburger
