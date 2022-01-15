import { useState, useEffect } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import { Container, Header, Divider, Button, Modal, Icon } from 'semantic-ui-react';
import moment from 'moment'

const localizer = momentLocalizer(moment);

const events = [
  {
      title: "Big Meeting",
      allDay: true,
      start: new Date(2022, 0, 3),
      end: new Date(2022, 0, 3),
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
  const [newEvent, setNewEvent] = useState({ title: "", start: "", end: "" });
  const [allEvents, setAllEvents] = useState(events);

  function handleAddEvent() {
    setAllEvents([...allEvents, newEvent]);
  }
  
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
      
      <div style={{width: '800px', margin: '0 auto'}}>
        <Calendar
          localizer={localizer}
          events={events}
          startAccessor="start"
          endAccessor="end"
          style={{ width: 800, height: 500 }}
          />
        </div>
    </Container>
  )
}

export default CalendarPage;