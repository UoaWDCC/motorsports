import React from 'react'
import './Gallery.css'
import { GalleryPageSettings } from '../../types/pageSettings'

interface GalleryHeaderProps {
  pageSettings?: GalleryPageSettings | null
}

// Original placeholder description kept if changes don't work
const FALLBACK_DESCRIPTION =
  'Morbi molestie bibendum malesuada. Aenean vitae arcu consectetur, interdum nulla vel, vehicula nisl.'

const extractPlainText = (value: unknown): string => {
  if (!value) return ''
  if (typeof value === 'string') return value

  if (Array.isArray(value)) {
    return value.map((child) => extractPlainText(child)).join(' ').trim()
  }

  if (typeof value === 'object') {
    const maybeRoot = (value as { root?: unknown }).root
    if (maybeRoot) return extractPlainText(maybeRoot)

    const maybeChildren = (value as { children?: unknown }).children
    if (maybeChildren) return extractPlainText(maybeChildren)

    const maybeText = (value as { text?: unknown }).text
    if (typeof maybeText === 'string') return maybeText
  }

  return ''
}

export default function GalleryHeader({ pageSettings }: GalleryHeaderProps) {
  const heading = pageSettings?.pageTitle ?? 'Photo Albums'
  const description = extractPlainText(pageSettings?.pageDescription) || FALLBACK_DESCRIPTION

  return (
    <div className="albums-header-section">
      <div className="albums-header-row">
        {/* Original code:
        <h2>PHOTO ALBUMS</h2>
        <p>
          Morbi molestie bibendum malesuada. Aenean vitae arcu consectetur, interdum nulla vel,
          vehicula nisl.
        </p>
        */}
        <h2>{heading}</h2>
        <p>{description}</p>
      </div>
      {/*
      <div className="albums-header-row">
        <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h3>
        <p>
          Morbi molestie bibendum malesuada. Aenean vitae arcu consectetur, interdum nulla vel,
          vehicula nisl.
        </p>
      </div>
      */}
    </div>
  )
}
