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

const COLORS_TOP = ['#e70202', '#971717', '#fb2121', '#bf3470']

const Hero = () => {
  const color = useMotionValue(COLORS_TOP[0])

  useEffect(() => {
    animate(color, COLORS_TOP, {
      ease: "easeInOut",
      duration: 3,
      repeat: Infinity,
      repeatType: "mirror",
    })
  }, [color]) 

  const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, #020617 50%, ${color})`

  return (
    <div id="#home">
      < Navbar />
      <motion.section
        style={{backgroundImage}} className="relative grid min-h-screen place-content-center overflow-hidden bg-gray-950 px-4 py-24 text-gray-200">
        <div className="relative z-10 flex flex-col items-center">
          <span className="title-tag">Computer Science Student</span>
          <h1 className="max-w-3xl text-center text-4xl font-medium leading-tight text-text md:text-7xl">I&apos;m
              <span className="title-effect">&nbsp;Jalyn</span>
              <br />
              Full Stack Developer
          </h1>
          <p className="my-6 max-w-xl text-center text-base text-medium-gray leading-relaxed md:text-lg md:leading-relaxed">Transforming ideas with modern development. Delivering well coded, high-speed full-stack web solutions that are aesthetically clean and fully responsive for optimal user experience. </p>
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