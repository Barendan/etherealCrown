import {
  Card,
  Icon,
  Button,
  Form,
  Input,
  Select,
  Message,
  Radio,
  TextArea,
} from 'semantic-ui-react';

const PeoplePane = ({data}) => {

  return (
    <div className="peo-pane">

      <Card
        image='/male1.png'
        // header='Elliot Baker'
        // meta='Friend'
      />

      <Form size="big">
        <Form.Group widths='equal'>
          <Form.Field
            control={Input}
            label='First name'
            placeholder='First name'
            value={data.firstName}
            readOnly
          />
          <Form.Field
            control={Input}
            label='Last name'
            placeholder='Last name'
            value={data.lastName}
            readOnly
          />
          <Form.Field
            control={Select}
            label='Gender'
            placeholder={data.gender}
            // value={data.gender}
            readOnly
          />
        </Form.Group>

        <Form.Group widths='equal'>
          <Form.Field
            control={Input}
            label='Location'
            placeholder='Location'
            value={data.location}
          />
          <Form.Field
            control={Input}
            label='Career'
            placeholder='Career'
            value={data.career}
          />
          <Form.Field
            control={Select}
            label='How we met'
            // options={options.howmet}
            placeholder={data.howmet}
            // value={data.howmet}
          />
        </Form.Group>

        <Form.Group inline>
          <label>Status</label>
          <Form.Field
            control={Radio}
            label='Single'
            value='Single'
            checked={data.status === 'Single'}
          />
          <Form.Field
            control={Radio}
            label='Taken'
            value='Taken'
            checked={data.status === 'Taken'}
          />
          <Form.Field
            control={Radio}
            label='Unknown'
            value='Unknown'
            checked={data.status === 'Unknown'}
          />
        </Form.Group>

        <Form.Field
          control={TextArea}
          label='Additional Notes'
          placeholder='What else is there...'
          value={data.extra}
          readOnly
        />

        {/* <Form.Field positive control={Button}>Submit</Form.Field> */}
      </Form>

    </div>
  )
}

export default PeoplePane;