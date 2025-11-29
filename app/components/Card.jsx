import { ArrowUpRight, Github, ExternalLink} from 'lucide-react'

const Card = () => {
  return (
        /** TODO: Fix CTA buttons going under card and becoming blurry */
        <div className='w-sm bg-brand-primary-main/5 backdrop-blur-sm border border-black/10 rounded-3xl overflow-hidden hover:border-black/20 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-black/20' >
            <div className="p-6 sm:p-8">
                {/* Categories & Quick Action Buttons */}
                <div className="flex items-start justify-between mb-4">
                    {/* Category Badge */}
                    <span className="px-3 py-1.5 bg-black/10 backdrop-blur-md border border-black/20 rounded-full text-xs font-medium text-brand-text-primary">
                        Full Stack
                    </span>
                {/* Quick Action Buttons */}
                <div className="flex gap-2">
                    {'https://github.com/jalyn-r-tandy/' && (
                        <a 
                        href='https://github.com/jalyn-r-tandy/'
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full hover:bg-white/20 transition-colors">
                            <Github size={16} className="text-brand-text-primary" />
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
                Project #1
            </h3>
            {/** Description */}
            <p className="text-brand-text-muted text-sm sm:text-base leading-relaxed mb-4">
                This is the first project that I am going to put on my now new personal portfolio website.
            </p>
            {/** Tech Stack */}
            <div className="flex flex-wrap gap-2 mb-6">
                <span className="px-3 py-1 bg-black/5 border border-black/10 rounded-lg text-xs font-medium text-brand-text-muted hover:bg-black/10 transition-colors">React</span>
            </div>
            {/** Project Image */}
            <div className="relative h-64 sm:h-72 lg:h-80 overflow-hidden bg-linear-to-br from-slate-800 to-slate-900">
                <img 
                src="https://unsplash.com/photos/monitor-showing-java-programming-OqtafYT5kTw?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink" 
                alt=""
                className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110"/>
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent"></div>
            </div>

            {/** View Project */}
            <div className="px-6 sm:px-8 pb-6 sm:pb-8 -mt-8 relative z-10">
                <button className="group/btn w-full flex items-center justify-center gap-2 px-6 py-3.5 bg-[#0066FF] hover:bg-[#0052CC] text-white font-medium rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/30">
                    <span>View Project</span>
                    <ArrowUpRight size={20} className="transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                </button>
            </div>
        </div>    
    </div>
  )
}

export default Card