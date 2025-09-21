export default function PodiumCircle(size: number, position: number) {
  let colour = '#000'
  switch (position) {
    case 1:
      colour = '#EFBF04'
      break
    case 2:
      colour = '#c0c0c0'
      break
    default:
      colour = '#cd7f32'
      break
  }

  const width = 5
  const rad = size / 2
  return (
    <svg width={(rad + width) * 2} height={(rad + width) * 2}>
      <ellipse cx={rad + width} cy={rad + width} rx={rad + width} ry={rad + width} fill={colour} />
      <ellipse cx={rad + width} cy={rad + width} rx={rad} ry={rad} fill="#ccc" />
    </svg>
  )
}
