'use client'
import Image from 'next/image'
import { useEffect, useState } from 'react'

export default function Lightbox({items, startIndex=0, onClose}:{items:{src:string;alt:string}[]; startIndex?:number; onClose:()=>void}){
  const [index, setIndex] = useState(startIndex)
  useEffect(()=>{
    function onKey(e:KeyboardEvent){
      if(e.key === 'Escape') onClose();
      if(e.key === 'ArrowRight') setIndex(i => Math.min(items.length-1, i+1));
      if(e.key === 'ArrowLeft') setIndex(i => Math.max(0, i-1));
    }
    window.addEventListener('keydown', onKey)
    return ()=>window.removeEventListener('keydown', onKey)
  },[items.length, onClose])

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70" onClick={onClose}>
      <div className="max-w-4xl w-full mx-4" onClick={(e)=>e.stopPropagation()}>
        <div className="relative h-[60vh] md:h-[70vh] rounded-md overflow-hidden bg-black">
          <Image src={items[index].src} alt={items[index].alt} fill style={{objectFit:'contain'}} sizes="100vw"/>
        </div>
        <div className="flex items-center justify-between mt-3">
          <div className="text-sm text-slate-300">{items[index].alt}</div>
          <div className="flex gap-2">
            <button onClick={()=>setIndex(i => Math.max(0,i-1))} className="px-3 py-1 bg-slate-700 rounded">Prev</button>
            <button onClick={()=>setIndex(i => Math.min(items.length-1,i+1))} className="px-3 py-1 bg-slate-700 rounded">Next</button>
            <button onClick={onClose} className="px-3 py-1 bg-slate-700 rounded">Close</button>
          </div>
        </div>
      </div>
    </div>
  )
}
