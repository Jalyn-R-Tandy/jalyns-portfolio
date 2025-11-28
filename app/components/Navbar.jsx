import React from 'react'

/** Optimized for screen sizes under 640px first */
/** TODO: Add a function so that when hovering over nav links other than home, it transfers the white bubble around it to the link hovered on currently */
const Navbar = () => {
  return (
    <nav className='w-full flex justify-center'>
        <div className='h-16 sm:h-18 lg:h-20 min-w-11/12 flex justify-center items-center rounded-full mt-8 bg-white/10 backdrop-blur-3xl border border-white/20'>
            <ul className='flex justify-around items-center w-full text-brand-secondary text-white sm:text-lg lg:text-xl'>
                <li className='font-headings font-medium px-8 sm:px-12 lg:px-16 py-3 sm:py-4 lg:py-5 mr-2 hover:bg-neutral-background hover:text-brand-text-primary rounded-full'><a href="#home">Home</a></li>
                <li className='font-headings font-medium px-8 sm:px-12 lg:px-16 py-3 sm:py-4 lg:py-5 mx-2 hover:bg-neutral-background hover:text-brand-text-primary rounded-full'><a href="#projects">Projects</a></li>
                <li className='font-headings font-medium px-8 sm:px-12 lg:px-16 py-3 sm:py-4 lg:py-5 ml-2 hover:bg-neutral-background hover:text-brand-text-primary rounded-full'><a href="#contact">Contact</a></li>
            </ul>
        </div>
    </nav>
  )
}

export default Navbar