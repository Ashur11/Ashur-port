'use client'
import Image from 'next/image'
import dynamic from 'next/dynamic'
import Link from 'next/link'
import { motion } from 'framer-motion'
import Gallery from '../components/Gallery'

export default function Home() {
  return (
    <main className="min-h-screen">
      <header className="max-w-5xl mx-auto px-6 py-16 flex items-center gap-8">
        <div className="flex-1">
          <motion.h1 initial={{opacity:0,y:8}} animate={{opacity:1,y:0}} transition={{delay:0.05}} className="text-4xl font-bold">Ashur — Photography & Apps</motion.h1>
          <motion.p initial={{opacity:0,y:8}} animate={{opacity:1,y:0}} transition={{delay:0.12}} className="text-slate-300 mt-4 max-w-xl">A small selection of photography and projects. Smooth tra[...]</motion.p>
          <motion.div initial={{opacity:0,y:8}} animate={{opacity:1,y:0}} transition={{delay:0.18}} className="mt-6">
            <Link href="#gallery" className="inline-block bg-violet-600 text-white px-4 py-2 rounded-lg shadow">View work</Link>
          </motion.div>
        </div>
        <motion.div initial={{scale:0.98,opacity:0}} animate={{scale:1,opacity:1}} transition={{delay:0.2}} className="w-72 h-52 relative rounded-lg overflow-hidden shadow-lg">
          <Image src="https://picsum.photos/800/600" alt="Featured" fill style={{objectFit:'cover'}} sizes="(min-width: 1024px) 33vw, 50vw"/>
        </motion.div>
      </header>

      <section id="gallery" className="max-w-5xl mx-auto px-6 pb-20">
        <h2 className="text-2xl font-semibold mb-6">Selected work</h2>
        <Gallery />
      </section>

      <footer className="border-t border-slate-800 mt-12 py-8 text-center text-sm text-slate-400">© {new Date().getFullYear()} Ashur — Built with Next.js</footer>
    </main>
  )
}
