import Icon, { IconProps } from './Icon'

type IconPropsWithoutSrc = Omit<IconProps, 'src' | 'alt'>

export const HamburgerClose = (props: IconPropsWithoutSrc) => (
  <Icon
    src="/images/icons/hamburgermenu/hamburgerclose.png"
    alt="Hamburger menu close"
    {...props}
  />
)

export const HamburgerMenu = (props: IconPropsWithoutSrc) => (
  <Icon src="/images/icons/hamburgermenu/hamburgermenu.png" alt="Hamburger menu" {...props} />
)
