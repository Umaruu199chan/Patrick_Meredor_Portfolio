'use client'

import { useState } from 'react'
import Image from 'next/image'

interface ManualImageSwitcherProps {
  image1: string
  image2: string
}

export default function AnimatedImages({ image1, image2 }: ManualImageSwitcherProps) {
  const [currentImage, setCurrentImage] = useState(0) // 0 = image1, 1 = image2

  const images = [image1, image2]
  const totalImages = 2

  const nextImage = () => setCurrentImage((prev) => (prev + 1) % totalImages)
  const prevImage = () => setCurrentImage((prev) => (prev - 1 + totalImages) % totalImages)

  return (
    <div className="pt-6 pb-6 px-6">
      <div className="relative w-full aspect-video mb-4">
        <Image 
          src={images[currentImage]} 
          alt="Problem screenshot" 
          fill 
          className="object-cover hover:scale-105 transition-transform ease-out duration-300 rounded-md"
        />
      </div>
      
      {/* Next/Prev buttons */}
      <div className="flex justify-center gap-4">
        <button
          onClick={prevImage}
          className="w-12 h-12 bg-background/80 hover:bg-background border border-border rounded-full flex items-center justify-center text-foreground hover:scale-110 transition-all duration-200"
        >
          ‹
        </button>
        <span className="text-muted-foreground self-center text-sm">
          {currentImage + 1} / {totalImages}
        </span>
        <button
          onClick={nextImage}
          className="w-12 h-12 bg-background/80 hover:bg-background border border-border rounded-full flex items-center justify-center text-foreground hover:scale-110 transition-all duration-200"
        >
          ›
        </button>
      </div>
    </div>
  )
}
