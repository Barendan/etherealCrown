import { useState, useEffect } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import { Container, Header, Divider, Button, Modal, Icon } from 'semantic-ui-react';
import moment from 'moment'

const localizer = momentLocalizer(moment);

const events = [
  {
      title: "Big Meeting",
      allDay: true,
      start: new Date(2022, 4, 0),
      end: new Date(2022, 1, 0),
  },
  {
      title: "Vacation",
      start: new Date(2022, 1, 7),
      end: new Date(2022, 1, 10),
  },
  {
      title: "Conference",
      start: new Date(2022, 1, 20),
      end: new Date(2022, 1, 23),
  },
];

const CalendarPage = () => (
  <Container style={{padding: 20}}>
    <Header as="h1" style={{fontSize: '42px'}}>Calendar Page</Header>
    <Divider section />
    <Divider hidden />
    
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

export default CalendarPage;