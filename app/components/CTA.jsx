'use client'

import { MdArrowOutward } from "react-icons/md";
import { useState } from "react";

const CTA = () => {
    const [resume, setResume] = useState("");

  return (
    <div className="w-full fixed bottom-0 flex justify-center mb-8" >
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-full flex justify-center items-center w-3/4 max-w-sm h-16 px-4 z-50">
            {/** Resume Button */}
            <div className="w-1/2 h-2/3 flex justify-center items-center rounded-full bg-white text-deep-navy">
                <a href="resume.pdf"
                   target="_blank"
                   rel="noopener noreferrer"
                   className="text-brand-text-primary font-semibold pr-2"
                >
                    Resume
                </a>
                <MdArrowOutward size={20}/>
            </div>

            {/** Hire Me Button */}
            <div className="w-1/2 h-2/3 flex justify-center items-center text-brand-text-light font-semibold underline-offset-4 underline hover:text-hot-red transition-colors duration-300"><a href="#">Hire Me</a></div>
        </div>
    </div>
  )
}

export default CTA