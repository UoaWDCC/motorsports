import "./Events.css"
import ImageDisplay from "./ImageDisplay";
import { EventItemProps, EventsBlockProps } from "../../types/events";

export function EventsBlock({ eventItem, index }: EventItemProps) {
    const isEven = index % 2 === 0;
    const alignClass = isEven ? "left-align" : "right-align";
    return (
        <div className={`${alignClass}`}>
            <div className="grid-item-content">
                <div className="grid-item-image">
                    <ImageDisplay linkUrl={eventItem.linkUrl} imageUrl={eventItem.imageUrl}/>
                </div>

                <div className="grid-item-text">
                    <a href={eventItem.linkUrl}><p className="grid-item-text-title">{eventItem.title}</p></a>
                    <p className="grid-item-text-description">{eventItem.info}</p>
                </div>
            </div>
        </div>
    );
}

export function EventsBlocks({events}: EventsBlockProps) {

    return (
        <>
            {events? events.map((event, index) => (
                <EventsBlock eventItem={event} index={index} key={index}/>
            )): ""}
        </>
    );
}
