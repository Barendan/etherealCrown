import { useState, useEffect } from 'react';
import {
  Button,
  Checkbox,
  Form,
  Input,
  Radio,
  Select,
} from 'semantic-ui-react';

const options = [
  { key: 'm', text: 'Male', value: 'male' },
  { key: 'f', text: 'Female', value: 'female' },
  { key: 'o', text: 'Other', value: 'other' },
]

const TradeForm = () => {
  const [ value, setValue ] = useState({});
  // get/set all form values with useState
  // validate, then send payload to DB

  // onSubmit function to close modal / send payload

  return (
    <Form size="big">
      <Form.Group widths='equal'>
        <Form.Field
          control={Input}
          label='Currency Pair:'
          placeholder='BTC-USDT'
          />
        {/* <Form.Field
          control={Select}
          label='Gender'
          options={options}
          placeholder='Gender'
          /> */}
      </Form.Group>

      <Form.Group inline>
        <label>Predicted Move</label>
        <Form.Field
          control={Radio}
          label='+5%'
          value='1'
          checked={value === '1'}
          onChange={ (e, {value}) => setValue(value)}
        />
        <Form.Field
          control={Radio}
          label='+10%'
          value='2'
          checked={value === '2'}
          onChange={ (e, {value}) => setValue(value)}
        />
        <Form.Field
          control={Radio}
          label='+20%'
          value='3'
          checked={value === '3'}
          onChange={ (e, {value}) => setValue(value)}
        />
        <Form.Field
          control={Radio}
          label='+50%'
          value='3'
          checked={value === '3'}
          onChange={ (e, {value}) => setValue(value)}
        />
        <Form.Field
          control={Radio}
          label='+50%'
          value='3'
          checked={value === '3'}
          onChange={ (e, {value}) => setValue(value)}
        />
      </Form.Group>

      <Form.Group inline>
        <label>Predicted Time</label>
        <Form.Field
          control={Radio}
          label='1hr'
          value='1'
          checked={value === '1'}
          onChange={ (e, {value}) => setValue(value)}
          />
        <Form.Field
          control={Radio}
          label='3hr'
          value='2'
          checked={value === '2'}
          onChange={ (e, {value}) => setValue(value)}
          />
        <Form.Field
          control={Radio}
          label='6hr'
          value='3'
          checked={value === '3'}
          onChange={ (e, {value}) => setValue(value)}
          />
        <Form.Field
          control={Radio}
          label='12hr'
          value='3'
          checked={value === '3'}
          onChange={ (e, {value}) => setValue(value)}
          />
        <Form.Field
          control={Radio}
          label='24hr'
          value='3'
          checked={value === '3'}
          onChange={ (e, {value}) => setValue(value)}
          />
      </Form.Group>

      <Form.Group widths="5">
        {/* <label>Buy or Sell?</label> */}
        <Form.Checkbox toggle label="Sell or Buy?"/>
        <Form.Checkbox toggle label="Near sup or res?"/>
      </Form.Group>

      <Form.Group widths="5">
        {/* <label>Buy or Sell?</label> */}
        <Form.Checkbox toggle label="Confidence Level"/>
        <Form.Checkbox toggle label="Instinct?"/>
      </Form.Group>

      <Form.Field control={Button}>Submit</Form.Field>
    </Form>
  )
}

export default TradeForm;