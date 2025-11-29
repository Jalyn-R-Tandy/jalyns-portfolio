/** Optimized for screen sizes under 640px first */
/** TODO: Add a function so that when hovering over nav links other than home, it transfers the white bubble around it to the link hovered on currently */
const Navbar = () => {
  return (
    <nav className='w-full flex justify-center absolute top-0 right-0 left-0 z-20'>
        <div className='h-16 lg:h-18 min-w-11/12 flex justify-center items-center rounded-full mt-8 bg-brand-primary-dark/20 backdrop-blur-3xl border border-white/10'>
            <ul className=' flex justify-around items-center max-w-4xl text-white'>
                <li className='font-headings font-medium px-8 sm:px-12 lg:px-16 py-3 lg:py-4 mr-2 hover:bg-neutral-background hover:text-brand-text-primary rounded-full'><a href="#home">Home</a></li>
                <li className='font-headings font-medium px-8 sm:px-12 lg:px-16 py-3 lg:py-4 mx-2 hover:bg-neutral-background hover:text-brand-text-primary rounded-full'><a href="#projects">Projects</a></li>
                <li className='font-headings font-medium px-8 sm:px-12 lg:px-16 py-3 lg:py-4 ml-2 hover:bg-neutral-background hover:text-brand-text-primary rounded-full'><a href="#contact">Contact</a></li>
            </ul>
        </div>
    </nav>
  )
}

export default Navbar