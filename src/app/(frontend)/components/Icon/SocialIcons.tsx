import Icon, { IconProps } from './Icon'

type IconPropsWithoutSrc = Omit<IconProps, 'src' | 'alt'>

export const InstagramIcon = (props: IconPropsWithoutSrc) => (
  <Icon
    src="/images/icons/social/instagram.png"
    alt="Instagram"
    {...props}
  />
)

export const FacebookIcon = (props: IconPropsWithoutSrc) => (
  <Icon
    src="/images/icons/social/facebook.png"
    alt="Facebook"
    {...props}
  />
)

export const TiktokIcon = (props: IconPropsWithoutSrc) => (
  <Icon
    src="/images/icons/social/tiktok.png"
    alt="TikTok"
    {...props}
  />
)

export const TwitchIcon = (props: IconPropsWithoutSrc) => (
  <Icon
    src="/images/icons/social/twitch.png"
    alt="Twitch"
    {...props}
  />
)

export const DiscordIcon = (props: IconPropsWithoutSrc) => (
  <Icon
    src="/images/icons/social/discord.png"
    alt="Discord"
    {...props}
  />
)