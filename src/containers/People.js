import { useState, useEffect } from 'react';
import { Header, Divider, Button, Modal } from 'semantic-ui-react';

import { collection, query, orderBy, onSnapshot } from "firebase/firestore";
import {db} from '../firebase';


import PeopleList from '../components/peopleList';
import PeopleForm from '../components/peopleForm';
import PeoplePane from '../components/peoplePane';

const People = () => {
  const [allPeople, setAllPeople] = useState([]);
  const [addModal, setAddModal] = useState(false);

  useEffect(() => {
    const q = query(collection(db, 'people'))
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      setAllPeople(querySnapshot.docs.map(doc => {
        let item = doc.data();
        // item.created = toDateTime(item.created.seconds);
        return item
      }))
    })

    return () => unsubscribe();
  },[])

  return (
    <div className="peo-container">
      <PeopleList data={allPeople} />
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