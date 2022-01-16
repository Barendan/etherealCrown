import { useState, useEffect } from 'react';
import { Calendar, momentLocalizer, Event } from 'react-big-calendar';
import moment from 'moment'
import { Container, Header, Divider, Button, Modal, Icon } from 'semantic-ui-react';
import 'react-big-calendar/lib/addons/dragAndDrop/styles.css'
import 'react-big-calendar/lib/css/react-big-calendar.css'

import {
  addDoc, 
  collection, 
  onSnapshot, 
  query, 
} from "firebase/firestore";
import { db } from '../firebase';

const localizer = momentLocalizer(moment);

const eventsDemo = [
  {
      title: "Big Meeting",
      allDay: true,
      start: new Date(2022, 0, 3),
      end: new Date(2022, 0, 3),
  },
  {
      title: "Meditation",
      allDay: true,
      start: new Date(2022, 0, 5),
      end: new Date(2022, 0, 5),
  },
  {
      title: "Vacation",
      start: new Date(2022, 0, 7),
      end: new Date(2022, 0, 7),
  },
  {
      title: "Conference",
      start: new Date(2022, 0, 20),
      end: new Date(2022, 0, 23),
  },
];

const CalendarPage = () => {
  const [newEvent, setNewEvent] = useState({ title: "", start: "", end: "", allDay: true });
  const [allEvents, setAllEvents] = useState(eventsDemo);

  useEffect(()=> {
    const createEvent = async (event) => {
      await addDoc(collection(db, 'events'), event);
    };
    createEvent(eventsDemo[2]);
    
    const q = query(collection(db, "events"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      setAllEvents(querySnapshot.docs.map(doc => {
        let item = doc.data();
        item.start = toDateTime(item.start.seconds);
        item.end = toDateTime(item.end.seconds);
        return item
      }))
    })

    return () => unsubscribe()
  }, []);

  function toDateTime(secs) {
    let t = new Date(1970, 0, 1); // Epoch
    t.setSeconds(secs);
    return t;
  }


  
  
  // console.log('list of events:', allEvents)

  // function handleAddEvent() {
  //   setAllEvents([...allEvents, newEvent]);
  // }
  
  return (
    <Container style={{padding: 20}}>
      <Header as="h1" style={{fontSize: '42px'}}>Calendar Page</Header>
      <Divider section />
      <Divider hidden />

      {/* <div>
        <input 
          type="text" 
          placeholder="Add Title" 
          style={{ width: "20%", marginRight: "10px" }} 
          value={newEvent.title} 
          onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })} 
        />
        
          <DatePicker placeholderText="Start Date" style={{ marginRight: "10px" }} selected={newEvent.start} onChange={(start) => setNewEvent({ ...newEvent, start })} />
        
          <DatePicker placeholderText="End Date" selected={newEvent.end} onChange={(end) => setNewEvent({ ...newEvent, end })} />

          <button stlye={{ marginTop: "10px" }} onClick={handleAddEvent}>
            Add Event
          </button>

      </div> */}
      
      <div style={{width: '840px', margin: '0 auto'}}>
        <Calendar
          localizer={localizer}
          events={allEvents}
          startAccessor="start"
          endAccessor="end"
          resizable
          style={{ height: '70vh' }}
          />
        </div>
    </Container>
  )
}

export default CalendarPage;