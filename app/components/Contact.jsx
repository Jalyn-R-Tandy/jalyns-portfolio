import { section } from "framer-motion/client"

const Contact = () => {
  return (
    <section className="w-screen h-[80vh] mt-16 flex justify-center items-center">
        <div className="bg-white/10 backdrop-blur-3xl border-white/10 border min-w-xl lg:min-w-4xl xl:min-w-6xl h-fit rounded-3xl flex flex-col items-center">
            <div className="w-full my-4">
                <h1 className="text-center font-medium text-2xl lg:text-3xl xl:text-4xl text-brand-text-light">Contact Me</h1>
            </div>

            <div className="w-full px-8" clas>
                <p className="text-brand-text-light mb-1">Full Name</p>
                <input placeholder="Enter your name" type="text" className="w-full h-12 bg-white/20 border border-white/20 rounded-2xl pl-4 mb-4"/>
            </div>

            <div className="w-full px-8">
                <p className="text-brand-text-light mb-1">Email Address</p>
                <input placeholder="Enter your email" type="email" className="w-full h-12 bg-white/20 border border-white/20 rounded-2xl pl-4 mb-4"/>
            </div>

            <div className="w-full px-8">
                <p className="text-brand-text-light mb-1">Your Message</p>
                <textarea placeholder="Send me a message!" style={{verticalAlign: 'top', paddingTop: '12px', textAlign: 'left',}} className="w-full h-36 bg-white/20 border border-white/20 rounded-3xl pl-4 mb-4"/>
            </div>

            <button className="bg-brand-primary-main rounded-2xl w-2/3 max-w-96 h-12 mb-8 text-brand-text-primary font-bold border-white/50 border-2">Send Message</button>
        </div>
    </section>
  )
}

export default Contact