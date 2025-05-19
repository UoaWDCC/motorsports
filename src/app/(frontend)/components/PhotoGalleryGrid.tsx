import React from 'react'
import Image from 'next/image'
import './styles.css'

interface albumType {
  name: string
  images: string[]
}

export default function PhotoGalleryGrid(props: albumType) {
  return (
    <>
      <h3>{props.name}</h3>
      <div className="gallery-grid">
        {props.images.map((src, index) => (
          <div key={index} className="gallery-grid-item">
            <Image
              src={src}
              alt={src}
              height={100}
              width={100}
              layout="responsive"
              objectFit="cover"
            />
          </div>
        ))}
      </div>
    </>
  )
}
