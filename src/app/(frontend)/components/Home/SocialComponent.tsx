import ImageDisplay from "./ImageDisplay";
import { SocialItem } from "../../types/home";
import { it } from "node:test";
export default function SocialComponent( { socialMedia }: { socialMedia: SocialItem[] }) {

    return (
        <>
            {socialMedia? socialMedia.map((item, index) => (
                <ImageDisplay
                    key={index}
                    imageUrl={item.imageUrl}
                    linkUrl={item.linkUrl}
                    classname={`${item.classname} small-image`}
                />
            )): ""}
        </>
    );
}