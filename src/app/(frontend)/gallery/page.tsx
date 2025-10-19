import PhotoGalleryGrid from '../components/Gallery/PhotoGalleryGrid'
import GalleryHeader from '../components/Gallery/GalleryHeader'
import { GalleryAlbum } from '../types/gallery'
import Image from 'next/image'
import configPromise from '@payload-config'
import { getPayload } from 'payload'
import { GalleryPageSettings } from '../types/pageSettings'

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Gallery',
}

/*
// Original static gallery content preserved for easy rollback.
const testAlbums: GalleryAlbum[] = [
  {
    name: '2025 VROOM HAVE A GO DAY',
    images: [
      '/tempGalleryPhotos/20250412_094310.jpg',
      '/tempGalleryPhotos/20250412_094314.jpg',
      '/tempGalleryPhotos/20250412_094321.jpg',
      '/tempGalleryPhotos/20250412_094328.jpg',
      '/tempGalleryPhotos/20250412_094708.jpg',
      '/tempGalleryPhotos/20250412_094804.jpg',
      '/tempGalleryPhotos/20250412_103014.jpg',
      '/tempGalleryPhotos/20250412_110027.jpg',
      '/tempGalleryPhotos/20250412_110031.jpg',
      '/tempGalleryPhotos/20250412_110041.jpg',
      '/tempGalleryPhotos/20250412_110046.jpg',
      '/tempGalleryPhotos/20250412_110050.jpg',
      '/tempGalleryPhotos/20250412_110224.jpg',
      '/tempGalleryPhotos/20250412_110230.jpg',
    ],
  },
  {
    name: '2025 VROOM HAVE A GO DAY',
    images: [
      '/tempGalleryPhotos/20250412_094310.jpg',
      '/tempGalleryPhotos/20250412_094314.jpg',
      '/tempGalleryPhotos/20250412_094321.jpg',
      '/tempGalleryPhotos/20250412_094328.jpg',
      '/tempGalleryPhotos/20250412_094708.jpg',
      '/tempGalleryPhotos/20250412_094804.jpg',
      '/tempGalleryPhotos/20250412_103014.jpg',
      '/tempGalleryPhotos/20250412_110027.jpg',
      '/tempGalleryPhotos/20250412_110031.jpg',
      '/tempGalleryPhotos/20250412_110041.jpg',
      '/tempGalleryPhotos/20250412_110046.jpg',
      '/tempGalleryPhotos/20250412_110050.jpg',
      '/tempGalleryPhotos/20250412_110224.jpg',
      '/tempGalleryPhotos/20250412_110230.jpg',
    ],
  },
]
*/

const FALLBACK_TITLE = 'Gallery'
const DEFAULT_ALBUM_NAME = 'Media Uploads'
const DEFAULT_LOAD_MORE = 'Load more'
const DEFAULT_LOAD_LESS = 'Show less'

const isNonNullObject = (value: unknown): value is Record<string, unknown> =>
  typeof value === 'object' && value !== null

const isGalleryPageSettings = (value: unknown): value is GalleryPageSettings => {
  if (!isNonNullObject(value)) return false
  return (
    'pageTitle' in value ||
    'pageDescription' in value ||
    'loadMoreText' in value ||
    'loadLessText' in value
  )
}

const buildAlbumsFromMedia = (mediaDocs: any[]): GalleryAlbum[] => {
  const albumMap = new Map<string, string[]>()

  mediaDocs.forEach((doc: any) => {
    const imageUrl =
      typeof doc?.url === 'string'
        ? doc.url
        : typeof doc?.sizes?.thumbnail?.url === 'string'
          ? doc.sizes.thumbnail.url
          : null

    if (!imageUrl) return

    const albumNameCandidate = [
      doc?.albumName,
      doc?.album?.name,
      doc?.folder,
      doc?.alt,
    ].find((value) => typeof value === 'string' && value.trim().length > 0)

    const albumName = albumNameCandidate ?? DEFAULT_ALBUM_NAME
    const existing = albumMap.get(albumName) ?? []
    albumMap.set(albumName, [...existing, imageUrl])
  })

  return Array.from(albumMap.entries()).map(([name, images]) => ({
    name,
    images,
  }))
}

export default async function GalleryPage() {
  let albums: GalleryAlbum[] = []
  let pageSettings: GalleryPageSettings | null = null

  try {
    const payload = await getPayload({
      config: configPromise,
    })

    const [mediaResult, pageSettingsResult] = await Promise.all([
      payload.find({
        collection: 'media',
        limit: 100,
        overrideAccess: true,
      }),
      payload.find({
        collection: 'gallery-page-settings',
        limit: 1,
        overrideAccess: true,
      }),
    ])

    const mediaDocs: any[] = Array.isArray(mediaResult?.docs) ? mediaResult.docs : []
    const derivedAlbums = buildAlbumsFromMedia(mediaDocs)

    // To revert to the static gallery quickly, replace `derivedAlbums` with `testAlbums` above.
    albums = derivedAlbums
    const rawSettings = pageSettingsResult?.docs?.[0]
    pageSettings = isGalleryPageSettings(rawSettings) ? rawSettings : null
  } catch (error) {
    console.error(error)
    albums = []
    pageSettings = null
  }

  const pageTitle = pageSettings?.pageTitle ?? FALLBACK_TITLE
  const loadMoreText = pageSettings?.loadMoreText ?? DEFAULT_LOAD_MORE
  const loadLessText = pageSettings?.loadLessText ?? DEFAULT_LOAD_LESS
  const heroHeading = pageTitle.toUpperCase()

  return (
    <div className="content-page">
      <div className="background-image">
        <Image src="/images/20250412_094454.jpg" className="background-image" alt="gallery" fill />
        <div className="background-gradient" />
        <div className="gallery-header">
          {/* <h1>GALLLERY</h1> */}
          <h1>{heroHeading}</h1>
        </div>
      </div>
      <div className="gallery-content">
        <GalleryHeader pageSettings={pageSettings} />
        {albums.length > 0 ? (
          albums.map((album, index) => (
            <PhotoGalleryGrid
              name={album.name}
              images={album.images}
              key={`${album.name}-${index}`}
              loadMoreText={loadMoreText}
              loadLessText={loadLessText}
            />
          ))
        ) : (
          <p>No gallery albums available.</p>
        )}
      </div>
    </div>
  )
}
