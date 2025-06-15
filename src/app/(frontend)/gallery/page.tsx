import PhotoGalleryGrid from '../components/PhotoGalleryGrid'
import GalleryHeader from '../components/GalleryHeader'
import { GalleryAlbum } from '../types/gallery'
import Image from 'next/image'

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

export default function GalleryPage() {
  return (
    <div className="content-page">
      {/*reusable across similar page styles*/}
      <div className="background-image">
        <Image src="/images/20250412_094454.jpg" className="background-image" alt="gallery" fill />
        <div className="background-gradient" />
        <h1>GALLLERY</h1>
      </div>
      <div className="content">
        <GalleryHeader />
        {testAlbums.map((album, index) => (
          <PhotoGalleryGrid name={album.name} images={album.images} key={index} />
        ))}
      </div>
    </div>
  )
}
