'use client'

import { Stars } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import React, { useEffect } from "react"
import {
  useMotionTemplate,
  useMotionValue,
  motion,
  animate,
} from "framer-motion"
import Navbar from "./Navbar"

const COLORS_TOP = ['#06f', '#3385ff', '#0052cc', '#ff6b35']

const Hero = () => {
  const color = useMotionValue(COLORS_TOP[0])

  useEffect(() => {
    animate(color, COLORS_TOP, {
      ease: "easeInOut",
      duration: 10,
      repeat: Infinity,
      repeatType: "mirror",
    })
  }, [color]) 

  const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, #020617 50%, ${color})`

  return (
    // <section className='mt-12 h-screen flex flex-col items-center'>
    //     <h1 className="mx-2 text-5xl lg:text-7xl font-bold text-brand-text-light font-headings text-center leading-[1.2]">I&apos;m <span className="bg-linear-to-bl from-brand-text-light to-brand-primary-light text-transparent bg-clip-text">Jalyn</span>,
    //         <br /> 
    //         Full Stack Developer
    //     </h1>

    //     {/** TODO: Hero Image */}
    //     <div>
    //     </div>
    // </section>
    <div>
      < Navbar />
      <motion.section
        style={{backgroundImage}} className="relative grid min-h-screen place-content-center overflow-hidden bg-gray-950 px-4 py-24 text-gray-200">
        <div className="relative z-10 flex flex-col items-center">
          <span className="mb-2 inline-block rounded-full bg-brand-primary-main/50 px-4 py-1 text-sm border border-white/20">Computer Science Student</span>
          <h1 className="max-w-3xl bg-linear-to-br from-white to-gray-400 bg-clip-text text-center text-5xl font-medium leading-tight text-transparent md:text-7xl">I&apos;m <span className="bg-linear-to-bl from-brand-text-light to-brand-primary-light text-transparent bg-clip-text">Jalyn</span>, <br /> Full Stack Developer</h1>
          <p className="my-6 max-w-xl text-center text-base leading-relaxed md:text-lg md:leading-relaxed">Transforming ideas with modern development. Delivering well coded, high-speed full-stack web solutions that are aesthetically clean and fully responsive for optimal user experience. </p>
        </div>

        <div className="absolute inset-0 z-0">
          <Canvas>
            <Stars radius={50} count={2500} factor={4} fade speed={2} />
          </Canvas>
        </div>
      </motion.section>
    )
    </div>
  )
}

export default Hero