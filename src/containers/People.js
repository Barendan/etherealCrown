import { useState, useEffect } from 'react';
import { Container, Header, Divider, Button, Modal } from 'semantic-ui-react';

import PeopleList from '../components/peopleList';
import PeopleForm from '../components/peopleForm';
import PeoplePane from '../components/peoplePane';

const peopleData = [
  {
    firstName: 'daniel',
    lastName: 'barenboim',
    location: 'florida',
    dob: '04/20/1992',
    relationship: 'single',
    career: 'programmer',
    parents: 'distant',
    howmet: 'related',
    gender: 'male',
    hobbies: [],
    triggers: [],
    virtues: [],
    vices: [],
  }
]

const People = () => {
  const [addModal, setAddModal] = useState(false);


  return (
    <div className="peo-container">
      <PeopleList />
      <PeoplePane />

      <Modal
        onOpen={() => setAddModal(true)}
        onClose={() => setAddModal(false)}
        open={addModal}
        // size='tiny'
        trigger={ <Button size="massive" className="newpost-btn btn-pos">+ Add Person</Button> }
      >
        <Header icon>
          {/* <Icon name='archive' /> */}
          <h1>Add New Person</h1>
        </Header>

        <Modal.Content>
          <PeopleForm addModal={setAddModal}/>
          {/* <p>
            Your inbox is getting full, would you like us to enable automatic
            archiving of old messages?
          </p> */}
        </Modal.Content>

        <Modal.Actions>
          {/* <Button basic color='red' inverted onClick={() => setAddModal(false)}>
            <Icon name='remove' /> No
          </Button>
          <Button color='green' inverted onClick={() => setAddModal(false)}>
            <Icon name='checkmark' /> Yes
          </Button> */}
        </Modal.Actions>

      </Modal>
    </div>

  )
}

export default People;