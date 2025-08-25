import { InstagramIcon, FacebookIcon, TiktokIcon, TwitchIcon, DiscordIcon } from "../Icon/SocialIcons";
import { SocialItem } from "../../types/home";

export default function SocialComponent({ socialMedia }: { socialMedia: SocialItem[] }) {
    const renderSocialIcon = (item: SocialItem, index: number) => {
        const className = `${item.classname} small-image`;
        const props = { 
            key: index,
            className: className,
            href: item.linkUrl,
            width: 24,
            height: 24
        };

        // Return the appropriate icon based on classname
        switch (item.classname) {
            case "instagram":
                return <InstagramIcon {...props} />;
            case "facebook":
                return <FacebookIcon {...props} />;
            case "tiktok":
                return <TiktokIcon {...props} />;
            case "twitch":
                return <TwitchIcon {...props} />;
            case "discord":
                return <DiscordIcon {...props} />;
            default:
                return null;
        }
    };

    return (
        <>
            {socialMedia ? socialMedia.map(renderSocialIcon) : ""}
        </>
    );
}