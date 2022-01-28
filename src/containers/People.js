import { useState, useEffect } from 'react';
import { Header, Divider, Button, Modal } from 'semantic-ui-react';
import { collection, query, onSnapshot } from "firebase/firestore";
import {db} from '../firebase';

import PeopleList from '../components/peopleList';
import PeopleForm from '../components/peopleForm';
import PeoplePane from '../components/peoplePane';

const People = () => {
  const [allPeople, setAllPeople] = useState([]);
  const [sPerson, setSPerson] = useState({});
  const [addModal, setAddModal] = useState(false);

  useEffect(() => {
    const q = query(collection(db, 'people'))
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      setAllPeople(querySnapshot.docs.map(doc => {
        let item = doc.data();
        return item
      }))
    })

    return () => unsubscribe();
  },[])


  return (
    <div className="peo-container">
      <PeopleList data={allPeople} setPerson={setSPerson} />
      <PeoplePane data={sPerson} />

      <Modal
        onOpen={() => setAddModal(true)}
        onClose={() => setAddModal(false)}
        open={addModal}
        trigger={ <Button size="massive" className="newpost-btn btn-pos">+ Add Person</Button> }
      >
        <Header icon>
          {/* <Icon name='archive' /> */}
          <h1>Add New Person</h1>
        </Header>

        <Modal.Content>
          <PeopleForm addModal={setAddModal} />
        </Modal.Content>

      </Modal>
    </div>

  )
}

export default People;