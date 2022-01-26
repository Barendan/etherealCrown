import { Card, Icon } from 'semantic-ui-react';

const PeoplePane = () => {

  const extra = (
    <a>
      <Icon name='user' />
      16 Friends
    </a>
  )

  return (
    <div>
      <Card
        image='/male2.png'
        header='Elliot Baker'
        meta='Friend'
        description='Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.'
        extra={extra}
      />
    </div>
  )
}

export default PeoplePane;