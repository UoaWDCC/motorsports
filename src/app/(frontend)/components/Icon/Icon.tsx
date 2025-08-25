import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export interface IconProps {
  src: string
  alt: string
  width?: number
  height?: number
  onClick?: React.MouseEventHandler<HTMLImageElement>
  className?: string
  href?: string
  target?: string
}

export default function Icon({
  src,
  alt,
  width = 24,
  height = 24,
  onClick,
  className = '',
  href,
  target,
}: IconProps) {
  const iconElement = (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={className}
      onClick={onClick}
      style={{ cursor: onClick || href ? 'pointer' : 'default' }}
    />
  )

  if (href) {
    return (
      <Link href={href} target={target || '_self'}>
        {iconElement}
      </Link>
    )
  }

  return iconElement
}