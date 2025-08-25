import { InstagramIcon, FacebookIcon, TiktokIcon, TwitchIcon, DiscordIcon } from "../Icon/SocialIcons";
import { SocialItem } from "../../types/home";

export default function SocialComponent({ socialMedia }: { socialMedia: SocialItem[] }) {
    const renderSocialIcon = (item: SocialItem, index: number) => {
        const className = `${item.classname} small-image`;
        const props = { 
            className: className,
            href: item.linkUrl,
            width: 24,
            height: 24
        };

        // Return the appropriate icon based on classname
        switch (item.classname) {
            case "instagram":
                return <InstagramIcon key={index} {...props} />;
            case "facebook":
                return <FacebookIcon key={index} {...props} />;
            case "tiktok":
                return <TiktokIcon key={index} {...props} />;
            case "twitch":
                return <TwitchIcon key={index} {...props} />;
            case "discord":
                return <DiscordIcon key={index} {...props} />;
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