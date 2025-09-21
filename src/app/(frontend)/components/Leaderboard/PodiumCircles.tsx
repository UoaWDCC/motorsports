export default function PodiumCircle(size: number, border: number, rank: number) {
  let colour = '#ccc'
  switch (rank) {
    case 1:
      colour = '#F2C01F'
      break
    case 2:
      colour = '#EB534A'
      break
    case 3:
      colour = '#9747FF'
      break
  }

  const width = border
  const rad = size / 2
  return (
    <svg width={(rad + width) * 2} height={(rad + width) * 2}>
      <ellipse cx={rad + width} cy={rad + width} rx={rad + width} ry={rad + width} fill={colour} />
      <ellipse cx={rad + width} cy={rad + width} rx={rad} ry={rad} fill="#ccc" />
    </svg>
  )
}
