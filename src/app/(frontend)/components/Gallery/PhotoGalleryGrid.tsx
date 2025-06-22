import React from 'react'
import Image from 'next/image'
import { GalleryAlbum } from '../../types/gallery'
import LoadMore from '../Events/load-more'
import './Gallery.css'

export default function PhotoGalleryGrid(props: GalleryAlbum) {
  return (
    <>
      <h3>{props.name}</h3>
      <div className="gallery-grid">
        {props.images.map((src, index) => (
          <div key={index} className="gallery-grid-item">
            <Image src={src} alt={src} width={100} height={100} layout="responsive" />
          </div>
        ))}
      </div>
    </>
  )
}
