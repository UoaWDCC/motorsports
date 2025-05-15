import ImageDisplay from "./ImageDisplay";
interface SocialItem {
    imageUrl: string;
    linkUrl: string;
}
interface SocialComponentProps {
    socialMedia: SocialItem[];
}
export default function SocialComponent( { socialMedia }:SocialComponentProps) {

    return (
        <>
            {socialMedia? socialMedia.map((item, index) => (
                <ImageDisplay
                    key={index}
                    imageUrl={item.imageUrl}
                    linkUrl={item.linkUrl}
                    classname="small-image "
                />
            )): ""}
        </>
    );
}