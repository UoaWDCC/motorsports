import "./Events.css"
import ImageDisplay from "./ImageDisplay";
interface EventItem {
    id: string;
    title: string;
    text: string;
    imageUrl: string;
    linkUrl: string;
}

interface EventItemProps {
    eventItem: EventItem;  
}

interface EventsBlockProps {
    events: EventItem[];
}

export function EventsBlock({ eventItem }: EventItemProps) {
    return (
        <>
            <div className="grid-item">
                <div>
                    <ImageDisplay linkUrl={eventItem.linkUrl} imageUrl={eventItem.imageUrl} classname="medium-image"/>
                </div>

                <div className="grid-item-text">
                    <a href={eventItem.linkUrl}><p className="grid-item-text-title">{eventItem.title}</p></a>
                    <p className="grid-item-text-description">{eventItem.text}</p>
                </div>
                
            </div>
        </>
    );
}

export function EventsBlocks({events}: EventsBlockProps) {

    return (
        <>
            {events? events.map((event, index) => (
                <EventsBlock eventItem={event} key={index}/>
            )): ""}
        </>
    );
}
