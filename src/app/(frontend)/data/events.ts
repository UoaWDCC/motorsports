import { TEvent } from '../types/events';

// Temp raw data
export const eventData: TEvent[] = [
  {
    id: "0",
    title: 'VROOM 2025 NEWS',
    info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus earum dolore itaque eos dolorem? Placeat amet vitae molestiae libero vero. Delectus earum dolore itaque eos dolorem? Placeat amet vitae molestiae libero vero. Delectus earum dolore itaque eos dolorem? Placeat amet vitae molestiae libero vero',
    dateStart: '2025-05-22T00:00:00',
    dateEnd: '2025-05-22T00:00:00',
    location: '2nd Floor Kate Edgar',
    imageUrl: "images/event1.jpg",
  },
  {
    id: "1",
    title: 'Have a good day Event 2',
    info: 'adipiscing elit. Quisque accumsan lectus et eleifend. Info about event 2',
    dateStart: '2025-05-25T17:00:00',
    dateEnd: '2025-05-25T18:00:00',
    location: 'OGGB Room 260',
    imageUrl: "images/event2.jpg",
  },
  {
    id: "2",
    title: 'WATCH PARTY Event 3',
    info: 'Morbi molestie bibendum malesuada. Aenean vitae arcu consectetur, interdum nulla vel, vehicula nisl. Info about event 3',
    dateStart: '2025-05-27T00:00:00',
    dateEnd: '2025-05-27T00:00:00',
    location: 'Engineering Building 401',
    imageUrl: "images/event3.jpg",
  },
  {
    id: "3",
    title: 'others Event 4',
    info: 'consectetur adipiscing elit. Quisque accumsan lectus et eleifend rutrum. Info about event 4',
    dateStart: new Date().toDateString(),
    dateEnd: new Date().toDateString(),
    location: 'Kate Edgar Information Commons',
    imageUrl: "images/event4.jpg",
  },
]