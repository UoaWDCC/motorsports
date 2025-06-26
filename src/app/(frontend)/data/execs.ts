import { Exec, DescriptionProps } from '../types/aboutus'

export const fakeDescription: DescriptionProps[] =[
  {
    title: 'Lorem Ipsum Dolor sit amet',
    subtitle: 'Lorem ipsum dolor.',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse.',
    image: '/images/20250412_094454.jpg'
  },
  {
    title: 'Lorem Ipsum Dolor sit amet2',
    subtitle: 'Lorem ipsum dolor2.',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse.',
    image: '/images/20250412_094454.jpg'
  }
] 
export const fakeExecs: Exec[] = [
    { name: 'John Doe', role: 'President', image: '/images/about-us/placeholderExec.png' },
    { name: 'John Smith', role: 'Treasurer', image: '/images/about-us/placeholderExec.png' },
    { name: 'Jane Doe', role: 'Events Lead', image: '/images/about-us/placeholderExec.png' },
    { name: 'Jane Smith', role: 'Marketing Lead', image: '/images/about-us/placeholderExec.png' },
    { name: 'Jim Doe', role: 'Social Lead', image: '/images/about-us/placeholderExec.png' },
    { name: 'Jill Smith', role: 'Events Team', image: '/images/about-us/placeholderExec.png' },
    { name: 'Josh Doe', role: 'General Team', image: '/images/about-us/placeholderExec.png' },
    // { name: 'Jo Smith', role: 'General Team', image: '/images/about-us/placeholderExec.png' },
  ]