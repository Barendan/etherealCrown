import { useState, useCallback, useEffect } from 'react';
import {
  Button,
  Form,
  Input,
  Select,
  Message
} from 'semantic-ui-react';
import { v4 as uuidv4 } from 'uuid';

import { db } from '../firebase';
import { addDoc, collection } from "firebase/firestore";

const options = {
  emove: [
    { key: '5', text: '5%', value: '5' },
    { key: '10', text: '10%', value: '10' },
    { key: '20', text: '20%', value: '20' },
    { key: '50', text: '50%', value: '50' },
  ],
  etime: [
    { key: '1', text: '1 hour', value: '1' },
    { key: '6', text: '6 hours', value: '6' },
    { key: '12', text: '12 hours', value: '12' },
    { key: '24', text: '24 hours', value: '24' },
  ],
  conf: [
    { key: '1', text: '1', value: '1' },
    { key: '2', text: '2', value: '2' },
    { key: '3', text: '3', value: '3' },
    { key: '4', text: '4', value: '4' },
    { key: '5', text: '5', value: '5' },
  ]
}

const defaultFields = {
  id: uuidv4(),
  pair: '',
  buysell: true, 
  emove: 5, // percentage 
  etime: 1, // hours
  conf: 1, // confidence level 1-10
  inst: false,
  supres: false,
  status: false,
}

const TradeForm = ({addModal}) => {
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
    // Change Modal State to closed?
    // You should really Validate the fields first
    if (sField.pair.length > 0) {
        await addDoc(collection(db, "trades"), {
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
    // setTimeout(() => {
    //   alert(JSON.stringify(sField, null, 2));
    //   // setSubmitting(false);
    // }, 400)
  }

  return (    
    <Form 
      size="big"
      onSubmit={handleSubmit}
      error={error}
    >
    <Form.Group widths='equal'>
      <Form.Field
        control={Input}
        name="pair"
        label='Currency Pair:'
        placeholder='BTC-USDT'
        value={sField.pair}
        onChange={(e,data) => updateSField("pair", data.value)}
      />
      <Button.Group size='large'>
        <Button 
          toggle 
          positive
          type="button"
          onClick={() => updateSField("buysell",  true)}
        > Buy </Button>
        <Button.Or />
        <Button 
          toggle 
          negative
          type="button"
          onClick={() => updateSField("buysell",  false)}
        > Sell </Button>
      </Button.Group>
    </Form.Group>

    <Form.Group widths="5">
      <Form.Field
        name="emove"
        control={Select}
        label='Expected Move'
        options={options.emove}
        placeholder='5%'
        onChange={(e,data) => updateSField("emove", data.value)}
        />
      <Form.Field
        name="etime"
        control={Select}
        label='Expected Time'
        options={options.etime}
        placeholder='1 hour'
        onChange={(e,data) => updateSField("etime", data.value)}
      />
      <Form.Field
        name="etime"
        control={Select}
        label='Confidence'
        options={options.conf}
        placeholder='1'
        onChange={(e,data) => updateSField("conf", data.value)}
      />
    </Form.Group>

    <Form.Group widths="5">
      <Form.Checkbox 
        toggle 
        label="Sup or Res?"
        checked={sField.supres}
        onClick={() => updateSField("supres",  !sField.supres)}
      />
      <Form.Checkbox 
        toggle 
        label="Instinct"
        checked={sField.inst}
        onClick={() => updateSField("inst",  !sField.inst)}
      />
      
    </Form.Group>
    {/* {error} */}
    <Message
      error
      header='Error Occurred'
      content="You forgot to fill out a field."
    />
    <Form.Field control={Button}>Add Trade</Form.Field>
    </Form>
  )
}

export default TradeForm;