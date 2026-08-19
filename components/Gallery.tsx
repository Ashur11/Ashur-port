'use client'
import Image from 'next/image'
import { useState } from 'react'
import { motion } from 'framer-motion'
import Lightbox from './Lightbox'

const items = [
  { id: 'p1', src: 'https://picsum.photos/seed/p1/1200/800', alt: 'Photo 1' },
  { id: 'p2', src: 'https://picsum.photos/seed/p2/1200/900', alt: 'Photo 2' },
  { id: 'p3', src: 'https://picsum.photos/seed/p3/1200/800', alt: 'Photo 3' },
  { id: 'p4', src: 'https://picsum.photos/seed/p4/1200/900', alt: 'Photo 4' },
]

export default function Gallery(){
  const [open, setOpen] = useState<number | null>(null)
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {items.map((it, idx) => (
          <motion.button key={it.id} onClick={()=>setOpen(idx)} className="group overflow-hidden rounded-lg shadow-lg p-0 bg-slate-800" whileHover={{ scale: 1.02 }}>
            <div className="relative h-48 w-full">
              <Image src={it.src} alt={it.alt} fill style={{objectFit:'cover'}} sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"/>
            </div>
            <div className="p-3 text-left">
              <div className="font-medium">{it.alt}</div>
              <div className="text-sm text-slate-400">Photography</div>
            </div>
          </motion.button>
        ))}
      </div>
      {open !== null && <Lightbox items={items} startIndex={open} onClose={()=>setOpen(null)} />}
    </>
  )
}
