import Card from '@/app/components/Card'
import {desc} from "framer-motion/m";

const Projects = () => {
  return (
    <section id='projects' className="max-w-full h-max bg-darker-navy bg-linear-to-r to-hot-red rounded-4xl p-8 relative -top-12">
        <h2 className="font-semibold text-4xl mb-8 text-light-gray text-center md:text-5xl lg:text-start lg:ml-16 overflow-hidden">My Projects</h2>
        <div className='flex flex-col justify-center items-center p-16 gap-16 lg:flex-row lg:gap-8 xl:gap-24'>
            <Card category="AI Development" project="ResuLink" desc="AI-powered analyzer that provides tailored feedback, based on a job description." techStack={["React", "Next.js", "Claude AI"]} img="/resulink-img.png" site="https://resulink.netlify.app"/>
            <Card category="Full Stack / Mobile Development" project="GradPathAI" desc="This is the description for my project, app coming soon." techStack={["Next.js", "React"]} img="/coming-soon.png" site="#"/>
            <Card category="Web Development" project="Spotify Extension" desc="This is the description for my project, app coming soon." techStack={["Next.js"]} img="/coming-soon.png" site="#"/>
        </div>
    </section>
  )
}

export default Projects