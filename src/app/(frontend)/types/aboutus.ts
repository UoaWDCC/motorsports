export interface Exec {
  name: string
  role: string
  image: string // URL for the exec's image
}

export interface ExecsSectionProps {
  title: string // Title of the section (e.g., sub-team name)
  execs: Exec[] // List of execs
  titleColour?: string
}
