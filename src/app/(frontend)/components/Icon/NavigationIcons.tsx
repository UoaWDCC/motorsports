import Icon, { IconProps } from './Icon'

type IconPropsWithoutSrc = Omit<IconProps, 'src' | 'alt'>

export const UpArrowIcon = (props: IconPropsWithoutSrc) => (
  <Icon
    src="/images/icons/navigation/up-arrow.png"
    alt="Scroll up"
    {...props}
  />
)

export const DownArrowIcon = (props: IconPropsWithoutSrc) => (
  <Icon
    src="/images/icons/navigation/down-arrow.png"
    alt="Scroll down"
    {...props}
  />
)