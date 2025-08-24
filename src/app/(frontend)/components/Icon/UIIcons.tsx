import Icon, { IconProps } from './Icon'

type IconPropsWithoutSrc = Omit<IconProps, 'src' | 'alt'>

export const ChevronUpIcon = (props: IconPropsWithoutSrc) => (
  <Icon
    src="/images/icons/ui/white_chevron_up.png"
    alt="Up facing chevron button"
    {...props}
  />
)

export const ChevronDownIcon = (props: IconPropsWithoutSrc) => (
  <Icon
    src="/images/icons/ui/white_chevron_down.png"
    alt="Down facing chevron button"
    {...props}
  />
)