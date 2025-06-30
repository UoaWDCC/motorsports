'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import { GalleryAlbum } from '../../types/gallery'
import './Gallery.css'

export default function PhotoGalleryGrid(props: GalleryAlbum) {
  const [loadMore, setLoadMore] = useState(false)
  const initialImages = 12 // Number of photos to show initially
  const imagesToShow = loadMore ? props.images : props.images.slice(0, initialImages)

  const toggleLoadMore = () => {
    setLoadMore(!loadMore)
  }
  return (
    <>
      <h3>{props.name}</h3>
      <div className="gallery-grid">
        {imagesToShow.map((src, index) => (
          <div key={index} className="gallery-grid-item">
            <Image src={src} alt={src} width={100} height={100} layout="responsive" />
          </div>
        ))}
      </div>
      {props.images.length > initialImages && (
        <div className="LoadMore" onClick={toggleLoadMore}>
          <p className="LoadMoreText">{loadMore ? 'Show less' : 'Load more'}</p>
          <img
            className="LoadMoreChevron"
            src={loadMore ? '/images/white_chevron_up.png' : '/images/white_chevron_down.png'}
            alt={loadMore ? 'Up facing chevron button' : 'Down facing chevron button'}
          />
        </div>
      )}
    </>
  )
}
