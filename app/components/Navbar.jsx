/** Optimized for screen sizes under 640px first */
/** TODO: Add a function so that when hovering over nav links other than home, it transfers the white bubble around it to the link hovered on currently */
const Navbar = () => {
  return (
    <nav className='w-full flex justify-center absolute top-0 right-0 left-0 z-20'><div className='h-16 lg:h-18 min-w-11/12 flex justify-center items-center rounded-full mt-8 bg-deep-navy/50 backdrop-blur-3xl border border-border-gray/50'>
            <ul className=' flex justify-around items-center max-w-4xl'>
                <a href="#home">
                    <li className='font-medium px-4 sm:px-12 lg:px-16 py-3 lg:py-4 mr-2 text-light-gray hover:text-hot-red rounded-full ease-in-out duration-200'>Home</li>
                </a>
                <a href="#projects">
                  <li className='font-medium px-4 sm:px-12 lg:px-16 py-3 lg:py-4 mx-2 text-light-gray hover:text-hot-red rounded-full ease-in-out duration-300'>Projects

                  </li>
                </a>
                <a href="#contact">
                  <li className='font-medium px-4 sm:px-12 lg:px-16 py-3 lg:py-4 ml-2 text-light-gray hover:text-hot-red rounded-full ease-in-out duration-300'>Contact</li>
                </a>
            </ul>
        </div>
    </nav>
  )
}

export default Navbar