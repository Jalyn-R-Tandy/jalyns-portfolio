import { MdArrowOutward } from "react-icons/md";

const CTA = () => {
  return (
    <div className="w-full fixed bottom-0 flex justify-center mb-8" >
        <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-full flex justify-center items-center w-3/4 max-w-sm h-16 px-4">
            {/** Resume Button */}
            <div className="w-1/2 h-2/3 flex justify-center items-center rounded-full bg-white">
                <a href="#"
                className="text-brand-text-primary font-semibold pr-2">
                    Resume
                </a>
                <MdArrowOutward size={20}/>
            </div>

            {/** Hire Me Button */}
            <div className="w-1/2 h-2/3 flex justify-center items-center text-brand-text-light font-semibold"><a href="#">Hire Me</a></div>
        </div>
    </div>
  )
}

export default CTA