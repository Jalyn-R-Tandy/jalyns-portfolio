import { ArrowUpRight, Github, ExternalLink} from 'lucide-react'
import Image from 'next/image'

const Card = ({ category, project, desc, techStack = [], img, site }) => {
  return (
        <div className='w-sm bg-deep-navy backdrop-blur-sm border border-white/10 !rounded-3xl overflow-hidden hover:border-white/20 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-white/10' >
            <div className="p-6 sm:p-8">
                {/* Categories & Quick Action Buttons */}
                <div className="flex items-start justify-between mb-4">
                    {/* Category Badge */}
                    <span className="px-3 py-1.5 bg-border-gray backdrop-blur-md border border-white/20 rounded-full text-xs font-medium text-medium-gray">
                        {category}
                    </span>
                {/* Quick Action Buttons */}
                <div className="flex gap-2">
                    {'https://github.com/jalyn-r-tandy/' && (
                        <a 
                        href='https://github.com/jalyn-r-tandy/'
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full hover:bg-white/20 transition-colors">
                            <Github size={16} className="text-text" />
                        </a>
                    )}
                    {'https://google.com/' && (
                        <a 
                        href='https://google.com/'
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full hover:bg-white/20 transition-colors">
                            <ExternalLink size={16} className="text-brand-text-primary" />
                        </a>
                    )}
                </div>
            </div>
            {/** Title */}
            <h3 className="text-2xl sm:text-3xl font-semibold text-brand-text-primary mb-3 group-hover:text-[#0066FF] transition-colors">
                {project}
            </h3>
            {/** Description */}
            <p className="text-medium-gray text-sm leading-relaxed mb-4">
                {desc}
            </p>
            {/** Tech Stack */}
            <div className="flex flex-wrap gap-2 mb-6">
                {techStack.map((item, index) => (
                    <span key={index} className="px-3 py-1 bg-white/5 border border-hot-red/20 rounded-lg text-xs font-medium text-hot-red transition-colors">
                        {item}
                    </span>
                ))}
            </div>
            {/** Project Image */}
            <div className="relative h-64 sm:h-72 lg:h-80 overflow-hidden bg-linear-to-br from-slate-800 to-slate-900">
                <Image
                src={img}
                width={400}
                height={400}
                alt=""
                className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent"></div>
            </div>

            {/** View Project */}
            <div className="px-6 sm:px-8 pb-6 sm:pb-8 -mt-8 relative z-10">
                <a href={site} target="_blank">
                    <button className="w-full flex items-center justify-center gap-2 px-6 py-3.5 hover:bg-hot-red hover:text-white bg-card-bg border-2 border-hot-red/50 text-hot-red font-medium rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-white/20">
                        <span>View Project</span>
                        <ArrowUpRight size={20} className="transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                    </button>
                </a>
            </div>
        </div>    
    </div>
  )
}

export default Card