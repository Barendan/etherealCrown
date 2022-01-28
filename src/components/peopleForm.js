import { useState, useCallback } from 'react';
import {
  Button,
  Form,
  Input,
  Select,
  Message,
  Radio,
  TextArea,
} from 'semantic-ui-react';

import { db } from '../firebase';
import { addDoc, collection } from "firebase/firestore";

const options = {
  gender: [
    { key: 'm', text: 'Male', value: 'male' },
    { key: 'f', text: 'Female', value: 'female' },
    { key: 'o', text: 'Other', value: 'unknown' },
  ],
  howmet: [
    { key: 'a', text: 'Related', value: 'Related' },
    { key: 'b', text: 'School', value: 'School' },
    { key: 'c', text: 'Work', value: 'Work' },
    { key: 'd', text: 'Friend', value: 'Friend' },
    { key: 'e', text: 'Event', value: 'Event' },
  ]
}

const defaultFields = {
  firstName: '',
  lastName: '',
  location: '',
  status: '',
  career: '',
  howmet: '',
  gender: '',
  extra: '',
  // dob: '',
  // hobbies: [],
  // triggers: [],
  // virtues: [],
  // vices: [],
}

const PeopleForm = ({addModal}) => {
  const [ sField, setSField ] = useState(defaultFields);
  const [ error, setError ] = useState(false);

  const updateSField = useCallback((key, value) => {
    setSField(sField => {
      return {
        ...sField,
        [key]: value,
      };
    });
  }, []);
  
  const handleSubmit = async() => {
    console.log('sField reveal:', sField)
    if (sField.location.length > 0) {
        await addDoc(collection(db, "people"), {
          ...sField,
          created: new Date()
      })
      .then(() => console.log('successfully entered'))
      .catch(err => console.error("error dun happen",err))
      setError(false);
    }
    else {
      setError(true);
    }
    
    addModal(false);
    setSField(defaultFields);
  }
    
  return (
    <div>
      
      <Form
        size="big"
        onSubmit={handleSubmit}
        error={error}
      >
        <Form.Group widths='equal'>
          <Form.Field
            control={Input}
            label='First name'
            placeholder='First name'
            value={sField.firstName}
            onChange={(e,data) => updateSField("firstName", data.value)}
          />
          <Form.Field
            control={Input}
            label='Last name'
            placeholder='Last name'
            value={sField.lastName}
            onChange={(e,data) => updateSField("lastName", data.value)}
          />
          <Form.Field
            control={Select}
            label='Gender'
            options={options.gender}
            placeholder='Gender'
            value={sField.gender}
            onChange={(e,data) => updateSField("gender", data.value)}
          />
        </Form.Group>

        <Form.Group widths='equal'>
          <Form.Field
            control={Input}
            label='Location'
            placeholder='Location'
            value={sField.location}
            onChange={(e,data) => updateSField("location", data.value)}
          />
          <Form.Field
            control={Input}
            label='Career'
            placeholder='Career'
            value={sField.career}
            onChange={(e,data) => updateSField("career", data.value)}
          />
          <Form.Field
            control={Select}
            label='How we met'
            options={options.howmet}
            placeholder='Related'
            value={sField.howmet}
            onChange={(e,data) => updateSField("howmet", data.value)}
          />
        </Form.Group>

        <Form.Group inline>
          <label>Status</label>
          <Form.Field
            control={Radio}
            label='Single'
            value='Single'
            checked={sField.status === 'Single'}
            onChange={(e, {value}) => updateSField("status", value)}
          />
          <Form.Field
            control={Radio}
            label='Taken'
            value='Taken'
            checked={sField.status === 'Taken'}
            onChange={(e, {value}) => updateSField("status", value)}

          />
          <Form.Field
            control={Radio}
            label='Unknown'
            value='Unknown'
            checked={sField.status === 'Unknown'}
            onChange={(e, {value}) => updateSField("status", value)}

          />
        </Form.Group>

        {/* <Form.Group inline>
          <label>Virtues</label>
          <Form.Field
            control={Radio}
            label='One'
            value='1'
            checked={value === '1'}
            onChange={(e, {value}) => setValue(value)}
          />
          <Form.Field
            control={Radio}
            label='Two'
            value='2'
            checked={value === '2'}
            onChange={(e, {value}) => setValue(value)}
          />
          <Form.Field
            control={Radio}
            label='Three'
            value='3'
            checked={value === '3'}
            onChange={(e, {value}) => setValue(value)}
          />
        </Form.Group> */}
        
        {/* <Form.Group inline>
          <label>Vices</label>
          <Form.Field
            control={Radio}
            label='One'
            value='1'
            checked={value === '1'}
            onChange={(e, {value}) => setValue(value)}
          />
          <Form.Field
            control={Radio}
            label='Two'
            value='2'
            checked={value === '2'}
            onChange={(e, {value}) => setValue(value)}
          />
          <Form.Field
            control={Radio}
            label='Three'
            value='3'
            checked={value === '3'}
            onChange={(e, {value}) => setValue(value)}
          />
        </Form.Group> */}
        
        <Form.Field
          control={TextArea}
          label='Additional Notes'
          placeholder='What else is there...'
          value={sField.extra}
          onChange={(e,data) => updateSField("extra", data.value)}
        />
        <Message
          error
          header='Error Occurred'
          content="You forgot to fill out a field."
        />
        <Form.Field positive control={Button}>Submit</Form.Field>
      </Form>
    </div>
  )
}

export default PeopleForm;