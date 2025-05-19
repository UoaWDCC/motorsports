import PhotoGalleryGrid from '../components/PhotoGalleryGrid'

const testAlbums = [
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
    <div>
      <h1>Welcome to Gallery Content</h1>
      {testAlbums.map((album, index) => (
        <PhotoGalleryGrid name={album.name} images={album.images} key={index} />
      ))}
    </div>
  )
}
