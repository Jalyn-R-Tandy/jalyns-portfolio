import Hero from '@/app/components/Hero'
import CTA from '@/app/components/CTA'
import Projects from '@/app/components/Projects'
import Footer from '@/app/components/Footer'
import Contact from '@/app/components/Contact'

const page = () => {
  return (
    <main>
      < Hero />
      < Projects />
      < Contact />
      < CTA />
      < Footer />
    </main>
  )
}

export default page