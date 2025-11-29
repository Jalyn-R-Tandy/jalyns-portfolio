import Card from '@/app/components/Card'

const Projects = () => {
  return (
    <section className="max-w-full h-max bg-brand-text-light/95 border-white/5 border rounded-4xl p-8">
        <h2 className="font-semibold text-[32px] mb-8 text-brand-text-primary text-center lg:text-start lg:ml-16">My Projects</h2>
        <div className='flex flex-col justify-center items-center gap-16 lg:flex-row lg:gap-8 xl:gap-24'>
            <Card />
            <Card />
            <Card />
        </div>
    </section>
  )
}

export default Projects