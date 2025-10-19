'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import { GalleryAlbum } from '../../types/gallery'
import './Gallery.css'
import { ChevronUpIcon, ChevronDownIcon } from '../Icon/UIIcons'

interface PhotoGalleryGridProps extends GalleryAlbum {
  loadMoreText?: string | null
  loadLessText?: string | null
}

export default function PhotoGalleryGrid({ name, images, loadMoreText, loadLessText }: PhotoGalleryGridProps) {
  const [loadMore, setLoadMore] = useState(false)
  const initialImages = 12 // Number of photos to show initially
  const imagesToShow = loadMore ? images : images.slice(0, initialImages)

  const toggleLoadMore = () => {
    setLoadMore(!loadMore)
  }
  const resolvedLoadMore = loadMoreText ?? 'Load more'
  const resolvedLoadLess = loadLessText ?? 'Show less'
  return (
    <>
      <h3>{name}</h3>
      <div className="gallery-grid">
        {imagesToShow.map((src, index) => (
          <div key={index} className="gallery-grid-item">
            <Image src={src} alt={src} width={100} height={100} layout="responsive" />
          </div>
        ))}
      </div>
      {images.length > initialImages && (
        <div className="LoadMore" onClick={toggleLoadMore}>
          {/* <p className="LoadMoreText">{loadMore ? 'Show less' : 'Load more'}</p> */}
          <p className="LoadMoreText">{loadMore ? resolvedLoadLess : resolvedLoadMore}</p>
          {loadMore ? (
            <ChevronUpIcon 
              className="LoadMoreChevron" 

            />
          ) : (
            <ChevronDownIcon 
              className="LoadMoreChevron" 

            />
          )}
        </div>
      )}
    </>
  )
}
