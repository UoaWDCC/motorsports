import Icon, { IconProps } from './Icon'

type IconPropsWithoutSrc = Omit<IconProps, 'src' | 'alt'>

export const CalendarIcon = (props: IconPropsWithoutSrc) => (
  <Icon
    src="/images/icons/events/calendar.png"
    alt="Calendar"
    {...props}
  />
)