export interface RaceData {
  profile: string // URL or path to image
  name: string
  time: number
}

export default function getData(): RaceData[] {
  return [
    { profile: '', name: 'John Doe', time: 30 },
    { profile: '', name: 'Jane Doe', time: 31 },
    { profile: '', name: 'Lane Doe', time: 40 },
    { profile: '', name: 'Kane Doe', time: 60 },
    { profile: '', name: 'Kane Toad', time: 80 },
    { profile: '', name: 'Blame Mode', time: 100 },
    { profile: '', name: 'Sea Foam', time: 3000 },
    { profile: '', name: 'Sea Flow', time: 3001 },
    { profile: '', name: 'Lame Bow', time: -1 },
    { profile: '', name: 'Lame Stow', time: -1 },
  ]
}
