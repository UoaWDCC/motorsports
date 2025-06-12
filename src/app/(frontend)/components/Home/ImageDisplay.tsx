import  "./Home.css";
import ConditionalLink from "./ConditionalLink";

export default function ImageDisplay(props: any) {
    // This component is responsible for displaying images
  return (
        <ConditionalLink href={props.linkUrl}>
            <img src={props.imageUrl} alt={props.alt} className={props.classname} />
        </ConditionalLink>
  );
}