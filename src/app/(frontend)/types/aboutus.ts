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

export interface DescriptionProps {
  title: string // Title of the description
  subtitle: string // Subtitle of the description
  content: string // Content of the description
  image: string // URL for the image
}
